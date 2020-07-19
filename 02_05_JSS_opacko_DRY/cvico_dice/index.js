'use strict';

console.log('funguju!');

let dice = [];

const updateDice = (array) => {
  const rowElm = document.querySelector('#dice-row');
  rowElm.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    rowElm.innerHTML += `<img class="dice" src="img/side${array[i]}.svg" />`
  }
};

function roll () {
  return Math.floor((Math.random() * 6) + 1);
}

const addBtn = document.querySelector("#btn-add");

function chooseRandom()  {
  dice.push(roll());
  console.log(dice);
  updateDice(dice);
}

addBtn.addEventListener('click', chooseRandom);

function rollAgain() {
  for (let i = 0; i < dice.length; i++) {
    dice[i] = roll();
  }
  updateDice(dice);
}

const shuffleBtn = document.querySelector("#btn-shuffle");shuffleBtn.addEventListener('click', rollAgain);