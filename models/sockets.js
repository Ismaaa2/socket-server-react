const Marcadores = require("./marcadores");

class Sockets {
  constructor(io) {
    this.io = io;
    this.marcadores = new Marcadores();
    this.sockectEvents();
  }

  sockectEvents() {
    //Conexión
    this.io.on("connection", (socket) => {

      //TODO: marcadores-activos
      socket.emit('marcadores-activos', this.marcadores.activos);
      socket.on('marcador-nuevo', marcador => {
       this.marcadores.agregarMarcador( marcador );

       socket.broadcast.emit('marcador-nuevo', marcador);

      })


      //TODO: marcador-nuevo


      //TODO: marcador-actualizado


    });
  }
}

module.exports = Sockets;
