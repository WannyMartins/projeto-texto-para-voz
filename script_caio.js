const enviar = document.querySelector('#save');
const texto = document.querySelector('#textToTranscription');
const relacao = document.querySelector('.sinthes');
const play = document.querySelector('#play');
const limpar = document.querySelector('#clear');

limpar.addEventListener('click', () => {
  texto.value = '';
});

function sintetizar() {
  if (texto.value) {
    const textoATraduzir = texto.value;
    console.log(textoATraduzir);
  }
}

play.addEventListener('click', () => {
  sintetizar();
});

function memoriaClicavel(event) {
  texto.value = event.target.innerText;
  console.log(texto);
}

function criarLista() {
  if (!texto.value || texto.value.startsWith(' ')) {
    throw new Error('Não existe texto para salvar');
  }
  const li = document.createElement('li');
    li.innerText = texto.value;
    li.classList = 'sintetizados';
    li.addEventListener('click', memoriaClicavel);
    relacao.appendChild(li);
    texto.value = '';
}

enviar.addEventListener('click', () => {
  relacao.style.display = 'block';
  criarLista();
});

window.onload = () => {

}
