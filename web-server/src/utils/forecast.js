const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=075edd3fb5758c18d6eac0f82a85a9ab&query=" +
    encodeURIComponent(lat) +
    "," +
    encodeURIComponent(long) +
    "&units=f";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to fetch weather data", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions +
          ". It is currently " +
          body.current.temperature +
          " degree ferenheit but it feels like " +
          body.current.feelslike +
          " degree"
      );
    }
  });
};
module.exports = forecast;
