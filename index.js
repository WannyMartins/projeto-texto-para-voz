//const transcription = require('./src/transcription');
//transcription();
// const synthesize = require('./src/synthesize');

import synthesize from './src/synthesize' 
/* 
const play = document.querySelector('#play')
play.addEventListener('click', trataDadosDeEntrada);

const texto = 'Vamos lá, mais um teste, agora com paramentros e nome do arquivo.'

const trataDadosDeEntrada = () => {
  const texto = document.querySelector('#textToTranscription').value;
  console.log(texto);
}
 */

const texto = 'Mais teste de audio'
synthesize(texto, 'teste4');

/* window.onload = () => {

}  */