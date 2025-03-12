//Partie 1
function what_are_words_worth() {
    let nom = prompt("Entrer qqlc");
    console.log(nom.length);
    return confirm("Le mot " + nom + " contient " + nom.length + " caracteres!");
}