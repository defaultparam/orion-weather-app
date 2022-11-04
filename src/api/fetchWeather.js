import axios from 'axios';
const url = 'https://api.openweathermap.org/data/2.5/weather';
const key = '<YOUR_API_KEY>'

const fetchWeather = async (query) =>{
    const { data } = await axios.get(url,{
        params:{
            q:query,
            units:'metric',
            APPID:key
        }
    });
    return data;
}


export default fetchWeather;
