const axios = require("axios");

const geocode = async (address) => {
  let geocodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?limit=1&access_token=pk.eyJ1Ijoic2h1YmhhbS1za2tzIiwiYSI6ImNrbmY5cmMwdDAwODAydnJ6c201azNldWQifQ.YiC-aipNIWPYMxoIqs0_vQ";
  
  const response = await axios.get(geocodeUrl);
  
  if (response.data.features.length == 0) {
    throw Error;
  }
  
  return {
    location: response.data.features[0].place_name,
    longitude: response.data.features[0].center[0],
    latitude: response.data.features[0].center[1],
  };
};

module.exports = geocode;
