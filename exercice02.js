function exercice02() {
    // On créer une variable message et on stock le message
    var message = "bonjour a tous !";
    // On Créer une variable taille et on utlise la fonction length et on passe en paramètre le message
    var taille = length(message);

    // on récupère la div avec l'id "exo02"
    var div = document.getElementById("exo02");

    // On créer une boucle for qui commence à 0 et se termine par la taille
    for (var i = 0; i < taille; i++) {
        // Si le caractère dans message === à 0 on rentre dans la condtion
        if (message[i] === "o") {
            var element = document.createElement("p");
            element.textContent = "Position : " + i;
            div.children[1].appendChild(element);            
        }
    }
    
    var nombreEspace = document.createElement("p");
    var nombreO = document.createElement("p");
    nombreEspace.textContent = "Il y à " + countCharacter(message, " ") + " espaces";
    nombreO.textContent = "Il y à " + countCharacter(message, "o") + " o";
    div.children[1].appendChild(nombreEspace);
    div.children[1].appendChild(nombreO);
}