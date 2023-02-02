import axios from "axios";

export const getPlacesData= async () => {

    try {
       const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`, 
        {params: {
            bl_latitude: '1.469155',
            tr_latitude: '1.625253',
            bl_longitude: '103.636525',
            tr_longitude: '104.025236',
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