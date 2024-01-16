"use strict";
var express = require("express");
var api = express.Router();
var controladorClientes = require("../controllers/controladorClientes");
var controladorCuenta = require("../controllers/controladorCuentas");

api.get("/index", controladorClientes.index);
api.get("/clientes", controladorClientes.registrarCliente );
api.get("/cuentas", controladorClientes.cuentas);
api.get("/buscar/:id", controladorClientes.buscarCliente);

module.exports = api;
