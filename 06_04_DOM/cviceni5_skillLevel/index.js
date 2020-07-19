'use strict';

console.log('funguju!');

const updateSkill = (id, level) => {
  document.querySelector('#' + id + ' .skill__value').textContent = level + " / 100";
  document.querySelector('#' + id + ' .skill__progress').style.width = level + '%';
}

updateSkill('skill1', Number(prompt("Out of 100, how are your HTML skills?")));
updateSkill('skill2', Number(prompt("Out of 100, how are your CSS skills?")));
updateSkill('skill3', Number(prompt("Out of 100, how are your JS skills?")));

/*
const htmlSkill = Number(prompt("Out of 100, how are your HTML skills?"));
const cssSkill = Number(prompt("Out of 100, how are your CSS skills?"));
const jsSkill = Number(prompt("Out of 100, how are your JS skills?"));


document.querySelector('#skill1 .skill__value').textContent = htmlSkill + " / 100";
document.querySelector('#skill1 .skill__progress').style.width = htmlSkill + '%';
*/