'use strict';

console.log('funguju!');
let hours = 12;
let minutes = 35;


const updateClock = (hours, minutes) => {
const clockElm = document.querySelector(".clock");
if (hours < 10) {
  hours = hours.toString().padStart(2, '0');
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
clockElm.innerHTML = 
`<span class="clock__hours">${hours}</span>:<span class="clock__minutes">${minutes}</span>`
};

updateClock(5, 8);

