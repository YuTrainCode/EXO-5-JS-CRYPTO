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

//Partie 5
function count_consonants(string_of_words){
    let counter = 0;

    for (let i = 0; i < string_of_words.length; ++i) {
        if (!is_a_vowel(string_of_words.charAt(i)) && string_of_words.charAt(i) !== ' ') {
            counter++;

        }
    }
    return counter;
}

//Partie 6
function remove(string_of_words, caracter){

    let result = "";

    for (let i = 0; i < string_of_words.length; ++i){

        if(string_of_words.charAt(i) !== caracter){
            result += string_of_words.charAt(i);
        } 
    }
    return result;
}

//Partie 7
function remove_strings(string_of_words, caracters) {
    let result = "";

    for (let i = 0; i < string_of_words.length; i++) {
        let charToCheck = string_of_words.charAt(i);
        let shouldRemove = false;

        // Vérifier si charToCheck est dans caracters
        for (let j = 0; j < caracters.length; j++) {
            if (charToCheck === caracters.charAt(j)) {
                shouldRemove = true;
                break;
            }
        }

        // Ajouter uniquement si le caractère ne doit pas être supprimé
        if (!shouldRemove) {
            result += charToCheck;
        }
    }

    return result;
}

//Partie 8
function crypto(a_string, a_number) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";  // Alphabet de base
    let result = "";

    for (let i = 0; i < a_string.length; i++) {
        let char = a_string.charAt(i);
        let isUpperCase = false;
        
        if (char >= 'A' && char <= 'Z') {
            char = char.toLowerCase();  
            isUpperCase = true;  
        }
        

        if (alphabet.indexOf(char) !== -1) {
            let currentIndex = alphabet.indexOf(char);
            let newIndex = (currentIndex + a_number) % 26;
            if (newIndex < 0) newIndex += 26;  
            
            let newChar = alphabet.charAt(newIndex);
            
            if (isUpperCase) {
                newChar = newChar.toUpperCase();
            }
            
            result += newChar;
        } else {
            result += char;
        }
    }

    return result;
}
