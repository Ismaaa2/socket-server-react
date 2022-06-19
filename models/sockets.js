class Sockets {
  constructor(io) {
    this.io = io;
    this.clients = {}
    this.sockectEvents();
  }
  
  sockectEvents() {

    console.log('dentro')
    //Conexión
    this.io.on("connection", (socket) => {
      //El servidor está escuchando
      socket.on("message-to-server", (data) => {
        console.log(data);

        this.io.emit("mensaje-from-server", data);
      });
    });
  }
}

module.exports = Sockets;
