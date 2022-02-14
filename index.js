//const transcription = require('./src/transcription');
//transcription();
// const synthesize = require('./src/synthesize');

import synthesize from './src/synthesize' 
/* 
const play = document.querySelector('#play')
play.addEventListener('click', trataDadosDeEntrada);*/

const test =  'Olá, somos alunos da tribo assim que se coda, e estamos muito felizes em apresentar a vocês em primeira mão a versão 1 do nosso projeto. produzido por: Caio Costa, Imar Mendes, Thiago Zardo, Wanny martins';
synthesize(test, 'boasVindas'); 
