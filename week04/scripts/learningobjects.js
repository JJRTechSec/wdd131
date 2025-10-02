let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Funtamentals",
  credits: 2,
  sections: [
    { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
    { section: "002", enrolled: 80, instructor: "Emmanuel Macron" }
  ]
};

function setCourseInfo(course) {
  document.querySelector('#courseName').innerHTML = `${course.code} - ${course.title}`;
}


/* MY ATTEMPT
function outputSections(section) {
  document.querySelector('#courseSection').innerHTML = `${course.sections[1]}`;
}*/

function sectionTemplate(section) {
  return `<tr>
            <td>${section.sectionNumber}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
          </tr>`
}

function renderSections(course) {
  const html = sections.map(sectionTemplate);
  document.querySelector('#sections tbody').innerHTML = html.join("");
}


// following MDN

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

//person.introduceSelf();
//person.bio();

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);
//console.log(result);


function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//console.log(filtered);

const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

// console.log("Filtered Array\n", arrByID);

//console.log("Number of Invalid Entries =", invalidEntries);

// searching in an array
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap"));
console.log(filterItems(fruits, "an"));