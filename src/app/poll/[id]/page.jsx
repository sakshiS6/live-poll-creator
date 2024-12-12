"use client"
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';

const Poll = () => {

  const router = useRouter();

  const { id } = useParams();

  const [socket, setSocket] = useState(
    io("http://localhost:5000", { autoConnect: false })
  );
  
  const [roomData, setRoomData] = useState(null);

  const fetchRoomData = async () => {
    const res = await axios.put("http://localhost:5000/room/update/" + id);
    console.log(res.data);
    setRoomData(res.data);
    const { question } = res.data;
    socket.emit("Answer here", question);
  };

  useEffect(() => {
    fetchRoomData();
  }, [id]);

  if (roomData === null) {
    return <h1>Loading poll details...</h1>;
  }

  return (
    <div className='bg-violet-300 text-white h-screen p-4'>
    <h1 className='mt-8 text-4xl '>Question : {roomData.question}</h1>
    <textarea className='px-2 py-1 bg-gray-100 w-fit px-3 py-2 rounded-lg text-black text-2xl' placeholder='Enter your selected option'></textarea>
    </div>
  )
};

export default Poll;
