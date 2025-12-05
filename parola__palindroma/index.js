let parola = 'ciaic';

let f = parola.length - 1;
let palindroma = false;
for (let i = 0; i < parola.length / 2; i++) {
    console.log('i', i, 'f', f)
    if (!(parola[i] === parola[f])) {
        palindroma = false;
        console.log(`le lettere su indice ${i} e ${f} non corrispondono, interrompo il ciclo`)
        break;
    } else {
        console.log(`le lettere su indice ${i} e ${f} corrispondono`)
        palindroma = true;
    }
    f--;
}

palindroma == false
    ? console.log(`parola palindroma: %c${palindroma}`, "color: red")
    : console.log(`parola palindroma: %c${palindroma}`, "color: green")