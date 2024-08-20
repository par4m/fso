const express = require("express");
const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://param2k3:Lxl4nexvYc2ehVRR@cluster0.vflbpye.mongodb.net/node-tut?retryWrites=true&w=majority&appName=Cluster0";

const Product = require("./models/product.model.js");
const app = express();
const port = 8000;

app.use(express.json());

app.post("/api/products", async (req, res) => {
  try {
    const prod =  await Product.create(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// connect to db

mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

// run server

app.listen(port, () => {
  console.log("Running on Port 8000");
});

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});
