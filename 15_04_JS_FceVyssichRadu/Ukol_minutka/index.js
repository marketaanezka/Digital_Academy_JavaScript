'use strict';
console.log('funguju!');

const ringTime = () => {
  document.querySelector('.alarm').classList.add('alarm--ring');
  document.querySelector('audio').play();
};

//const time = Number(prompt("Za kolik vteřin má minutka zazvonit?") * 1000);

setTimeout(ringTime, time);

