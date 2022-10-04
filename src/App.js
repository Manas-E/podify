import { useEffect, useRef, useState } from 'react'

import './App.css'
import HeroLayout4 from './ui-components/HeroLayout4'

import "@aws-amplify/ui-react/styles.css"
import { ComponentPropsToStylePropsMap, withAuthenticator } from "@aws-amplify/ui-react"
import NavBar from './ui-components/NavBar'
import { convertToSpeech, playAudio, saveToS3 } from './utils/helpers'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import ReviewCard from './ui-components/ReviewCard'
import getDate from './utils/getDate'
import { createPodcast, updatePodcast, deletePodcast } from './graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';


function App({user, signOut}) {
  const articleUrl  = useRef();
  const [extractedData, setExtract] = useState()
  const [src,setSrc]= useState("");
 let a =  {
  "imports": {
    "@aws-amplify/ui-react": "./node_modules/@aws-amplify/ui-react",
    "@aws-amplify/ui-react/internal": "./node_modules/@aws-amplify/ui-react/internal",
    "@aws-amplify/ui-react/styles.css":"./node_modules/@aws-amplify/ui-react/styles.css",
    "@aws-amplify/predictions": "./node_modules/@aws-amplify/predictions",
    "core-js-pure/stable/object/assign.js":"./node_modules/core-js-pure/stable/object/assign.js",
    "/^core-js-pure.*/": "./node_modules/core-js-pure.*/"
  }
}
let url ='https://www.threado.com/resources/writing-their-legacy-how-did-hashnode-give-a-voice-to-the-developer-community'
//  const text =  axios.get(url).then((res)=>{
//   const html = res.data
 

//   const input = 'https://townhall.hashnode.com/introducing-audio-blogs-on-hashnode-now-listen-to-articles-automatically'
//   extract(input,{ descriptionLengthThreshold: 12000000,descriptionTruncateLen:120000000})
//     .then(article => console.log(article.description))
//     .catch(err => console.error(err))
 
//   let data = extractor("C:\Users\abc\Desktop\react\speakAloud\index.html")
//   console.log(data)

// const text = convert(html, {
//   wordwrap: 130,
//   formatters: {
//     // Create a formatter.
//     'fooBlockFormatter':  function formatParagraph (elem, walk, builder, formatOptions) {
//       builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
//       walk(elem.children, builder);
//       builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
//     }

   
//   },
//   selectors: [
//     // Assign it to `foo` tags.
//     {
//       selector: 'p',
//       format: 'fooBlockFormatter',
//       options: { leadingLineBreaks: 1, trailingLineBreaks: 1 }
//     }
//   ]
// });
// setExtract(text)
//  }) 

const SuccessMessage = ()=>{
  return <div style={{display:"flex", alignItems:'center'}}>
    <h3 style={{color:'#43B0ED',paddingRight:10}}>Done  </h3>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#43B0ED" className='svg-icon'>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  </div>
}

function blobToDataURL(blob, callback) {
  var fileReader = new FileReader();
  fileReader.onload = function(e) {callback(e.target.result);}
  fileReader.readAsDataURL(blob);
}

let podcastProps;
const  [s3Url, setS3Url] = useState();

const sanitizeText = (text)=>{
 return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

}

const saveToLib =async ()=>{
if(!extractedData || !s3Url)
  return null
let s3 =  await saveToS3(s3Url,user.username)
podcastProps = { title: extractedData.title, user: user.username, s3Url: s3, description:extractedData.text,imageUrl:extractedData.images[0],date: extractedData.date_published || getDate(), blogUrl: extractedData.url};
let mutation = API.graphql(graphqlOperation(createPodcast, {input: {...podcastProps}})).then((res)=>{

  alert('Successfully saved to your lib');

}).catch((err)=>{
  alert(err.message)
})

}
async function extract(){ 

    if(!extractedData)
      return null;
  
    let audio = new Audio();
    let tts = sanitizeText(extractedData.text.slice(0,3000))
    const recordingOriginal = await convertToSpeech(tts); 
    if(recordingOriginal && recordingOriginal.speech.url){
      setSrc(recordingOriginal.speech.url);

    }
    let blob1 = new Blob([new Uint8Array(recordingOriginal.audioStream)],{type:'audio/mp3'})

    await blobToDataURL(blob1, (res)=>{
      setS3Url(res)

    })
    
}

const [showMusicPlayer,setShowMusicPlayer] = useState(false); 

const MusicPlayer = ()=>{

 return <>
 <div className="music-player">
 { src && extractedData.images &&
 
   <ReactJkMusicPlayer preload={false} defaultPosition={{top:'80%', left:'80%'}}	 audioLists={[{
    name: extractedData.title,
    cover:
    extractedData.images[0],
    musicSrc:
    src,
    // support async fetch music src. eg.
    // musicSrc: async () => {
    //   return await fetch('/api')
    // },
  },]}
/>
}
</div>
</> 
}
let d = new Date().getDate();
useEffect(()=>{
  extract();
},[extractedData])
  return (
    <div className="App">
      <NavBar user={user} signOut={signOut}></NavBar>
      <HeroLayout4 setExtract={setExtract} ></HeroLayout4>
    {extractedData &&   <ReviewCard saveToLib={saveToLib} setShowMusicPlayer={setShowMusicPlayer} title={extractedData.title} description={extractedData.text} date={extractedData.date_published || getDate()} imageUrl={extractedData.images[0]}></ReviewCard> }
      {showMusicPlayer &&<MusicPlayer></MusicPlayer>}
   
    </div>
  )
}

export default withAuthenticator(App)
