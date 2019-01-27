import apiKey from './api_key';

const key = apiKey.getKey();
const proxy = 'https://cors-anywhere.herokuapp.com/';
const long = '37.8267';
const lat = '-122.4233';

const API_URL = `${proxy}https://api.darksky.net/forecast/${key}/${long},${lat}?units=si`;

function getForecast() {
  return fetch(API_URL)
    .then(response => response.json());
}

export default {
  getForecast,
};
