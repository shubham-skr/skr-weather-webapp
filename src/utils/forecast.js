// npm module
const axios = require("axios");

// API Key config file 
const config = require('../../config');  

// Fetch and return the weather of the given coordinates
const forecast = async (latitude, longitude) => {
  let weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=metric&appid=" + config.weatherKey;
  
  const response = await axios.get(weatherUrl);
  
  return {
    country: response.data.sys.country,
    location: response.data.name,
    weather: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    temperature: response.data.main.temp,
    tempMin: response.data.main.temp_min,
    tempMax: response.data.main.temp_max,
    humidity: response.data.main.humidity,
    windSpeed: response.data.wind.speed,
  };
};

module.exports = forecast;
