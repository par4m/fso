const express = require("express");
// express app

const app = express();

// connect to mongodb
const dbURI = "mongodb+srv://param2k3:Lxl4nexvYc2ehVRR@cluster0.vflbpye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const port = 3000;

// listen for requests

app.listen(port);

// requests

app.use((req, res, next) => {
  console.log("new req made: ");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("in the next middleware");
  next();
});

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 Page
// fires for every single req regardless of URL
// use is used for middleware
// it runs if it reaches this end of the code
// has to stay at bottom
app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});
