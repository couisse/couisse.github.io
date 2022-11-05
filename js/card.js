class Card{
    constructor(cardId){
        this.id = cardId;
        let card = getCardData(this.id)
        this.title = card.title;
        this.color = card.color;
        this.desc = card.desc;
    }

    //7520636861742076 

    BuildHtml(isDiscover){
        //general
        let card = $('<div class="card" id="' + this.id + '"></div>');
        $(card).append('<div class="card-scaler"></div')
        let scaler = $(card).find(".card-scaler");
        if(isDiscover){
            $(scaler).css("height", (100*0.8*$(window).height()/600) + '%');
            $(card).addClass("discover-card");
        }
        
        //front
        $(scaler).append('<div class="card-front ' + this.color + '"></div>');
        let front = $(card).find(".card-front");
        $(front).append('<p class="card-title">' + this.title + '</p>');
        $(front).append('<div class="card-picture-frame"></div>');
        $(front.find(".card-picture-frame")).append('<img src="img/cards/' + this.id + '.jpg" class="card-picture">');
        $(front.find(".card-picture-frame")).append('<div class="card-picture-shadow"></div>');
        $(front).append('<div class="card-picture-holder"></div>');
        $(front).append('<i class="card-desc">" ' + this.desc + ' "</i>');
        
        //back
        $(scaler).append('<div class="card-back ' + this.color + '"></div>');
        let back = $(card).find(".card-back");
        $(back).append('<div class="card-back-logo"></div>')
        
        return card
    }
}
