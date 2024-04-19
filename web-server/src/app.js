const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Set up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Set up static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Tilak",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Tilak",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Tilak",
    helpText: "Help page",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecase: "50 degree celcius",
    location: "New Delhi",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Tilak",
    errMsg: "Help Article Page Not Found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 ",
    name: "Tilak",
    errMsg: " Page Not Found",
  });
});

app.listen(3000, () => {
  console.log("Server is Up on port 3000");
});
