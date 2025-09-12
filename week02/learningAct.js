const DAYS = 6;
const LIMIT = 30;

let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

// while
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}

// forEach
studentReport.forEach(function (score) {
  if (score < LIMIT) {
    console.log(score);
  }
});

// for...in
for (let score in studentReport) {
  if (studentReport[score] < LIMIT) {
    console.log(studentReport[score]);
  }
}
// any loop to dynamically produce the day names of next number of days from today's date
let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let today = new Date();
let dayIndex = today.getDay();
console.log(dayIndex)
