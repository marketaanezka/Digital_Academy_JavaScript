// pozn. k vypracování: vše (pozdravy, čísla, apod.) vypisujte do konzole

// 1.
// napiš funkci pro uvítacího robota, která pozdraví neznámého hosta (tj. zdraví všechny stejně)

const pozdrav1 = () => {
  console.log("Hey, buddy!");
}

pozdrav1();

// 2.
// napiš funkci pro uvítacího robota, která pozdraví známého hosta (jako parametr jí předáš jeho jméno)
// pozn. představte si, že jsme na Slovensku, a jména nebudeme skloňovat

const pozdrav2 = (name) => {
  console.log("Nice to see you, " + name + "!");
}

pozdrav2("Marvin");

// 3.
// napiš funkci, která jako parametr vezme třídu nějakého html elementu a nastaví písmo v něm na barvu 'hotpink'

const pinkIsHot = (className) => {
document.querySelector("." + className).style.color = "hotpink"
}

pinkIsHot("nadpis");



// 4.
// napiš funkci, která jako parametr vezme pole, podívá se na jeho první a poslední prvek a porovná je.
// Pokud jsou stejné, vrátí true, jinak vrátí false
// pozn. co když bude pole prázdné? zamyslete se ... lze to nějak ošetřit?

const compare = (array) => {
  if (array.length === 0) {
    console.log("Zadal jsi prazdne pole. Zkus to znovu.");
    return;
  }
  let first = array[0];
  let last = array[array.length -1]; 
  if (first === last) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

// 5.
// napiš for cyklus, který vypíše všechna sudá čísla od dvacítky do nuly
for (let i=20; i >= 0; i -= 2) {
  console.log(i);
}

// 5.
// napiš while cyklus, který vypíše všechna sudá čísla od dvacítky do nuly

let i = 20;
while (i >= 0) {
  console.log(i);
  i -= 2;
}

// 6.
// napiš funkci, která vezme dva parametry (čísla, první z nich je menší než druhé) a vypíše všechna čísla mezi nimi
// příklad: vypisVsechnaCislaMezi(4,9); vypíše 5,6,7,8 
// pozn. co když se spletu a zadám první číslo větší?
const numbersBetween = (num1, num2) => {
  //if(num2 === num1 + 1) {
  //  console.log("You chose two consecutive numbers. Choose a bigger difference.")
  // }
  if (num1 < num2) {
    for (let i = num1+1; i < num2; i++) {
      console.log(i);
    }
  } else {
    console.log("First number must be smaller.")
  }
};

numbersBetween(5,6);

