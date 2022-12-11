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

button.addEventListener('click', function(){
    const numberQuantity = parseInt(outputQuantity.value.trim())
    const min = parseInt(outputMin.value.trim())
    const max = parseInt(outputMax.value.trim())
    console.log(numberQuantity, min, max)
    
    if (numberQuantity === '' || min === '' || max === ''){
        alert('Inserisci tutti i valori')
    } else if (isNaN(numberQuantity, min, max)) {
        alert(' Inserisci dei valori numerici')
    } else if (min > max){
        alert('Il minimo non può essere più grande del massimo')
        
    } else {

        outputArea.innerHTML = ''

        for (let i = 1; i <= numberQuantity; i++) {
            
            const random = Math.random();
            const randomNumber = Math.floor(random * (max - min + 1) + min);
            let bgColor 
            
            if(randomNumber % 2 === 0){
                bgColor = 'bg-primary'
            } else {
                bgColor = 'bg-danger'
            }

            outputArea.innerHTML += `<div class="col px-5"><span class="${bgColor} rounded-2 p-3 d-block" id="printed-number">${randomNumber}</span></div>`
            
            const printedNumber = document.getElementById('printed-number')
            
        }
    }
});

reset.addEventListener('click', function(){
    outputQuantity.value = ''
    outputMin.value = ''
    outputMax.value = ''
    outputArea.innerHTML = ''
})