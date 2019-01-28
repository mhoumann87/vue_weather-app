import apiKey from './api_key';

// Weather API www.darksky.net
const key = apiKey.getWeatherKey();
const proxy = 'https://cors-anywhere.herokuapp.com/';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${key}/`;

// Location API www.Opencage.com
const locationKey = apiKey.getLocationKey();
const PLACE_URL = 'https://api.opencagedata.com/geocode/v1/json?q=';

function getCity(latitude, longitude) {
  return fetch(`${PLACE_URL}${latitude}+${longitude}&key=${locationKey}`)
    .then(response => response.json());
}

function getCoords(location) {
  return fetch(`${PLACE_URL}${location}&key=${locationKey}`)
    .then(response => response.json());
}

function getForecast(latitude, longitude) {
  return fetch(`${WEATHER_API_URL}${latitude},${longitude}?units=si`)
    .then(response => response.json());
}

export default {
  getForecast,
  getCity,
  getCoords,
};
