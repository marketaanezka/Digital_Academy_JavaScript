const elipseArea = (w, h) => (w * h) / 2 * Math.PI;

document.write(elipseArea(7, 3));

const max2 = (Nu1, Nu2) => {
  if (Nu1 > Nu2) {
    return Nu1;
  } else if (Nu1 < Nu2) {
    return Nu2;
  } else {
    return "Cisla jsou stejna";
  }
}

document.write(max2(5, 23));
console.log(max2(4562, 12));



