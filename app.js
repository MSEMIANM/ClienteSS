var express = require("express");
var bodyparser = require("body-parser");
var rutaClientes = require("./app/routes/rutaClientes");
var app = express();
const path = require("path");

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "./views"));

app.use("/", rutaClientes);

module.exports = app;
