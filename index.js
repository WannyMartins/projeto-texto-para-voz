//const transcription = require('./src/transcription');
//transcription();
const synthesize = require('./src/synthesize')

/* const play = document.querySelector('#play')
play.addEventListener('click', trataDadosDeEntrada);

const texto = 'Vamos lá, mais um teste, agora com paramentros e nome do arquivo.'

const trataDadosDeEntrada = () => {
  const texto = document.querySelector('#textToTranscription').value;
  console.log(texto);
}
 */

const texto = 'Vamos lá, mais um teste, agora com paramentros e nome do arquivo.'

synthesize(texto, 'teste3');
/* window.onload = () => {

}  */