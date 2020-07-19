'use strict';

console.log('funguju!');

const questElm = document.querySelector('.question');

questElm.textContent = 'Zadejte Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

let userAnswer = String(prompt("Zde 'Zadejte Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon: ")).toLowerCase();

let answerElm = document.querySelector('.answer__text');

answerElm = userAnswer;

let correctAnsElm = document.querySelector('.answer');

if (answerElm === 'bell') {
  correctAnsElm.className = 'answer answer--correct';
} else {
  correctAnsElm.className = 'answer answer--wrong';
};