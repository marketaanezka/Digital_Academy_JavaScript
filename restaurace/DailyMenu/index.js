
/*
   <div>
        <h2 class="day">{{name}}</h2>
        <div class="daily__meals"></div>
      </div>
*/
const dailyMenuTemplate = Handlebars.compile(
  document.querySelector('#daily-menu').innerHTML
);


const renderDailyMenu = (dailyMenu) => {
  const helperELm = document.createElement('div');
  helperELm.innerHTML = dailyMenuTemplate(dailyMenu);
  
  const mealsElm = helperELm.querySelector(".daily__meals");
  for (let i = 0; i < dailyMenu.menu.length; i++) {
    mealsElm.appendChild(renderMenuItem(dailyMenu.menu[i]));
  }
  return helperELm.children[0];
};



