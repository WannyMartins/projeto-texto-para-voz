const textToTranscription = document.querySelector('#textToTranscription');
const btnSave = document.getElementById('save');
const sinthes = document.getElementById('sinthes');
const repeat = document.getElementById('repete');

const array = [];

const historyShow = () => {
  historyArray = JSON.parse(localStorage.getItem('textSave'));
  historyArray.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML += element;
    li.classList = 'sintetize';
    sinthes.appendChild(li);
  });
}

repeat.addEventListener('click', historyShow);

const saveText = () => {
  array.push(textToTranscription.value);
  console.log(array);
  array_json = JSON.stringify(array);
  localStorage.setItem('textSave', array_json);
  createList();
  textToTranscription.value = '';
}

btnSave.addEventListener('click', saveText);

const createList = () => {
  const li = document.createElement('li');
  li.innerHTML += textToTranscription.value;
  li.classList = 'sintetize';
  sinthes.appendChild(li);
}

window.onload = () => {
  JSON.parse(localStorage.getItem('textSave'));
}
