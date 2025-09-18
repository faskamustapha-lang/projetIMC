class Patient {
    constructor(prmNom, prmPrenom, prmPoids, prmTaille, prmAge) {
        this.nom = prmNom;
        this.prenom = prmPrenom;
        this.poids = prmPoids;
        this.taille = prmTaille;
        this.age = prmAge;
    }

    calculerIMC() {
        return (this.poids / (this.taille * this.taille)).toFixed(2);
    }

    interpreterIMC() {
        let imc = parseFloat(this.calculerIMC());

        if (imc < 18.5) {
            return "sous-poids";
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
    }

    description() {
        return `${this.prenom} ${this.nom} - Âge : ${this.age} ans, Poids : ${this.poids}kg, Taille : ${this.taille}metre`;
    }
}

let jean = new Patient("Dupond", "Jean", 80, 1.75, 42);

console.log(jean.description());
console.log("IMC :", jean.calculerIMC());
console.log("État :", jean.interpreterIMC());
