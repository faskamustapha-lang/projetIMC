let listeMoyenne = [15, 56, 12, 89, 56, 89, 27, 69, ];
let somme = 0;
counter = 0;
for (let nb of listeMoyenne) {
    counter ++ 
    somme += nb;
    console.log(nb);
}
console.log("la moyenne de votre liste de notes est de "+somme/counter+"\n la somme est de "+somme)
