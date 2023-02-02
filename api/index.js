import axios from "axios";

export const getPlacesData= async () => {

    try {
       const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`, 
        {params: {
            bl_latitude: '11.847676',
            tr_latitude: '12.838442',
            bl_longitude: '109.095887',
            tr_longitude: '109.149359',
            limit: '30',
            lunit: 'km',
            currency: 'USD',
            lang: 'en_US'
          }, 
          headers: {
            'X-RapidAPI-Key': '1805c037f6mshaa7804d9c22b578p1094ecjsn0038d4d9092f',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }},
        
        )
        return data;

    } catch(err)  {
        return null
    }
}