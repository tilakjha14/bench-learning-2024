const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/search/geocode/v6/forward?q=" +
    encodeURIComponent(address) +
    "&access_token=pk.eyJ1IjoidGlsYWtqaGExNCIsImEiOiJjbHYzazJuemMwYWR1MzBtb2EwMXM3ZXM4In0.VDbSrdhQq84VzaM5emSb_w&limit=1";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to fetch Geo Data", undefined);
    } else if (body.features.length === 0) {
      callback("Geo Data not found", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].properties.coordinates.latitude,
        longitude: body.features[0].properties.coordinates.longitude,
        location: body.features[0].properties.full_address,
      });
    }
  });
};

module.exports = geocode;
