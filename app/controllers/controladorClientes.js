var modeloClietes = require("../models/modeloCliente");
var clientes = new modeloClietes();

function registrarCliente(req, res) {
  //Metodo Post Registramos cliente en la base de datos
  var params = req.body; //Obtencion de datos por el metodo POST
  console.log(params);

  //Generando las variables de los campos
  clientes.nombre = params.nombre;
  clientes.apellidoPaterno = params.apellidoPaterno;
  clientes.apellidoMaterno = params.apellidoMaterno;
  clientes.edad = params.edad;
  clientes.sexo = params.sexo;
  clientes.correoElectronico = params.correoElectronico;
  clientes.curp = params.curp;

  //Si todos los campos no son nulos entra la condicional
  if (
    clientes.nombre != null &&
    clientes.apellidoPaterno != null &&
    clientes.apellidoMaterno != null &&
    clientes.edad != null &&
    clientes.sexo != null &&
    clientes.correoElectronico != null &&
    clientes.curp != null
  ) {
    //guardar el ususario en BD
    clientes.save((err, clienteAlmacenado) => {
      if (err) {
        //Nos mandara el error 500
        res.status(500).send({ mesagge: "Error al guardar el cliente" });
      } //Se almacenara el usuario con los parametros
      else {
        if (!clienteAlmacenado) {
          res.status(404).send({ mesagge: "No se ha registrado el cliente" });
        } else {
          //nos devuelve un objeto con los datos del ususario guardado
          res.status(200).send([
            {
              id: clienteAlmacenado._id,
              nombre: clienteAlmacenado.nombre,
              apellidoPaterno: clienteAlmacenado.apellidoPaterno,
              apellidoMaterno: clienteAlmacenado.apellidoMaterno,
              edad: clienteAlmacenado.edad,
              sexo: clienteAlmacenado.sexo,
              correoElectronico: clienteAlmacenado.correoElectronico,
              curp: clienteAlmacenado.curp,
            }
          ]);
          console.log("Cliente almacenado");
        }
      }
    });
  }
}

const buscarCliente = async function (req, res) {
  const clientenombre = req.params.id;//Obtencion de datos por el metodo GET
  try {
    const cliente = await modeloClietes.findById(clientenombre); //Consulta pra la obtencion de datos en el modelo
    if (cliente) {
      res.status(200).send({ data: cliente });//Nos devuelve los datos del id buscado
      console("datos obtenidos")
      //Errores
    } else {
      res.status(404).send({ data: undefined, mesagge: "Cliente no encontrado" });
    }
  } catch (error) {
    res.status(500).send({ data: undefined, mesagge: "Error al obtener los datos" });
      console.log("datos no obtenidos")
  }
};

//Exportacion de modulos 
module.exports = {
  registrarCliente,
  buscarCliente
};
