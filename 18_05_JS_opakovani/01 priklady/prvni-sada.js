// 1. Napiš funkci, která zjistí, zda je návštevník v baru plnoletý.
// Funkce bere jeden parametr (věk) a vrací řetězec informující o výsledku.
let vek = 23;
function jePlnolety(age) {
	if (age >= 18) {
		return "Adult"
	} else {
		return "Not adult"
	}
}
console.log(jePlnolety(vek));

// 2. Napiš funkci, která otestuje, zda je osoba muž (M) nebo žena (Z).
let pohlavi = 'Z';
pohlavi = prompt("Jake jsi pohlavi?");
function genderselector(gender) {
	if (gender === 'Z' || gender === 'z') {
		return "Female";
	} else if (gender === 'M' || gender === 'm') {
		return "Male"
	} else {
		return "Gender fluid"
	}
}
console.log(genderselector(pohlavi));
// 3. Představ si, že žiješ na Měsíci. Teploty se tam pohybují
// od -173°C do +127°C. Než vylezeš z domu, zjisti nejdřív,
// zda je venku teplota vhodná na kraťasy a tričko s krátkým
// rukávem, tj. teplota mezi 20°C a 38°C.
// Protože máš na měsíci hodně kolegů, připrav pro ně funkci (která tohle otestuje), 
// aby nemuseli psát kód pokaždé znovu.
let teplota = 28;
function temperatureCheck(temperature) {
	if (temperature >= 20 && temperature <= 38) {
		return "It's nice outside"
	} else {
		return "Don't go out"
	}
}
console.log(temperatureCheck(teplota));
// 4. Napiš funkci, která zjistí, zda je daná osoba dospělá žena, která může řídit.
// Funkce bere dva parametry, osobu a aktuální rok.
let osoba = {
	jmeno: 'Ema',
	pohlavi: 'Z',
	rokNarozeni: 1992,
	ridicak: true
};
let aktualniRok = 2019;

function femaleDriver(person, yearNow) {
	const gender = person.pohlavi;
	const age = yearNow - person.rokNarozeni;
	console.log(gender, age);
	if (gender === 'Z' && age >= 18) {
		return "You are a female, eligible to drive."
	} else {
		return "You are not a female, eligible to drive."
	}
}

console.log(femaleDriver(osoba, aktualniRok));

// 5. Podle věku napiš, o jakého člověka jde:
// 0-5 miminko
// 6-18 dítě
// 19 - 65 dospělý
// 66 a víc - důchodce
let vek = 23;
function agistSelector(age) {
	if (age < 6) {
		return "Bebe"
	} else if (age < 19) {
		return "Kiddo"
	} else if (age < 65) {
		return "Adult"
	} else {
		return "Respect!"
	}
}

console.log(agistSelector(vek));

// 6. Moje oblíbené ovoce jsou jahody, melouny nebo hrušky.
// Řekni mi, zda si dnes zamlsám!
// Pro pokročilé - troufneš si to napsat pomocí hledání v poli, ve kterém bude uloženo, jaké ovoce mám rád?
let ovoce = 'jablko';
let fruitarray = [
	'jablko',
	'hrozno',
	'fiky',
	//'hruska',
];

function yummyFruit(fruit) {
	for (let i = 0; i < fruit.length; i++) {
		if (fruit[i] === 'jahoda' || fruit[i] === 'meloun' || fruit[i] === 'hruska') {
			return "Today is a good fruit day"
		} else {
			return "No good fruit for you today"
		}
	}
};

console.log(yummyFruit(fruitarray));

// 7. Pro mírně pokročilé
// Napiš funkci, která jako parametr bere třídu id nějakého html prvku, a přidá mu třídu "active".
// Pozor, prvek už může nějaké třídy mít!

function addingClassActive(id) {
	const elm = document.getElementById(id);
	elm.classList.add("active");
}

// 8. Pro pokročilé.
// Napište posluchač události, který bude zachycovat událost "click" na celém dokumentu (pověste ho na "document.body"). 
// Událost si uložte do parametru event a vypište ji do konzole. Prohlédněte si celý vypsaný objekt a popřemýšlejte, 
// co znamenají jeho jednotlivé vlastnosti. Mimojiné se zaměřte na vlastnost clientX a clientY. Zkuste pomocí googlu
// zjistit, co přesně znamenají (např. na MDN tuhle informaci určitě najdete.)
// Pro super pokročilé: Dokážete z objektu události zjistit, kterým tlačítkem bylo kliknuto? (Pomůže opět google.)

document.body.addEventListener("click", (event) => console.log(event));
