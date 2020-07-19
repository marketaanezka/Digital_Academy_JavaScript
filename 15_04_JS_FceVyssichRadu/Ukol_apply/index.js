const apply = (f, x) => {
  return f(x);
}

const delitelTremi = (a) => a / 3;
const nasobitelPeti = (a) => a * 5;
const pozdrav = (jmeno) => "Ahoj " + jmeno; 

apply(delitelTremi, 21);
apply(nasobitelPeti, 0.5);
apply(pozdrav, 'Filipe');