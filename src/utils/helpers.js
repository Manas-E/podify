
import { Predictions } from '@aws-amplify/predictions';
import { Storage } from 'aws-amplify'


export const translate = async (text, language = 'en', targetLanguage = 'hi') => {
    const translation = await Predictions.convert({
        translateText: {
            source: {
                text,
                language // defaults configured on aws-exports.js
                // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
            },
            targetLanguage
        }
    })
    if (!translation || !translation.text) {
        console.error(`There was an error translating phrase ${text}`);
        return;
    }

    return translation.text;
}

export const convertToSpeech = async (text, language = 'en') => {
    const speech = await Predictions.convert({
        textToSpeech: {
            source: {
                text
            },
            voiceId:  language === 'hi'? 'Aditi'  : 'Salli'
        }
    })
    return speech;
}

function blobToBase64(blob) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
        reader.onloadend = () => {
            resolve(reader.result);
        };
    });
};

export const saveToS3 = async (data64,name='a')=>{
//    let blob1 = new Blob([new Uint8Array(blob.audioStream)],{type:'audio/webm'})
//    const formData = new FormData();
//    formData.append('audio-file', blob1);
//    let audio = new Audio();
//    audio.srcObject = blob.audioStream;



//    let AudioContext = window.AudioContext || window.webkitAudioContext;
//    console.log({ AudioContext });
//    const audioCtx = new AudioContext(); 
//    const source = audioCtx.createBufferSource();
//    audioCtx.decodeAudioData(blob.audioStream, (buffer) => {

//      source.buffer = buffer;
//      source.connect(audioCtx.destination);
//      source.start(0);
//    }, (err) => console.log({err}));

    // console.log(source,"<<")
    let id = name + "_"+ Date.now();
    const storageResult = await Storage.put(id, data64.toString(), {
        level: 'public',
        contentType: "text/plain"
      })

      const get = await Storage.get(name)
      console.log(get)
    return storageResult
}


export const playAudio = (recording) => {
    let i = 0;
    const audio = new Audio();
    audio.src = recording.speech.url;
    audio.muted = true;
    audio.play();
   
}