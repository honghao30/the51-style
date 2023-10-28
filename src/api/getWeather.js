import axios from 'axios';
import { ref } from 'vue';

import { todayData,hh,calcTime,calcHuos,todayPrint,getTodayLabel } from '@/assets/js/weather/getData.js';
import   weatherDescKo   from '@/assets/js/weather/weaTherKo';

const RankBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const Mykey = '13b55b2bf5bf4b64df063ddbfe1f3c5c'
let citis = 'Seoul'

const rainDay = [200,201,202,210,211,212,221,230,231,232,300,301,302,310,311,313,314,321,500,501,502,503,504,511,520,521,522,531];
const cloudDay = [721,731,741,804,802];

const Weather= async () => {
    axios
    .get(`${RankBaseUrl}${citis}&APPID=${Mykey}&units=metric`,)
    .then(res => {            
        console.log(res.data);

        // todayWeather.value = weatherDescKo[res.data.weather[0].id];
        // todaytemp.value = res.data.main.temp ;
        // todaywind.value = res.data.wind.speed;
        // todayhumidity.value = res.data.main.humidity;
        // citiName.value = res.data.name;
        // todayNowtime.value = todayPrint;
        // todayWeek.value = getTodayLabel();
        // WeatherIcon.value =  baseImgUrl + res.data.weather[0].icon + '.png'

        // sunriseTimeIs.value = calcTime(res.data.sys.sunrise);
        // sunsetTimeIs.value = calcTime(res.data.sys.sunset);




    })
    .catch(err => {
        console.log(err.message);
    })       
}
export default Weather;