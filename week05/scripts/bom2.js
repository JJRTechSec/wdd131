let input = document.querySelector('#favchap');
console.log(input);

let button = document.querySelector('button');
console.log(button);

let list = document.querySelector('#list');
console.log(list);

let chaptersArray = getChaptersList() || [];

const li = document.createElement('li');
const deleteButton = document.createElement('button');

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// functionality
button.addEventListener('click', () => {
  if (input.value.trim() != '') {
    displayList(input.value);
    chaptersArray.push(input.value);

    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');

  li.textContent = item;
  deleteButton.textContent = '\u274c';
  deleteButton.classList.add('delete');

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('#favchap', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('#favchap'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}