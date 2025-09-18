function Patient(nom, prenom, poids, taille) {
    this.nom = nom;
    this.prenom = prenom;
    this.poids = poids;
    this.taille = taille;

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
        return this.prenom + " " + this.nom + " - Poids : " + this.poids + "kg, Taille : " + this.taille + "m";
    };
}

let jean = new Patient("Dupond", "Jean", 80, 1.75);

console.log(jean.description());
console.log("IMC :", jean.calculerIMC());
console.log("État :", jean.interpreterIMC());

