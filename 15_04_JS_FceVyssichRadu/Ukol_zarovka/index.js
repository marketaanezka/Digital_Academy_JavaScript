'use strict';

console.log('funguju!');

const bulbElm = document.querySelector('.bulb');

const Light = (event) => {
  bulbElm.classList.toggle('bulb--on');
};

bulbElm.addEventListener('click', Light);
