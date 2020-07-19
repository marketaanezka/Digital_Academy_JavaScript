const calc = (num1, op, num2) => {
  if (op === '+') {
    return num1 + num2
  } else if (op === '-') {
    return num1 - num2
  } else if (op === '/') {
    return num1 / num2
  } else if (op === '*') {
    return num1 * num2
  }
}

const oneElm = document.querySelector('#button1');
const twoElm = document.querySelector('#button2');
const threeElm = document.querySelector('#button3');
const fourElm = document.querySelector('#button4');
const fiveElm = document.querySelector('#button5');
const sixElm = document.querySelector('#button6');
const sevenElm = document.querySelector('#button7');
const eightElm = document.querySelector('#button8');
const nineElm = document.querySelector('#button9');
const zeroElm = document.querySelector('#button0');
const plusElm = document.querySelector('#plus');
const minusElm = document.querySelector('#minus');
const divideElm = document.querySelector('#divide');
const multiplyElm = document.querySelector('#multiply');
const equalsElm = document.querySelector('#equals');

oneElm.value = Number('1');
twoElm.value = Number('2');
threeElm.value = Number('3');
fourElm.value = Number('4');
fiveElm.value = Number('5');
sixElm.value = Number('6');
sevenElm.value = Number('7');
eightElm.value = Number('8');
nineElm.value = Number('9');
zeroElm.value = Number('0');
plusElm.value = '+';
minusElm.value = '-';
divideElm.value = '/';
multiplyElm.value = '*';
equalsElm.value = '=';

let resultElm = document.querySelector('.result');

const write = (buttonElm) => {
  buttonElm.onclick = 
}
