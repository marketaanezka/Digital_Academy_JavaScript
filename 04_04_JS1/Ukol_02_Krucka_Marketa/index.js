'use strict'

const hourlyWage = Number(prompt("Zadej svou hodinovou mzdu:"));
const hours = 8;
const days = 21;
const Uvazek = Number(prompt("Zadej, kolikaprocentní máš úvazek"));


const grossSalary = (hours * days * hourlyWage) * (Uvazek / 100);

const superGrossSalary = Math.ceil(grossSalary + (grossSalary * 0.09) + (grossSalary * 0.248));

const taxBase = Math.ceil(superGrossSalary / 100) * 100

const nettoSalary = Math.floor(grossSalary - (grossSalary * 0.045) - (grossSalary * 0.065) - (taxBase * 0.15) + 2070);

document.write("Tvoje hrubá mzda je " + grossSalary + " Kč. ");
document.write("Tvoje superhrubá mzda je " + superGrossSalary + " Kč.");
document.write("Tvoje čistá mzda je " + nettoSalary + " Kč. ");