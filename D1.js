/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(
  "1.1 Stringhe: si intende variabili con un contenuto alfa-numerico, in sostanza possono contenere frasi, parole, numeri(in questo caso non nel loro senso matematico)"
);
console.log(
  "1.2 Numeri, in questo caso variabili numeriche matematiche con cui è pissbile svolgere qualsiasi tipo di operazione matematica (somma, sottrazione, divisione, etc..."
);
console.log(
  "1.3 Booleane, variabili di tipo logico che posso avere solo due valori: vero o falso"
);
console.log(
  "1.4 Null, si intende una variabile a cui è stato attribuito il valore null, vuoto. se la variabile fosse una scatola aprendola non ci troveremmo dentro niente"
);
console.log(
  "1.5 Undefined, in questo caso una variabile non specificata. Se fosse una scatola sigillata sarebbe simile al Gatto di schrodinger, non sai cosa succede all interno finchè non la apri"
);
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "Fabio";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sum = 12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Gilardi";
const notChangeable = "non puoi cambiarla";
console.log(notChangeable);
// notChangeable = "Puoi cambiarla";
console.log(notChangeable);
// l'errore nella console è dovuto alla riga 65 in quanto non è possibile modificare una variabile const

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let subtracion = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
name2 = name2.toLowerCase();
console.log(name1 === name2);
