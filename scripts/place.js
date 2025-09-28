// FOOTER INFO
const date = new Date();
const year = date.getFullYear();

document.getElementById("currentyear").textContent = year;

const month = date.getMonth() + 1;
const day = date.getDate();


document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


// CHANGE ALT TEXT
const hero = document.querySelector('#hero');

const altTexts = {
  mobile: "Image of a Norwegian fjord",
  desktop: "Image of wild elk in the snow in Northern Norway"
};

const mediaQueries = {
  mobile: window.matchMedia('(max-width: 799px)'),
  desktop: window.matchMedia('(min-width: 800px)')
};

function updateAltText() {
  if (hero) {
    if (mediaQueries.mobile.matches) {
      hero.alt = altTexts.mobile;
    } else if (mediaQueries.desktop.matches) {
      hero.alt = altTexts.desktop;
    }
  }
}


for (const key in mediaQueries) {
  mediaQueries[key].addEventListener('change', updateAltText);
}

updateAltText();


// WINDCHILL
const tempEl = document.getElementById('temperature');
const windEl = document.getElementById('wind-speed');
const chillEl = document.getElementById('wind-chill');

const temperature = 10;
const windSpeed = 9;

function calculateWindChill(temp, speed) {
  if (temp <= 10 && speed > 4.8) {
    return (13.12 + 0.6215 * temp - 11.37 * (speed ** 0.16) + 0.3965 * temp * (speed ** 0.16)).toFixed(1);
  }
}


tempEl.innerHTML = `${temperature}&degC`;
windEl.innerHTML = `${windSpeed}km/h`;
chillEl.innerHTML = `${calculateWindChill(temperature, windSpeed)}&degC`;