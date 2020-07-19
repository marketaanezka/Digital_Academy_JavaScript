'use strict';

const num = '126';
const title = 'Robot, který snědl koblihu';
const guest = 'Radovan Siwek';

console.log('funguju!');

const episodesElm = document.querySelector(".episodes");
/*
episodesElm.innerHTML = `<div class="episode">
<div class="episode__num">${num}</div>
<div class="episode__body">
  <div class="episode__title">${title}</div>
  <div class="episode__guest">host: ${guest}</div>
</div>
</div>
*/
const episodes = [
  [127, 'Hledání plyšového Yettiho', 'Vojtěch Ryba'],
  [128, 'Moderní hrachová plolévka', 'Kamila Štancová'],
  [129, 'Poloautomatické zrcadlo', 'Janka Janovská'],
  [130, 'Máčené hlavy parlamentu', 'Jonáš Daněk'],
  [131, 'Služby na hraně přívěsu', 'Tereza Křivánková'],
  [132, 'Klasifikace sněžných klokanů', 'Josef Stix'],
  [133, 'Rybolov v Oceánu bouří', 'Ludmila Gajová'],
];

/*
episodesElm.innerHTML += `<div class="episode">
<div class="episode__num">${episodes[0][0]}</div>
<div class="episode__body">
  <div class="episode__title">${episodes[0][1]}</div>
  <div class="episode__guest">host: ${episodes[0][2]}</div>
</div>
</div>
`
*/

for (let i = 0; i < episodes.length; i++) {
  let item = episodes[i];
  episodesElm.innerHTML += `<div class = "episode">
      <div class="episode__num">${item[0]}</div>
      <div class="episode__body">
      <div class="episode__title">${item[1]}</div>
      <div class="episode__guest">host: ${item[2]}</div>
  </div>
  </div>
  `
};