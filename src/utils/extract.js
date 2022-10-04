import axios from 'axios'
import React from 'react'

async function extractor(url) {

    const BASE_URL= "https://extractorapi.com/api/v1/extractor/"
    const requestUrl = BASE_URL + `?apikey=${process.env.REACT_APP_EXTRACTOR_API}&fields=date_published,raw_text,translated_title,translated_text,title,clean_html,images&url=${url}`
    
   return await axios.get(requestUrl).then((res)=>res.data)
}

export default extractor