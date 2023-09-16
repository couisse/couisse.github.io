const cardbase = JSON.parse(
    `{"number": 20, 
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
                "title": "Maïna Quiroz--Peyret",
                "id": "maina",
                "color": "blue",
                "desc": "Petit animal stupide"
            },
            {
                "title": "Amaury Loye",
                "id": "amaury",
                "color": "blue",
                "desc": "Toute 3-variété, compacte, sans bord, et simplement connexe, est homéomorphe à la 3-sphère."
            },
            { 
                "title": "Eliott Piccand", 
                "id": "eliott",
                "color": "magenta", 
                "desc": "); DROP TABLE Cards;"
            },
            {
                "title": "Gabin Landreau",
                "id": "gabin",
                "color": "green",
                "desc": "100 % pur beurre (salé ?!)"
            }, 
            {
                "title": "Yann Lemerle",
                "id": "yann",
                "color": "blue",
                "desc": "Je ne cherche pas à connaître les réponses, je cherche à comprendre les questions."
            }, 
            {
                "title": "Lilian Vault",
                "id": "lilian",
                "color": "red",
                "desc": "Lorem ipsum dolor sit amet"
            },
            {
                "title": "Aurelio Oliviero",
                "id": "aurelio",
                "color": "red",
                "desc": "L'inhomogénéité est la chose au monde la mieux partagée"
            },
            {
                "title": "Simon (la Chaise)",
                "id": "simon_chaise",
                "color": "magenta",
                "desc": "La vie, c'est comme une pastèque, y'a pas mal de pépins, mais c'est bon quand même !"
            },
            {
                "title": "Anne-Lise Adnot",
                "id": "annelise",
                "color": "orange",
                "desc": "Mais... !"
            },
            {
                "title": "Raphaëlle Calvez",
                "id": "raphaelle",
                "color": "green",
                "desc": "Je suis pas convaincue. Ça m'parait vachement foireux, c'te histoire."
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
