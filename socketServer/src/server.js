import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
// app.listen(3000, handleListen);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const sockets = [];

/** 웹소켓 연결 (연결, 닫음, 메시지 받아오기, 메시지 보내기) */
wss.on("connection", (socket) => {
  sockets.push(socket);
  console.log("Connected to Browser ⭕");
  socket.on("close", () => console.log("Disconnected to Browser ❌"));
  socket.on("message", (message) => {
    sockets.forEach((aSocket) => aSocket.send(message.toString("utf8")));
  });
});

server.listen(3000, handleListen);
