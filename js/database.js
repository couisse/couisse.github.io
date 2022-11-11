const cardbase = JSON.parse(
    `{"number": 15, 
        "cardlist": [ 
            {
                "title": "Corentin Ouisse",
                "id": "corentin",
                "color": "magenta",
                "desc": "J'ai été un chat dans une vie antérieure. J'ai donc le devoir moral d'être insupportable"
            },
            {
                "title": "Pierre Gueguen",
                "id": "pierre",
                "color": "blue",
                "desc": "Vous savez moi je ne crois pas qu'il y ai de bonne ou de mauvaise situation, sauf le premier DS"
            },
            {
                "title": "Maxence Saïndou",
                "id": "maxence",
                "color": "green",
                "desc": "Rien ne se perd, rien ne se crée, tout se pécho"
            },
            {
                "title": "Alex Bouret",
                "id": "alex",
                "color": "red",
                "desc": "Sur un malentendu ça peut passer"
            },
            {
                "title": "Rova Randrianarison",
                "id": "raminia",
                "color": "blue",
                "desc": "Rien de grand dans le monde ne s'est accompli sans passion</br>-Hegel"
            },
            {
                "title": "Alexandre Thibault",
                "id": "alexandre",
                "color": "blue",
                "desc": "Bien dormir et bien manger sont les clés pour réussir en prepa"
            },
            { 
                "title": "Carla Mpon", 
                "id": "carla",
                "color": "green", 
                "desc": "Tout se paie dans la vie, il n'y a que la mort qui est gratuite et encore, elle vous coute la vie."
            }, 
            {
                "title": "Salif Véret",
                "id": "salif",
                "color": "blue",
                "desc": "Quand l'appétit va, tout va - Obélix"
            },
            { 
                "title": "La Très Sainte Craie", 
                "id": "craie",
                "color": "grey", 
                "desc": "On raconte que les solutions de tous les exos de maths se cachent en cet artéfact millénaire"
            }, 
            { 
                "title": "La Flûte", 
                "id": "flute",
                "color": "grey", 
                "desc": "De magnifiques concerts furent donnés grâce à cet instrument de légende"
            }, 
            {
                "title": "Qs",
                "id": "qs",
                "color": "magenta",
                "desc": "J'ai été un chat dans une vie antérieure. J'ai donc le devoir moral d'être insupportable"
            },
            {
                "title": "Ddd",
                "id": "ddd",
                "color": "blue",
                "desc": "Vous savez moi je ne crois pas qu'il y ai de bonne ou de mauvaise situation, sauf le premier DS"
            },
            { 
                "title": "Oui", 
                "id": "oui",
                "color": "grey", 
                "desc": "On raconte que les solutions de tous les exos de maths se cachent en cet artéfact millénaire"
            }, 
            {
                "title": "Non",
                "id": "non",
                "color": "magenta",
                "desc": "J'ai été un chat dans une vie antérieure. J'ai donc le devoir moral d'être insupportable"
            },
            {
                "title": "Surement",
                "id": "surement",
                "color": "blue",
                "desc": "Vous savez moi je ne crois pas qu'il y ai de bonne ou de mauvaise situation, sauf le premier DS"
            }
        ]
    }`
);

function getCardData(cardId){
    let card = cardbase.cardlist.find(card => card.id == cardId);
    if(card != undefined){
        return card;
    }else{
        throw "Carte " + cardId + " inconnue !";
    }
}
