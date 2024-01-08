"use strict";
var express = require("express");
var controladorClientes = require("../controllers/controladorClientes");
var controladorCuenta = require("../controllers/controladorCuentas");
var api = express.Router();

api.post("/registrarCliente", controladorClientes.registrarCliente);
api.post("/registrarCuenta", controladorCuenta.registrarCuentas);
api.get("/buscar/:id", controladorClientes.buscarCliente);

module.exports = api;
