card = undefined;

$(document).ready(function() {
    let cardIds = GetAllIdsRandomly();

    $("#footprint").on("click", function(){
        card = new Card(cardIds.shift());
        if(cardIds.length == 0){
            cardIds = GetAllIdsRandomly();
        }
        $("#card-holder").html(card.BuildHtml(true));
        $("#footprint").addClass(card.color);
    });
});

$("#card-holder").on("click", function(){
    $("#card-holder .card").addClass("hidden");
    $("#footprint").removeClass(card.color);
})

function GetAllIdsRandomly(){
    let ids = [];
    //fetch all
    for (let i = 0; i < cardbase.number; i++) {
        ids.push(cardbase.cardlist[i].id);
    }

    //shuffle
    for (let i = 0; i < cardbase.number; i++){
        let r = Math.floor(Math.random()*cardbase.number);
        let temp = ids[i];
        ids[i] = ids[r];
        ids[r] = temp;
    }
    
    return ids
}
