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
  const [response, setResponse] = useState("");
  const [appear, setAppear] = useState(true);

  const fetchRoomData = async () => {
    socket.connect();
    const res = await axios.get("http://localhost:5000/room/getbyid/" + id);
    setAppear(true);
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
    toast.success("Response sended successfully!");
  };

  socket.on("get-question", (question) => {
    setCurrentQuestion(question);
    console.log(question);
    setAppear(false);
  });

  if (roomData === null) {
    return <h1>Loading poll details...</h1>;
  }

  return (
    <div className="relative min-h-screen bg-violet-300 text-center p-4">
      <h1 className="text-5xl mt-2 font-bold text-gray-900 dark:text-neutral-400 ">
      Live Poll: Share Your Voice
      </h1>
      <div >
        <div className="mt-4 w-[85%] mx-auto text-3xl font-semibold flex bg-white px-4 py-3 rounded-lg">
          Question : 
          {appear ? (
            <h1 className="text-black">  Waiting for the Host to Set the Question...</h1>
          ) : (
            <h1 className="text-black">{currentQuestion}</h1>
          )}
        </div>
        <div className="flex items-start justify-center gap-8">
          {/* Image Section */}
          <img
            src="/response.png"
            alt="Poll Illustration"
            className="w-1/3"
          />
        </div>
        <div>
          <label className="flex text-3xl font-bold justify-center mt-2 text-gray-900 dark:text-neutral">
          Respond Now
          </label>
          <p className="p-2 text-xl font-semibold text-gray-900 dark:text-neutral">Respond with one word to add your voice to the poll. Let your word shape the conversation!</p>
          <textarea
            // ref={pollInput}
            className="mt-2 bg-gray-100 w-fit px-5 py-4 rounded-lg text-black text-2xl w-2/3 h-auto"
            placeholder="Type here..."
            id="response"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          ></textarea>
          <button
            className="block mx-auto font-semibold text-violet-700 bg-white px-2 py-2 mt-3 rounded-lg shadow-xl text-lg"
            onClick={sendResponse}
          >
            Send Response
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poll;
