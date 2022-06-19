const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //!Http Server
    this.server = http.createServer(this.app);

    //!Configuracions sockets
    this.io = socketio(this.server, {/* Configuraciones */});
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configSockects() {
    new Sockets(this.io)
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    //Inicializar sockets
    this.configSockects();

    //Inicializar Server
    this.server.listen(this.port, () => {
      console.log(`Server corriendo en puerto: ${this.port}`);
    });
  }
}

module.exports = Server;
