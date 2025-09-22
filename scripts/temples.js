// get dates
const date = new Date();
const year = date.getFullYear();

document.getElementById("currentyear").innerHTML = year;

const month = date.getMonth() + 1;
const day = date.getDate();


document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

// Responsive menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
})
