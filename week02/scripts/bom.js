let input = document.querySelector('#favchap');
console.log(input);

let button = document.querySelector('button');
console.log(button);

let list = document.querySelector('#list');
console.log(list);

const li = document.createElement('li');
const deleteButton = document.createElement('button');

// functionality
button.addEventListener('click', function () {
  if (input.value.trim() != 0) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '\u274c';

    li.append(deleteButton);
    list.append(li);
    input.focus();

    input.value = '';

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });
  }
  else {
    alert('Please type a chapter');
  }
});