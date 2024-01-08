var express = require("express");
var bodyparser = require("body-parser");
var rutaClientes = require("./app/routes/rutaclientes");
var app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/api", rutaClientes);

module.exports = app;
