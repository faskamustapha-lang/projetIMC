function Patient(nom, prenom, age, poids, taille, sexe) {
    this.nom = nom;
    this.prenom = prenom;
    this.poids = poids;
    this.taille = taille;
    this.age = age;
    this.sexe = sexe;

    this.calculerIMC = function() {
        return (this.poids / (this.taille * this.taille)).toFixed(2);
    };

    this.interpreterIMC = function() {
        let imc = this.calculerIMC();
        if (imc < 18.5) {
            return "Maigreur";
        } else if (imc < 25) {
            return "Corpulence normale";
        } else if (imc < 30) {
            return "Surpoids";
        } else if (imc < 35) {
            return "Obésité modérée";
        } else if (imc < 40) {
            return "Obésité sévère";
        } else {
            return "Obésité morbide";
        }
    };

    this.description = function() {
        return this.prenom + " " + this.nom + this.age +" - Poids : " + this.poids + "kg, Taille : " + this.taille + "m";
    };
}

let jean = new Patient("Dupond", "Jean", 45, 80, 1.75, "homme");


const nomdoc = document.getElementById('nom')
let texte_nom = nomdoc.textContent;
texte_nom = texte_nom + jean.nom;
nomdoc.textContent = texte_nom;

const agedoc = document.getElementById('age')
let texte_age = agedoc.textContent;
texte_age = texte_age + jean.age.toString();
agedoc.textContent = texte_age;

const prenomdoc = document.getElementById('prenom')
let texte_prenom = prenomdoc.textContent;
texte_prenom = texte_prenom + jean.prenom ;
prenomdoc.textContent = texte_prenom ;


const tailledoc = document.getElementById('taille')
let texte_taille = tailledoc.textContent;
texte_taille = texte_taille + jean.taille.toString() ;
tailledoc.textContent = texte_taille ;


const poidsdoc = document.getElementById('poids')
let texte_poids = poidsdoc.textContent;
texte_poids = texte_poids + jean.poids.toString() ;
poids.textContent = texte_poids ;

const IMCdoc = document.getElementById('IMC')
let texte_imc = IMCdoc.textContent;
texte_imc = texte_imc + jean.calculerIMC().toString() ;
IMC.textContent = texte_imc ;

console.log(jean.calculerIMC())

const sexedoc = document.getElementById('sexe')
let texte_sexe = sexedoc.textContent ; 
texte_sexe = texte_sexe + jean.sexe ;
sexedoc.textContent = texte_sexe