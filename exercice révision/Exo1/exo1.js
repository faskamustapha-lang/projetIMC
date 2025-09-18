
function foncthird(var1) {
    let calc = 0;
    let valretour = "";
    while (calc <= var1) {
        if (calc%3 == 0){
            valretour += "-" + calc;
        }
        calc += 1;
    }
    return valretour;
}

let var1 = 30;
console.log("Recherche des multiples de 3\n")
console.log("Valeur limite de la recherche : "+var1)
returnde = foncthird(var1)
console.log("Multiple de 3 :"+returnde)


