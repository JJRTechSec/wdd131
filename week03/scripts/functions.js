let firstName = 'Antonia';
let lastName = 'Francesca';

function createFullName(first, last) {
  return `${first} ${last}`;
}
const fullName = createFullName(firstName, lastName);

const wholeName = (firstName, lastName) => `${firstName} ${lastName}`;

document.getElementById('fullName').innerHTML = fullName;