// npm modules
const axios = require("axios");
require('dotenv').config();

// Fetch and return longitude and latitude of the given location
const geocode = async (address) => {
  let geocodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?limit=1&access_token=" + process.env.GEOCODE_API_KEY;
  
  const response = await axios.get(geocodeUrl);
  
  if (response.data.features.length == 0) {
    throw Error;
  }
  
  return {
    longitude: response.data.features[0].center[0],
    latitude: response.data.features[0].center[1],
  };
};

module.exports = geocode;
