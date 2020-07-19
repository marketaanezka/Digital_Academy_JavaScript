'use strict'

let jmeno = String(prompt("Zadej prosím svoje jméno bez diakritiky:"))
let prijmeni = String(prompt("Zadej prosím svoje příjmení bez diakritiky:"))


let email = (prijmeni.substring(0, 5) + jmeno.substring(0, 3) + "@fit.cvut.cz").toLowerCase();

document.write("Skvělé. Tvůj e-mail je " + email + " .")

