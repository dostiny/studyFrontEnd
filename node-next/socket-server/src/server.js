const express = require("express");
const app = express();
const http = require("http");
import { Server } from "socket.io";
const cors = require("cors");
const router = require("./router");

const server = http.createServer(app);
const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(router);

//
io.on("connection", (socket) => {
  console.log("connected");
  socket.on("room", (msg) => console.log(msg));
  socket.on("disconnect", () => {
    console.log("byebye");
  });
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
