const textToTranscription = document.querySelector('#textToTranscription');
const btnSave = document.getElementById('save');

const array = [];

function saveText() {
  array.push(textToTranscription.value);
  console.log(array);
  localStorage.setItem('textSave', array);
  textToTranscription.value = '';
}

btnSave.addEventListener('click', saveText);

// sintetizados

window.onload = () => {
  localStorage.getItem('textSave');
}