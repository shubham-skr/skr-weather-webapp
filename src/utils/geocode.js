const axios = require("axios");
const keys = require("./API_keys")

const geocode = async (address) => {
  let geocodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?limit=1&access_token=" + keys.geocodeKey;
  
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
