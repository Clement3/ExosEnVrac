function exercice04() {
    // On créer une variable "message" et on stock le message
    var message = "ceci est un texte assez long";
    // On créer une variable "taille" qui contient la taille de notre variable "message"
    var taille = length(message);
    // On créer une variable "tableaux" et on utilise la fonction "getWords" pour stocker chaque mot
    // dans un tableau
    var tableaux = getWords(message);

    var div = document.getElementById("exo04");

    var countWordsOutput = document.createElement("p");
    countWordsOutput.textContent = "Il y à : " + countWords(message) + " mots";
    div.children[1].appendChild(countWordsOutput);

    // On parcours le tableaux pour récuper l'index
    for (key in tableaux) {
        var element = document.createElement("p");
        element.textContent = "Le mot " + tableaux[key] + " a " + length(tableaux[key]) + " charactères et en position : " + key;
        div.children[1].appendChild(element);
    }
}