const express = require("express");
require('dotenv').config()
// connect to db
const dbURI = process.env.dbURI.toString();

const mongoose = require("mongoose");

// import routes
const routes = require("./routes/api");
//
const app = express();


// use express to server static files
//
app.use(express.static('public'));



// connec to mongodb
mongoose.connect(dbURI).then(() => {
  console.log("Connected to Db");
}).catch((err) => {
  console.log(err);
});


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

// use routes
app.use("/api", routes);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
})

// listen for reqs
app.listen(3000, () => {
  console.log("listening now ");
});

app.get("/", (req, res) => {
  res.send("<p> started </p>");
});




