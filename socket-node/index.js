const route = require("./route");
const https = require("http");
const socketio = require("socket.io");
const express = require("express");
const cors = require("cors");

const port = 4001;
const app = express();
const server = https.createServer(app).listen(port, () => {
  console.log(`its running ${port}`);
});


var io = socketio(server, {
  cors: {
    origin: "*",
  },
  credentials: true,
});

io.on("connection", (socket) => {
  app.set("setter",socket);
  // route.getSocketIO(socket);
  console.log("a user connected");
});
app.use(cors())
app.use("/api", route);

module.exports = app;
