'use strict'

const hourlyWage = Number(prompt("Zadej svou hodinovou mzdu:"));
const hours = Number(prompt("Děkuji, zadej kolik hodin denně pracuješ:"));
const days = Number(prompt("Děkuji, zadej kolik dní v měsíci pracuješ:"));

const salary = hours * days * hourlyWage;

document.write("Za měsíc si takhle přijdeš na hezkých " + salary + " Kč.");


