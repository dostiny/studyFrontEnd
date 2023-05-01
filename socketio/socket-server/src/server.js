const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log(socket);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
