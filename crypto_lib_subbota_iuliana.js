//Partie 1
function what_are_words_worth() {
    let nom = prompt("Entrer qqlc");
    console.log(nom.length);
    return confirm("Le mot " + nom + " contient " + nom.length + " caracteres!");
}

//Partie 2
function count_words(string_of_words) {

    let count = 0; //pour compter les mots
    insideWord = false;

    for (let i = 0; i < string_of_words.length; ++i) {
        if (string_of_words.charAt(i) !== ' ') {
            if (!insideWord) {
                count++;
                insideWord = true;
            }
        } else {
            insideWord = false;
        }
    }
    return count;
}