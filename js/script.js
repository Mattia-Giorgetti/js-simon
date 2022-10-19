"use strict";

// FUNZIONI 

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
function disappear(){
    divHTML.innerHTML = '';
    clearTimeout(timer);
}



const insertButton = document.getElementById('inserisci_btn');
const replayButton = document.getElementById('replay_btn');
const myInput = document.getElementById('my_input');
const risultato = document.getElementById('risultatoHTML');
const listaNumeriUtente = document.getElementById('lista_numeri_utente');

let numeri = [];
let arrayInputUtente = [];
let numeriDaInserire = 5;
let numeriGiusti = [];
let numeriSbagliati = [];

while(numeri.length < numeriDaInserire){
  let numeroCasuale = randomNumber(1,50);
  if(!numeri.includes(numeroCasuale)){
    numeri.push(numeroCasuale);
  }
}

const divHTML = document.getElementById('numeri');
divHTML.innerHTML = numeri;

// Timer diminuito rispetto alla richiesta per facilitare la correzione 
const timer = setTimeout(disappear, 7000);


insertButton.addEventListener('click', function insertNum(){
    let inputUtente = parseInt(myInput.value);

    if(arrayInputUtente.length == numeri.length){
        insertButton.removeEventListener('click', insertNum);

        if(numeri.includes(inputUtente)){
            risultato.innerHTML = `hai vinto!...numeri giusti: ${numeriGiusti}`;
            replayButton.classList.remove('d-none');
        } else {
            risultato.innerHTML = `hai perso... numeri sbagliati: ${numeriSbagliati}`;
            replayButton.classList.remove('d-none');
        }
    } else {
        arrayInputUtente.push(inputUtente);
        listaNumeriUtente.innerHTML = arrayInputUtente;
        if(numeri.includes(inputUtente)){
            numeriGiusti.push(inputUtente);
        } else if(!numeri.includes(inputUtente)){
            numeriSbagliati.push(inputUtente);
        }
    }
})
replayButton.addEventListener('click', () => window.location.reload());








