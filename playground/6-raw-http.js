const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=075edd3fb5758c18d6eac0f82a85a9ab&query=40,-75&units=f";
const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});
request.on("error", (error) => {
  console.log("Error=", error);
});
request.end();
