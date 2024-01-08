var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cuentaSchema = Schema({
  cuenta: {
    type: Number,
    require: true
  },
});

module.exports = mongoose.model("Cuenta", cuentaSchema);
