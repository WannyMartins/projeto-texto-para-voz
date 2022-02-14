// const fs = require('fs');
//import fs from '../node_modules/fs'
/* const path = require('path'); */
import TextToSpeechV1 from './node_modules/ibm-watson/text-to-speech/v1.js'
import { IamAuthenticator } from './node_modules/ibm-watson/auth'
//import credentials from './apikey-ibm-cloud-tts.json' 

/* const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');

const { IamAuthenticator } = require('ibm-watson/auth'); */



// const credentials = require('./apikey-ibm-cloud-tts.json');

// const textToConvert = fs.readFileSync(path.join(__dirname, '../transcription.txt'), 'utf8');
//const textToConvert = 'Teste, recebendo testo.';



async function synthesize(textToConvert, fileName) {
    const textToSpeech = new TextToSpeechV1({
        authenticator: new IamAuthenticator({
            apikey: 'TB7Ga14NWihWEc1IyFQD1nxfAqOTR-lTIU6ntM6GYsWa',
        }),
        serviceUrl: 'https://api.au-syd.speech-to-text.watson.cloud.ibm.com/instances/84158d92-f14a-4aa7-8ba0-340f7215308f',
    });

    const synthesizeParams = {
        text: textToConvert,
        accept: 'audio/wav',
        voice: 'pt-BR_IsabelaV3Voice',
    }

    await textToSpeech.synthesize(synthesizeParams)
    .then(response => {
        return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then(buffer => {
        //fs.writeFileSync(`${fileName}`, buffer);
        console.log(buffer);
    })
    .catch(err => {
        console.log('error: ', err);
    })
}

const texto = 'Mais teste de audio'
synthesize(texto, 'teste5');

export default synthesize;
//module.exports = synthesize;
/* if (typeof module !== 'undefined') {
    module.exports = {
        synthesize,
    };
  } */