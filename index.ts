import express from "express";
import http from "http";
import { Server } from "socket.io";

import MoveCursor from "./robot";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});

let interval: any;

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("up", (msg) => {
    interval = setInterval(() => MoveCursor("up"), 1);
    console.log("up");
  });
  socket.on("left", (msg) => {
    interval = setInterval(() => MoveCursor("left"), 1);
    console.log("left");
  });
  socket.on("right", (msg) => {
    interval = setInterval(() => MoveCursor("right"), 1);
    console.log("right");
  });
  socket.on("down", (msg) => {
    interval = setInterval(() => MoveCursor("down"), 1);
    console.log("down");
  });
  socket.on("cancel", (msg) => {
    clearInterval(interval);
    console.log("cancel");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
