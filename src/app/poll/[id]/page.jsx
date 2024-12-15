"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const Poll = () => {
  const router = useRouter();
  // const pollInput = useRef(null);

  const { id } = useParams();

  const [socket, setSocket] = useState(
    io("http://localhost:5000", { autoConnect: false })
  );

  const [roomData, setRoomData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [response, setResponse] = useState("")

  const fetchRoomData = async () => {
    socket.connect();
    const res = await axios.get("http://localhost:5000/room/getbyid/" + id);
    console.log(res.data);
    setRoomData(res.data);
    const { title } = res.data;
    socket.emit("join-room", title);
  };

  useEffect(() => {
    fetchRoomData();
  }, [id]);

  const sendResponse = () => {
    socket.emit("send-response", { roomName: roomData.title, response });
    toast.success("Response sended successfully!")
  };

  socket.on("get-question", (question) => {
    setCurrentQuestion(question);
    console.log(question);
    
  });

  if (roomData === null) {
    return <h1>Loading poll details...</h1>;
  }

  return (
    <div  className="relative min-h-screen bg-violet-300 text-center p-4">
      <h1 className="mt-8 text-4xl font-bold">Question : {currentQuestion}</h1>
      <div className="flex items-start justify-center gap-8 mt-10">
          {/* Image Section */}
          <img
            src="https://www.questionpro.com/userimages/site_media/online-polls.png"
            alt="Poll Illustration"
            className="w-1/6 h-auto "
          />
          </div>
      <label className="flex text-3xl font-bold justify-center mt-20">Response</label>
      <input
        // ref={pollInput}
        className="mt-2 bg-gray-100 w-fit px-5 py-4 rounded-lg text-black text-2xl"
        placeholder="Type here..."
        id="response"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      ></input>
      <button
        className="block mx-auto font-semibold text-violet-700 bg-white px-2 py-2 mt-3 rounded-lg shadow-xl"
        onClick={sendResponse}
      >
        Send Response
      </button>
    </div>
  );
};

export default Poll;
