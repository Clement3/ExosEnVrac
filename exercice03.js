function exercice03() {
    // On créer une variable message et on stock le message
    var message = "ceci est un texte assez long";
    // On créer une variable "taille" qui utilise la fonction "countWords" qui nous permet
    // de compter le nombre de mot dans une phrase
    var taille = countWords(message);
    // On créer une variable "words" ou on utilise la fonction "getWords" et on passe en paramètre
    // le message
    var words = getWords(message);
    // On créer une variable "temp" qui fera tampon
    var temp = "";
    // On créer une variable "resultat" qui stockera le resultat
    var resultat = "";

    // On parcours notre chaine de caractère
    for (var i = 0; i < taille; i++) {
        // Si quand on arrive au derniers mot on ajoute pas le tirer
        if (taille -1 === i) {
            temp += firstCharactere(words[i]);
        } else {
            temp += firstCharactere(words[i]) + "-"; 
        }
    }

    // On stock le resultat notre chaine de caractère modifier par la fonction replace
    resultat = replace(temp, "e", "E");

    var div = document.getElementById("exo03");
    var output = document.createElement("p");
    output.textContent = resultat;
    div.children[1].appendChild(output);
}