const age = 17;

/*
const msg1 = 'Věk ' + age + ' let je málo pro vstup na naše stránky';
const msg2 = 'Ještě vám zbývá ' + (18 - age) + ' let.';
const msg2 = 'Ještě vám zbývá ' + (18 - age) + ' let.';
*/

const msg1 = `Věk ${age} let je málo pro vstup na naše stránky`;
const msg2 = `Ještě vám zbývá ${18 - age} let.`;


const user = ['robert17', 34];
const msg3 = (
  `<div class="msg">
    <div class="username"> ${user[0]}  
    <div class="age"> ${user[1]} 
  </div>`
);

console.log(msg1);
console.log(msg2);
console.log(msg3);