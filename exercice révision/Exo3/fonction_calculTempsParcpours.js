/*
function calculerTempsParcoursSec(prmVitesse, prmDistance) {
    let dureeParcours ;
    dureeParcours = prmDistance/(prmVitesse/3600) ;
    return dureeParcours ;
}

*/

let calculerTempsParcoursSec = (prmVitesse, prmDistance) => azprmDistance/(prmVitesse/3600);


let Temps = calculerTempsParcoursSec(40,50); 



function convertir_h_min_sec(prmTemps) {
    let h = Math.floor(prmTemps/3600) ;
    let m = Math.floor(prmTemps % 3600 / 60);
    let s = Math.floor(prmTemps % 3600 % 60);
    let tempsHms = h + "H  " + m + "mm " + s + "s" ;
    return tempsHms ;
}

let converterTemps = convertir_h_min_sec(Temps);

console.log(converterTemps)