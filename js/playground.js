$(document).ready(function() {
    //vars
    let cardsPerLine = 5;
    let cardsGap = 30;//px
    let scale = $(window).height()*0.6/600;//default scale
    let zoom = 1; //0.2 ... 4
    let playground = $("#playground");

    //build playground
    playground.css("width", (400+cardsGap)*cardsPerLine + "px");
    playground.css("transform", "translate(-50%, -50%) scale(" + scale*zoom + ")");

    //build cards in playground
    for (let i = 0; i < cardbase.number; i++) {
        let card = new Card(cardbase.cardlist[i].id);
        playground.append(card.BuildHtml(false));
    }
    $("#playground .card").css("margin", cardsGap/2 + "px");

    //make the playground draggable
    $("#playground-screen").on('mousedown', function(e){
        $("#playground-screen").css("cursor", "grabbing");
        
        //save drag start
        height = playground.outerHeight();
        width = playground.outerWidth();
        ypos = playground.offset().top + height - e.pageY,
        xpos = playground.offset().left + width - e.pageX;

        //drag
        $(document.body).on('mousemove', function(e){
            var itop = e.pageY + ypos - height;
            var ileft = e.pageX + xpos - width;
            playground.offset({top: itop,left: ileft});
        })

        //end drag
        .on('mouseup', function(e){
            $(document.body).off('mousemove');
            $("#playground-screen").css("cursor", "grab");
        });
    });

    //make the playground zoomable
    $("#playground-screen").on('wheel', function(e){
        if(e.originalEvent.deltaY != 0){
            //process scroll data
            let lastZoom = zoom
            if(e.originalEvent.deltaY < 0 && zoom < 4){
                zoom *= 1.2;
            }
            if(e.originalEvent.deltaY > 0 && zoom > 0.2){
                zoom /= 1.2;
            }
            if(zoom == lastZoom){return;}//no zoom

            //compute transform
            let itop = e.pageY - zoom*(e.pageY - playground.offset().top)/lastZoom;
            let ileft = e.pageX - zoom*(e.pageX - playground.offset().left)/lastZoom;
            playground.offset({top: itop,left: ileft}); //translate to keep mouse point static
            playground.css("transform", "translate(-50%, -50%) scale(" + scale*zoom + ")"); //scale
        }
    });
})
