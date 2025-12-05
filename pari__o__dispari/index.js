// LOGICA PER INSERIRE PARI O DISPARI ##########
let pariDispariUtente = prompt('Scrivi "pari" o "dispari"').toLowerCase();
while (pariDispariUtente != 'pari' && pariDispariUtente != 'dispari') {
    alert(`Riprova. Hai inserito ${pariDispariUtente}, invece devi scrivere "pari" oppure "dispari"`)
    pariDispariUtente = prompt('Scrivi "pari" o "dispari"').toLowerCase();
}

//converto il pari o dispari da string a bool -> pari = true, dispari = false
const pariDispariUtenteBool = pariDispariUtente == 'pari' ? true : false;
pariDispariUtenteBool == false
    ? console.log(`hai scelto il %c${pariDispariUtente}`, "color:red")
    : console.log(`hai scelto il %c${pariDispariUtente}`, "color:green")

// LOGICA PER INSERIRE UN NUMERO DA 1 A 5 ##########
let numeroUtente = parseInt(prompt(`Inserisci un numero da 1 a 5`))
while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
    alert(`Riprova. Hai inserito ${numeroUtente}, invece devi scrivere un numero da 1 a 5`)
    numeroUtente = prompt(`Inserisci un numero da 1 a 5`)
}
console.log('hai scelto il numero', numeroUtente)

// LOGICA DI MANIPOLAZIONE DI DATI ##########
// do un numero al bot
const numeroBot = generateRandom(1, 5);
console.log(`il numero scento dal bot e':`, numeroBot)
// sommo i numeri dell'utente e del bot e li metto in sommaNumeri
const sommaNumeri = numeroUtente + numeroBot;
console.log(`La somma tra il tuo numero ${numeroUtente} e il numero del bot ${numeroBot} e':`, sommaNumeri)

// se la sommaNumeri e' pari dico che l'utente ha vinto, se e' dispari, dico che ha perso
determineOddEven(sommaNumeri) == pariDispariUtenteBool ? alert('hai VINTO, i bot sono ancora tostapane!!!') : alert(`hai SBAGLIATO, un bot si e' girato`);

// FUNZIONI UTILIZZATE ##########
// funzione che genera un numero random in range f(nMin, nMax), ritornandolo
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione che determina se il numero e' pari o dispari f(n), ritornando true se e' pari, false se dispari
function determineOddEven(num) {
    return num % 2 == 0 ? true : false
}