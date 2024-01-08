var mongoose = require("mongoose");
var app = require("./app");
var port = 3977;

mongoose.connect(
  "mongodb+srv://root:root@test2.sociqnr.mongodb.net/clientes",
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("conexion exitosa");
      app.listen(port, function () {
        console.log("El servidor se esta eschando en http://localhost:" + port);
      });
    }
  }
);
