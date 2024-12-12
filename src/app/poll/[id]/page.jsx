"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const Poll = () => {
  const router = useRouter();
  const pollInput = useRef(null);

  const { id } = useParams();

  const [socket, setSocket] = useState(
    io("http://localhost:5000", { autoConnect: false })
  );

  const [roomData, setRoomData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState("");

  const fetchRoomData = async () => {
    socket.connect();
    const res = await axios.put("http://localhost:5000/room/update/" + id);
    console.log(res.data);
    setRoomData(res.data);
    const { title } = res.data;
    socket.emit("join-room", title);
  };

  useEffect(() => {
    fetchRoomData();
  }, [id]);

  const askResponse = () => {
    socket.emit("set-response", { response: pollInput.currentQuestion,roomName });
  };

  socket.on("get-question", (question) => {
    setCurrentQuestion(question);
  });

  if (roomData === null) {
    return <h1>Loading poll details...</h1>;
  }

  return (
    <div className="bg-violet-300 text-white h-screen p-4">
      <h1 className="mt-8 text-4xl ">Question : {currentQuestion}</h1>
      <textarea
        ref={pollInput}
        className="px-2 py-1 bg-gray-100 w-fit px-3 py-2 rounded-lg text-black text-2xl"
        placeholder="Enter your selected option"
      >
      </textarea>
      <button className="block gap-3 align-items text-violet-900 bg-white px-2 py-2 rounded-lg shadow-xl" onClick={askResponse}>Send Response</button>
    </div>
  );
};

export default Poll;
