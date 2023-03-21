const http = require("http");
const socketio = require("socket.io");

const server = http.createServer();
const io = socketio(server, {
  cors: {
    origin: 'http://localhost:3000',
  }
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", (message) => {
    console.log(`Received message: ${message}`);
    io.emit("message", message); // broadcast message to all connected clients
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3001, () => {
  console.log("Socket.io server listening on port 3001");
});
