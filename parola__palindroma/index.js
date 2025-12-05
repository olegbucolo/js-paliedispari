let parola = prompt(`Inserisci una parola per vedere se e' palindroma`);
console.log(`La parola che hai scelto e' "${parola}"`)
console.log(isPalindrome(parola));

function isPalindrome(word) {
    // la variabile indexEnd comincera' con il valore dell'indice dell'ultima lettera della parola
    let indexEnd = parola.length - 1;
    // loop da ambo i lati confrontando le lettere iniziali e finali
    for (let indexStart = 0; indexStart < parola.length / 2; indexStart++) {
        if (parola[indexStart] !== parola[indexEnd - indexStart]) {
            console.log(`le lettere su indice ${indexStart} e ${indexEnd - indexStart} non corrispondono, interrompo il ciclo`)
            return false
        }
    }

    return true

}
