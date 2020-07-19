'use strict'

console.log('Hello world.');
const start = 15;
const delka = Number (prompt('Zadej delku zavodu:'));
console.log(delka);
const konec = (start + delka) % 24;
console.log(konec);
document.write("Závod končí v: " + konec + " hodina")

