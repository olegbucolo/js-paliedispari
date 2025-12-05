let parola = prompt(`Inserisci una parola per vedere se e' palindroma`);

isPalindrome(parola);

function isPalindrome(word) {
    // la variabile f comincera' con il valore dell'indice dell'ultima lettera della parola
    let f = parola.length - 1;
    // inizialmente il valore di palindroma sara' false
    let palindroma = false;
    // loop fino a meta' della parola. Se la parola e' dispari viene arrotondato per eccesso di default
    for (let i = 0; i < parola.length / 2; i++) {
        console.log('i', i, 'f', f)
        // se la lettera all'inizio e' diversa dalla lettera alla fine metto palindroma = false e interrompo
        // altrimenti palindroma = true
        if (parola[i] !== parola[f]) {
            palindroma = false;
            console.log(`le lettere su indice ${i} e ${f} non corrispondono, interrompo il ciclo`)
            break;
        } else {
            console.log(`le lettere su indice ${i} e ${f} corrispondono`)
            palindroma = true;
        }
        // decremento l'indice del fine parola
        f--;
    }
    palindroma == false
        ? (console.log(`parola palindroma: %c${palindroma}`, "color: red"))
        : console.log(`parola palindroma: %c${palindroma}`, "color: green")
}
