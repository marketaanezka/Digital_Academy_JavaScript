'use strict'

let userName = String(prompt("Zadej prosím svoje uživatelské jméno:"));
let userPassword = String(prompt("Zadej prosím svoje heslo:"));

const password = 'simsalabim';

if (userPassword === password) {
  document.writeln("Smíš vstoupit!");
  let userName = Number(prompt("Kolik ti je let?"));
  if (userName >= 18) {
    document.write("Dobré, pojď dál!");
  }
  else {
    document.write("Bohužel, musíš počkat.");
  }
} else {
  document.write("Vstup nepovolen!");
}