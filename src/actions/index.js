const WEATHER_API_KEY= '485349437deba1a5b0840d2b3836007b';

const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName){
    const finalURL = `${ROOT_URL}&q=${cityName},us`;
    return {
        type: FETCH_WEATHER
    };
}