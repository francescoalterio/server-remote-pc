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
    clearInterval(interval);
    interval = setInterval(() => MoveCursor("up"), 10);
    console.log("up");
  });
  socket.on("left", (msg) => {
    clearInterval(interval);
    interval = setInterval(() => MoveCursor("left"), 10);
    console.log("left");
  });
  socket.on("right", (msg) => {
    clearInterval(interval);
    interval = setInterval(() => MoveCursor("right"), 10);
    console.log("right");
  });
  socket.on("down", (msg) => {
    clearInterval(interval);
    interval = setInterval(() => MoveCursor("down"), 10);
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
