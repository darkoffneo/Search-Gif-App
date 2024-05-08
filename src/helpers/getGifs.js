import { APIKey } from "../helpers/APIConfig";


export const getGifs= async (category)=>{
    const URL= `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${category}&limit=5`
    const res = await fetch(URL)
    const {data}= await res.json()
    const gifs= data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}