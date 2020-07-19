'use strict'

const fullPrice = 15;
let Age = Number(prompt("Kolik je ti let?"));
let ActualPrice = '';
if (Age <= 6) {
  ActualPrice = 0;
} else if (Age <= 26) {
  ActualPrice = fullPrice * 0.65;
  ActualPrice = Math.ceil(ActualPrice);
} else if (Age <= 64) {
  ActualPrice = fullPrice;
} else {
  ActualPrice = fullPrice * 0.5;
  ActualPrice = Math.ceil(ActualPrice);
}

document.write("Cena tvého lístku je " + ActualPrice + " euro. Užij si představení!");