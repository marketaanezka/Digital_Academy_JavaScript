'use strict';

console.log('funguju!');

const diceElm = document.querySelector('.dice');
let side = 1;
const addNumber = (e) => {
  if (e.keyCode === 32) {    
    diceElm.src = `img/side${side}.svg`;
    side += 1;    
  }
  if (side === 7) {
    side = 1;
  }
}

document.addEventListener('keyup', addNumber);

