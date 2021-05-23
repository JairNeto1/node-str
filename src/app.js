"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

//conectar ao banco
mongoose.connect(
  "mongodb+srv://admin:1234@cluster0.4nvhz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

//Carregar os Models
const Product = require("./models/product");
const Customer = require("./models/customer");

// carrega as rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
