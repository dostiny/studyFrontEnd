"use client";

import { useState, useEffect } from "react";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:5000";

export default function Home() {
  let socket = io(ENDPOINT);
  const [roomNum, setRoomNum] = useState("");
  const pushServer = () => {};
  return (
    <div>
      <h1>Hello World</h1>
      <div id="welcome">
        <form action="">
          <input
            type="text"
            placeholder="room name"
            value={roomNum}
            onChange={(e) => {
              setRoomNum(e.target.value);
            }}
          />
          <button
            onClick={() => {
              socket.emit("room", { payload: roomNum });
            }}
          >
            Enter Room
          </button>
        </form>
      </div>
    </div>
  );
}
