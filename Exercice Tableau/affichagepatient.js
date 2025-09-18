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


let TablePatient = [];
TablePatient.push(new Patient("Dupond", "Jean", 80, 1.75));
TablePatient.push(new Patient("Valjean", "Jules", 75, 1.62));
TablePatient.push(new Patient("Renez", "Lea", 89, 1.82));
for (let lecteur of TablePatient){
    console.log(lecteur.description())
    console.log("\nIMC:"+lecteur.calculerIMC())
    console.log("\nInterpretation:"+lecteur.interpreterIMC())
}