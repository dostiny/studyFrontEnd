"use client";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import Chat from "@/pages/chat";

const socket = io.connect("http://localhost:3001");

export default function Home() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
    });
  }, [socket]);

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h1>Join A Chat</h1>
          <input
            type="text"
            placeholder="Join..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button
            onClick={() => {
              joinRoom();
            }}
          >
            Join A Room
          </button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}
