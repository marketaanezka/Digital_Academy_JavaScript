const filmLength = Number(prompt("Zadej délku filmu v minutách: "));
const filmHours = Math.round(filmLength / 60);
const filmMinutes = filmLength % 60;

document.write("Délka filmu je " + filmHours + "h a " + filmMinutes + "min.");
