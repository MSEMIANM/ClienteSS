var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var clienteSchema = Schema({
  nombre: {
    type: String,
    require: true,
  },
  apellidoPaterno: {
    type: String,
    require: true,
  },
  apellidoMaterno: {
    type: String,
    require: true,
  },
  edad: {
    type: Number,
    require: true,
  },
  sexo: {
    type: String,
    require: true,
  },
  correoElectronico: {
    type: String,
    require: true,
  },
  curp: {
    type: String,
    require: true,
  },
  cuenta: {
    type: Number,
  },
});

module.exports = mongoose.model("Cliente", clienteSchema);
