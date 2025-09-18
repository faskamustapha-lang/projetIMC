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
        if (imc < 18.5) return "Maigreur";
        else if (imc < 25) return "Corpulence normale";
        else if (imc < 30) return "Surpoids";
        else if (imc < 35) return "Obésité modérée";
        else if (imc < 40) return "Obésité sévère";
        else return "Obésité morbide";
    };

    this.description = function() {
        return this.prenom + " " + this.nom + " (" + this.age + " ans) - Poids : " 
               + this.poids + "kg, Taille : " + this.taille + "m";
    };
}

function colorByIMC(imc, tdIMC, tdInterpretation) {
    let couleur;
    if (imc < 18.5) couleur = '#FFCC00';
    else if (imc < 25) couleur = '#008000';
    else if (imc < 30) couleur = '#FFCC00';
    else if (imc < 35) couleur = '#FF6600';
    else if (imc < 40) couleur = '#FF0000';
    else couleur = '#660000';

    tdIMC.style.color = couleur;
    tdInterpretation.style.color = couleur;
}


let listepatients = [];
listepatients.push(new Patient("Dupond", "Jean", 45, 80, 1.75, "Homme"));
listepatients.push(new Patient("Martin", "Valérie", 30, 65, 1.68, "Femme"));
listepatients.push(new Patient("Judor", "Eric", 23, 56, 1.53, "Homme"))
function afficherPatients() {
    let tbody = document.getElementById("patients-body");
    tbody.innerHTML = "";

    for (let patient of listepatients) {
        let tr = document.createElement("tr");

        let tdPrenom = document.createElement("td");
        tdPrenom.textContent = patient.prenom;

        let tdNom = document.createElement("td");
        tdNom.textContent = patient.nom;

        let tdAge = document.createElement("td");
        tdAge.textContent = patient.age;

        let tdSexe = document.createElement("td");
        tdSexe.textContent = patient.sexe;

        let tdPoids = document.createElement("td");
        tdPoids.textContent = patient.poids;

        let tdTaille = document.createElement("td");
        tdTaille.textContent = patient.taille;

        let tdIMC = document.createElement("td");
        tdIMC.textContent = patient.calculerIMC();

        let tdInterpretation = document.createElement("td");
        tdInterpretation.textContent = patient.interpreterIMC();

        colorByIMC(parseFloat(patient.calculerIMC()), tdIMC, tdInterpretation);

        tr.append(tdPrenom, tdNom, tdAge, tdSexe, tdPoids, tdTaille, tdIMC, tdInterpretation);
        tbody.appendChild(tr);
    }
}

afficherPatients()