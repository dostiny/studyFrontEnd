import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

/** 함수 분리해서 만드는 버전 */
function onSocketClose() {
  console.log("Disconnected to Browser ❌");
}

function onSocketMessage(message) {
  console.log(message.toString("utf8"));
}

wss.on("connection", (socket) => {
  console.log("Connected to Browser ⭕");
  socket.on("close", onSocketClose);
  socket.on("message", onSocketMessage);
  socket.send("hello!!");
});

server.listen(8000, handleListen);
