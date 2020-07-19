'use strict';

const episodes = [
  [127, 'Hledání plyšového Yettiho', 'Vojtěch Ryba'],
  [128, 'Moderní hrachová polévka', 'Kamila Štancová'],
  [129, 'Poloautomatické zrcadlo', 'Janka Janovská'],
  [130, 'Máčené hlavy parlamentu', 'Jonáš Daněk'],
  [131, 'Služby na hraně přívěsu', 'Tereza Křivánková'],
  [132, 'Klasifikace sněžných klokanů', 'Josef Stix'],
  [133, 'Rybolov v Oceánu bouří', 'Ludmila Gajová'],
];

const renderEpisode = (num, title, guest) => {
  const episodeElm = document.createElement('div');
  episodeElm.className = "episode"
  episodeElm.innerHTML = `<div class="episode__num">${num}</div>
      <div class="episode__body">
        <div class="episode__title">${title}</div>
        <div class="episode__guest">${guest}</div>
      </div>`
  episodesList.appendChild(episodeElm);
}

const episodesList = document.querySelector('.episodes-list');
for (let i = 0; i < episodes.length; i += 1) {
  renderEpisode(episodes[i][0], episodes[i][1], episodes[i][2]);
};

/*
const episodeElm = document.createElement('div');
episodeElm.className = "episode"
episodeElm.innerHTML= "134"
episodesList.appendChild(episodeElm); episodesList.innerHTML += `
<div class="episode">
  <div class="episode__num">${episodes[i][0]}</div>
  <div class="episode__body">
    <div class="episode__title">${episodes[i][1]}</div>
    <div class="episode__guest">${episodes[i][2]}</div>
  </div>
</div> */


renderEpisode(135, "fdssd", "sdfsdf")
