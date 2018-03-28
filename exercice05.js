function exercice05() {
    var message = "ceci est un texte assez long";
    var tableau = getWords(message);
    var longueur = countWords(message);

    for (var i = 0; i < longueur; i++) {
        // Si i est impaire 
        if (isModulo(i, 2, 1)) {
            tableau[i] = null;
        }

        /* On commence à l'index 1 et si i est pair
        if (i > 0) {
            if (isModulo(i, 2, 0))
                tableau[i] = null;
            }
        } */

        /* Si la longueur du mot est supérieur à 3
        if (length(tableau[i]) > 3 ) {
            tableau[i] = null;
        } */

        /* Si il y à le caractère "e" dans le mot (fonction hasWord) ! = opposé de true
        if (!hasWord(tableau[i], "e")) {
            tableau[i] = null;
        } */

        /* Utilise la fonction "removeVoyelles" - Vérifie si il à plus de deux voyelles
        if (removeVoyelles(tableau[i])) {
            tableau[i] = null;
        }
        */
    }

    var div = document.getElementById("exo05");

    for (key in tableau) {
        if (tableau[key]) {
            var element = document.createElement("p");
            element.textContent = tableau[key];
            div.children[1].appendChild(element);
        }
    }
}