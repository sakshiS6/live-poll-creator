"use client";
import { IconCopy } from "@tabler/icons-react";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import WordCloud from "react-d3-cloud";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { WordCloudComponent } from "../../../../components/WordCloudComponents";

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

// const options = {
//   colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"],
//   enableTooltip: true,
//   deterministic: false,
//   fontFamily: "impact",
//   fontSizes: [5, 60],
//   fontStyle: "normal",
//   fontWeight: "normal",
//   padding: 1,
//   rotations: 3,
//   rotationAngles: [0, 90],
//   scale: "sqrt",
//   spiral: "archimedean",
//   transitionDuration: 1000,
// };


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

  const copyLink = () => {
    navigator.clipboard
      .writeText("http://localhost:3000/poll/" + id)
      .then((result) => {
        toast.success("Link copied");
      })
      .catch((err) => {
        console.log(err);
        toast.success("Error occured");
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

  if (roomData === null) {
    return <h1>Loading room details...</h1>;
  }

  return (
    <div className="relative min-h-screen bg-violet-300 text-center p-4">
      <h1 className="text-4xl text-white font-bold pt-8">Create a Poll !</h1>
      <h1 className="text-2xl text-white mt-8">Created By: {roomData.name} </h1>

      <h1 className="text-3xl block">Title : {roomData.title}</h1>
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

      <button className="flex gap-3 align-items" onClick={copyLink}>
        <IconCopy />
        Copy Link
      </button>

      <div className="flex justify-start gap-8 mt-6 mr-10">
        <div className="pl-28 pt-2">
          <input
            type="text"
            placeholder="Option 1"
            className="w-fit px-2 py-1 m-4 rounded-lg border border-gray-300 block"
          />
          <input
            type="text"
            placeholder="Option 2"
            className="w-fit px-2 py-1  m-4 rounded-lg border border-gray-300 block"
          />
          <input
            type="text"
            placeholder="Option 3"
            className="w-fit px-2 py-1  m-4 rounded-lg border border-gray-300 block"
          />
          <input
            type="text"
            placeholder="Option 4"
            className="w-fit px-2 py-1  m-4 rounded-lg border border-gray-300 block"
          />
          <button className="px-2 py-1 m-4 text-white bg-violet-700 rounded-md font-bold flex">
            Add Option
          </button>
          <button
            className="px-3 py-2 text-center text-white bg-violet-700 rounded-md font-semibold mt-2 justify-end w-full"
            type="submit"
          >
            Host a Poll
          </button>
        </div>

        {/* <div style={{ height: 400, width: 600 }}>
          <ReactWordcloud options={options} words={words} />
        </div> */}

        <div className="">
          <h1>My Word Cloud</h1>
          <WordCloudComponent words={words} />
        </div>
      </div>
    </div>
  );
};

export default Host;
