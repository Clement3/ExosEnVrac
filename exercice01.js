function exercice01() {
    // On créer une variable message et stock le message dedans
    var message = "Hello world !";
    // On Créer une variable taille et on utlise la fonction length et on passe en paramètre le message
    var taille = length(message);

    var div = document.getElementById("exo01");

    // On créer une boucle, qui commence à 0 et qui se termine par la taille
    for (var i = 0; i < taille; i++) {
        // On créer une variable resultat qui stock : l'index + message par à l'apport à l'index
        var resultat = i + " = " + message[i];
        var element = document.createElement("p");
        element.textContent = resultat;
        div.children[1].appendChild(element);
    }
}