// get dates
const date = new Date();
const year = date.getFullYear();

document.getElementById("currentyear").innerHTML = year;

const month = date.getMonth() + 1;
const day = date.getDate();


document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

// Responsive menu

let figure = document.querySelector('figure');
//console.log(figure);

figure = document.querySelectorAll('figure');
//console.log(figure);

const londontemple = document.querySelector('figure:nth-of-type(3) .temple-name');
//console.log(londontemple);

Array.from(figure).forEach(function (figcaption) {
  console.log(figcaption);
})