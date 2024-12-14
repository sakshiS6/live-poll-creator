"use client";
import { IconCopy } from "@tabler/icons-react";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactWordcloud from "react-wordcloud";
import { io } from "socket.io-client";

const words = [
  {
    text: "told",
    value: 64,
  },
  {
    text: "mistake",
    value: 11,
  },
  {
    text: "thought",
    value: 16,
  },
  {
    text: "bad",
    value: 17,
  },
  {
    text: "correct",
    value: 10,
  },
  {
    text: "day",
    value: 54,
  },
  {
    text: "prescription",
    value: 12,
  },
  {
    text: "time",
    value: 77,
  },
  {
    text: "thing",
    value: 45,
  },
  {
    text: "left",
    value: 19,
  },
  {
    text: "pay",
    value: 13,
  },
  {
    text: "people",
    value: 32,
  },
  {
    text: "month",
    value: 22,
  },
  {
    text: "again",
    value: 35,
  },
  {
    text: "review",
    value: 24,
  },
  {
    text: "call",
    value: 38,
  },
  {
    text: "doctor",
    value: 70,
  },
  {
    text: "asked",
    value: 26,
  },
  {
    text: "finally",
    value: 14,
  },
  {
    text: "insurance",
    value: 29,
  },
  {
    text: "week",
    value: 41,
  },
  {
    text: "called",
    value: 49,
  },
  {
    text: "problem",
    value: 20,
  },
  {
    text: "going",
    value: 59,
  },
  {
    text: "help",
    value: 49,
  },
  {
    text: "felt",
    value: 45,
  },
  {
    text: "discomfort",
    value: 11,
  },
  {
    text: "lower",
    value: 22,
  },
  {
    text: "severe",
    value: 12,
  },
  {
    text: "free",
    value: 38,
  },
  {
    text: "better",
    value: 54,
  },
  {
    text: "muscle",
    value: 14,
  },
  {
    text: "neck",
    value: 41,
  },
  {
    text: "root",
    value: 24,
  },
  {
    text: "adjustment",
    value: 16,
  },
  {
    text: "therapy",
    value: 29,
  },
  {
    text: "injury",
    value: 20,
  },
  {
    text: "excruciating",
    value: 10,
  },
  {
    text: "chronic",
    value: 13,
  },
  {
    text: "chiropractor",
    value: 35,
  },
  {
    text: "treatment",
    value: 59,
  },
  {
    text: "tooth",
    value: 32,
  },
  {
    text: "chiropractic",
    value: 17,
  },
  {
    text: "dr",
    value: 77,
  },
  {
    text: "relief",
    value: 19,
  },
  {
    text: "shoulder",
    value: 26,
  },
  {
    text: "nurse",
    value: 17,
  },
  {
    text: "room",
    value: 22,
  },
  {
    text: "hour",
    value: 35,
  },
  {
    text: "wait",
    value: 38,
  },
  {
    text: "hospital",
    value: 11,
  },
  {
    text: "eye",
    value: 13,
  },
  {
    text: "test",
    value: 10,
  },
  {
    text: "appointment",
    value: 49,
  },
  {
    text: "medical",
    value: 19,
  },
  {
    text: "question",
    value: 20,
  },
  {
    text: "office",
    value: 64,
  },
  {
    text: "care",
    value: 54,
  },
  {
    text: "minute",
    value: 29,
  },
  {
    text: "waiting",
    value: 16,
  },
  {
    text: "patient",
    value: 59,
  },
  {
    text: "health",
    value: 49,
  },
  {
    text: "alternative",
    value: 24,
  },
  {
    text: "holistic",
    value: 19,
  },
  {
    text: "traditional",
    value: 20,
  },
];

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
};

const Host = () => {
  const { id } = useParams();

  const [socket, setSocket] = useState(
    io("http://localhost:5000", { autoConnect: false })
  );

  const [pollLink, setPollLink] = useState("");

  useEffect(() => {
    socket.connect();
  }, []);

  const [roomData, setRoomData] = useState(null);
  const [question, setQuestion] = useState("");
  const [currentResponse, setCurrentResponse] = useState("");

  const copyLink = () => {
    navigator.clipboard
      .writeText("http://localhost:3000/poll/" + id)
      .then((result) => {
        toast.success("Link copied");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error occured");
      });
  };

  const fetchRoomData = async () => {
    const res = await axios.get("http://localhost:5000/room/getbyid/" + id);
    console.log(res.data);
    setRoomData(res.data);
    const { title } = res.data;
    socket.emit("join-room", title);
  };

  useEffect(() => {
    fetchRoomData();
  }, [id]);

  const askQuestion = () => {
    socket.emit("set-question", { roomName: roomData.title, question });
  };

  socket.on("get-response", (response) => {
    setCurrentResponse(response);
  });

  if (roomData === null) {
    return <h1>Loading room details...</h1>;
  }

  return (
    <div className="relative min-h-screen bg-violet-300 text-center p-4">
      <h1 className="text-4xl text-white font-bold pt-4">Create a Poll !</h1>
      <h1 className="text-2xl text-white mt-4">Created By: {roomData.name} </h1>

      <h1 className="text-3xl block font-bold mt-4">
        Title : {roomData.title}
      </h1>
      <label className="text-center px-2 py-2 mt-2 font-bold text-xl w-full">
        Question:
      </label>

      <input
        type="text"
        placeholder="Write your Poll Question here"
        className="px-4 py-3 rounded-md border-2 shadow-xl w-[70%] mt-6 text-black"
        id="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        className="px-3 py-2 ml-[78%] mt-4 text-white bg-violet-700 rounded-md font-bold flex"
        onClick={askQuestion}
      >
        ask question
      </button>
      <button
        className="flex mx-auto gap-3 text-black bg-white px-2 py-2 rounded-lg shadow-xl"
        onClick={copyLink}
      >
        <IconCopy />
        Copy Link
      </button>
      <h1 className="mt-4 w- px-2 py-2 bg-white text-violet-700 rounded-full w-[50%] mx-auto font-semibold">
        Response
      </h1>
      <label className="w-fit text-white font-bold px-3 py-2 text-2xl border-violet-400 shadow-xl rounded-md">
        {currentResponse}
      </label>

      <div className="mx-auto bg-white text-violet-800 w-fit m-2 p-10 align-items rounded-lg">
        <div style={{ height: 400, width: 600 }}>
          {/* <ReactWordcloud options={options} words={words} /> */}
        </div>
      </div>
    </div>
  );
};

export default Host;
