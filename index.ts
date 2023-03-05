import express from "express";
import http from "http";
import { Server } from "socket.io";

import { click, moveCursor } from "./src/robot";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("up", (msg) => {
    moveCursor("up");
  });
  socket.on("left", (msg) => {
    moveCursor("left");
  });
  socket.on("right", (msg) => {
    moveCursor("right");
  });
  socket.on("down", (msg) => {
    moveCursor("down");
  });
  socket.on("cancel", (msg) => {
    moveCursor("cancel");
  });
  socket.on("click", (msg) => {
    click();
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
