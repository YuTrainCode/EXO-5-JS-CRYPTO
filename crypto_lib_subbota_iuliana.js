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

//Partie 3
function count_words_by(string_of_words, letter) {

    let count = 0; //pour compter les mots
    insideWord = false;

    for (let i = 0; i < string_of_words.length; ++i) {
        if (string_of_words.charAt(i) !== letter) {
            if (!insideWord) {
                ++count;
                insideWord = true;
            }
        } else {
            insideWord = false;
        }
    }
    return count;
}

//Partie 4

//function est une voyelle
function is_a_vowel(letter) {

    for (let i = 0; i < vowels.length; ++i){
        if (vowels[i] === letter){
            return true;       }
    }

    return false;  
}

function count_vowels(string_of_words) {

    let counter = 0;

    for (let i = 0; i < string_of_words.length; ++i) {
        if (is_a_vowel(string_of_words.charAt(i))) {
            counter++;

        }
    }
    return counter;
}