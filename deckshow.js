/* Fonctions definitions ***********************************************************************************************/

/**** Basic utilities ****/

//getting the position of an element relative to the whole page
function getOffset(element) {
    const rect = element.getBoundingClientRect();
    return {
      left: Math.round(rect.left + window.scrollX),
      top: Math.round(rect.top + window.scrollY)
    };
}

/**** Card manipulation *****/

//the card code generator. returns a ref to the element (created but not appended)
function cardCreate(cardDescriptor){

    const card= document.createElement("div");
    card.setAttribute("class", "card "+cardDescriptor.color);

    const card_title= document.createElement("h6");
    card_title.setAttribute("class", "card_name");
    card_title.innerText = cardDescriptor.title;
    card.appendChild(card_title);

    const card_separator1= document.createElement("div");
    card_separator1.setAttribute("class", "separator");
    card.appendChild(card_separator1);

    const card_img= document.createElement("img");
    card_img.setAttribute("class", "card_avatar");
    card_img.setAttribute("src", "picts/"+cardDescriptor.img);
    card.appendChild(card_img);

    const card_separator2= document.createElement("div");
    card_separator2.setAttribute("class", "separator");
    card.appendChild(card_separator2);
    
    const card_desc= document.createElement("p");
    card_desc.setAttribute("class", "card_description");
    card_desc.innerText = cardDescriptor.desc;
    card.appendChild(card_desc);

    return card;
}

///extract from the JSON a random set of card
function extractcards(jsonbase, number){
    //checking if there is enough card
    let n = jsonbase.number;
    if (n<number){
        throw "JSON database is not big enough";
    }
    //extracting the cards
    let taken = [];
    let cards = [];
    let rand;
    let chosenOne;
    for (let i=0; i<number; i++){
        do {
            rand = Math.trunc(Math.random()*n);
        }while (taken.includes(rand));
        taken.push(rand);
        chosenOne = jsonbase.cardlist[rand];
        cards.push({"title": chosenOne.title, "img": chosenOne.image, "color": chosenOne.color, "desc": chosenOne.desc});
    }
    return cards;
}

//animate a card
function animateCard(cardref, startpos, endpos, duration, flipDirection){ 
    let firstflip, lastflip;
    if (flipDirection){
        firstflip = "rotateY(0deg)";
        lastflip = "rotateY(180deg)";
    }else{
        firstflip = "rotateY(180deg)";
        lastflip = "rotateY(0deg)";
    }
    animation = [{left: parseInt(startpos.left)+"px", top: parseInt(startpos.top)+"px", transform : firstflip},
                 {left:parseInt(endpos.left)+"px", top: parseInt(endpos.top)+"px", transform : firstflip, offset: 0.7},
                 {transform: lastflip}
                ];
    //launching animation
    cardref.animate(animation, duration);
    //fixing it into place
    cardref.style.left = parseInt(endpos.left)+"px";
    cardref.style.top = parseInt(endpos.top)+"px";
    cardref.style.transform = lastflip;
}

//creating and launching deploying animation for cards
//cardArray should be empty
function deploy(cardArray, anchorsArray, playgroundref, origin, deckpos, number, jsonbase){
    let chosens = extractcards(jsonbase, number);
    let desc = "On raconte que les solutions de tous les exos de maths se cachent en cet artéfact millénaire";
    for (let i=0; i<number; i++){
        //creating the card
        cardArray[i] = cardCreate(chosens[i]);
        playgroundref.appendChild(cardArray[i]);
        //attaching the card onto the deck
        cardArray[i].style.left = parseInt(deckpos.left)+"px";
        cardArray[i].style.top = parseInt(deckpos.top)+"px";
        cardArray[i].style.transform = "rotateY(180deg)";
        //animating it (whith a bit of delay)
        let fpos = getOffset(anchorsArray[i]);
        fpos = {left: fpos.left - origin.left, top: fpos.top - origin.top};
        setTimeout(() => {animateCard(cardArray[i], deckpos, fpos, 500, false)}, i*500); 
    }
}

//destroying and launching recalling animation for cards
function recall(cardArray, origin, deckpos){
    console.log("recall is called");
    let n = cardArray.length;
    for (let i=n-1; i>=0; i--){
        console.log(i);
        let ipos = getOffset(cardArray[i]);
        ipos = {left: ipos.left - origin.left, top: ipos.top - origin.top};
        //animate
        setTimeout(() => {animateCard(cardArray[i], ipos, deckpos, 500, true)}, (n-i-1)*500);
        //destroying
        setTimeout(() => {cardArray[i].remove(); cardArray.pop();}, (n-i)*500);
    }
}

//reinitialize playground and throw a new draw of cards
//cardArray should be full of cards
function redraw(cardArray, anchorsArray, playgroundref, origin, deckpos, number, deckref, fctEvent, jsonbase){
    recall(cardArray, origin, deckpos);
    setTimeout(() => {deploy(cardArray, anchorsArray, playgroundref, origin, deckpos, number, jsonbase);}, (number+1)*500);
    setTimeout(() => {deckref.addEventListener("click", fctEvent, {once: true});}, (2*number+1)*500); //defined as once for spam protection
}

/** Main Code *********************************************************************************************************** */

function mainFinish(jsonoutput){
    //getting targets
    const playground = document.querySelector(".card_container");
    const deck = document.querySelector(".deck");

    //constants
    const cardnumber = 3;

    //creating anchors
    let anchorsArray = [];
    for (let i=0; i<cardnumber; i++){
        anchorsArray.push( document.createElement("div") );
        anchorsArray[i].setAttribute("class", "anchor");
        playground.appendChild(anchorsArray[i]);
    }

    //getting the final position of the playground and deck
    const playgroundpos = getOffset(playground);
    let relativedeckpos = getOffset(deck);
    relativedeckpos = {left: relativedeckpos.left - playgroundpos.left, top: relativedeckpos.top - playgroundpos.top};

    //creating cards and initial launch
    let cardArray = [];
    deploy(cardArray, anchorsArray, playground, playgroundpos, relativedeckpos, cardnumber, jsonoutput);

    //the listener for redrawing
    let fctEvent;
    fctEvent = () => {redraw(cardArray, anchorsArray, playground, playgroundpos, relativedeckpos, cardnumber, deck, fctEvent, jsonoutput);};
    deck.addEventListener("click", fctEvent, {once: true}); //defined as once for spam protection
}

///extracting JSON
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
    mainFinish(JSON.parse(this.responseText));
}
xmlhttp.open("get", "cardsbase.json");
//sending the request
xmlhttp.send();