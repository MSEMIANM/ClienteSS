var modeloCliente = require("../models/modeloCliente");
var cuentas = new modeloCliente();

function registrarCuentas(req, res) {
  var params = req.body;
  console.log(params);

  cuentas.cuenta = params.cuenta;

  if (cuentas.cuenta != null ) {
    cuentas.save((err, cuenta_Almacenada) => {
      if (err) {
        if (res.status(500).send({ mesagge: "Error al guardar el cliente"}));
      } else {
        if (!cuenta_Almacenada) {
          res.status(404).send({ mesagge: "No se ha registrado el cliente" });
        } else {
          res.status(200).send([
            {
              cuenta: cuenta_Almacenada.cuenta,
            },
          ]);
          console.log("Cuenta almacenada");
        }
      }
    });
  }
}

module.exports = {
    registrarCuentas
}