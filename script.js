/* Scrivi un applicazione che sia in grado di generare una serie di numeri randomici.
L'utente, tramite 3 input, deve avere la possibilità di definire:
- Quanti box generare
- il numero minimo di generazione dei numeri random
- il numero massimo di generazione dei numeri random
Cliccando sul tasto "genera", vengono generati i box con i parametri specificati
dall'utente e andremo a colorare di VERDE i numeri pari e di ROSSO i numeri dispari.

BONUS: 
Create un bottone reset che svuota i valori negli input e cancella i box generati.*/

// 1. Prendere gli elementi nel DOM 
// 1b. Validare i dati inseriti dall'utente
// 2. creare un addEvenlistener 
// 3. Creare un ciclo che si ripeta quante volte specifica l'utente
// 4. Creare un generatore di numeri random con massimi e minimi specificati dall'utente dentro il ciclo
// 5. Creare la stringa da stampare in pagina
// 6. Stampare in pagina

const outputQuantity = document.getElementById('output-quantity')
const outputMin = document.getElementById('output-min')
const outputMax = document.getElementById('output-max')
const outputArea = document.getElementById('output-area')
const button = document.getElementById('generate-button')
const reset = document.getElementById('reset-button')

