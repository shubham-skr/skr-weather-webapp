const axios = require("axios");

const forecast = async (latitude, longitude) => {
  let weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=metric&appid=5c14a534276a76eb2f5fee1d215c13eb";
  
  const response = await axios.get(weatherUrl);
  
  return {
    weather: response.data.weather[0].main,
    temperature: response.data.main.temp,
    tempMin: response.data.main.temp_min,
    tempMax: response.data.main.temp_max,
    humidity: response.data.main.humidity,
    windSpeed: response.data.wind.speed,
  };
};

module.exports = forecast;
