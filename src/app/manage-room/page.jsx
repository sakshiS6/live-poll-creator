"use client";
import { IconSquarePlus, IconTrash } from "@tabler/icons-react";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import ReactWordcloud from "react-wordcloud";


const ManageSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
});

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

const ManageRoom = () => {
  const router = useRouter();

  const manageForm = useFormik({
    initialValues: {
      title: "",
      name: "",
    },

    onSubmit: (values, { resetForm, setSubmitting }) => {
      axios
        .post("http://localhost:5000/room/add", values)
        .then((result) => {
          toast.success("Room Created successfully!");
          toast.success("Now, Create a Poll!");
          resetForm();
          // router.push("/poll");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || "Something went wrong!");
          setSubmitting(false);
        });
    },
    validationSchema: ManageSchema,
  });

  const [roomList, setRoomList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRooms = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:5000/room/getall");
    console.log(res.data);
    setRoomList(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const addNewRoom = (e) => {
    console.log(e.target.value);

    const newRoom = {
      name: manageForm.values.name,
      title: manageForm.values.title,
    };

    setRoomList([newRoom, ...roomList]);
    manageForm.resetForm();
  };

  const deleteRoom = async (id) => {
    if (!confirm("Are you sure you want to delete this room")) return;

    const res = await axios.delete(`http://localhost:5000/room/delete/${id}`);
    if (res.status === 200) {
      fetchRooms();
      toast.success("Room Deleted Successfull");
    } else {
      toast.error("Failed to delete room");
    }
  };

  return (
    <div className="bg-cover min-h-screen bg-violet-300 text-white p-8">
      <div style={{ height: 400, width: 600 }}>
        <ReactWordcloud words={words} />
      </div>

      <h1 className="text-4xl font-bold text-center pt-10">
        Create a Room for the Poll
      </h1>

      <button
        className="text-2xl font-bold mt-8 text-gray-700 text-center bg-white px-4 py-2 rounded-lg"
        type="submit"
        onClick={addNewRoom}
      >
        <IconSquarePlus />
        Create Room
      </button>
      {/* <form onSubmit={manageForm.handleSubmit}>
                {roomList.map((room, index) => {
                  return (
                    <div
                      className="border-2 bg-white text-black m-2 p-2 rounded-lg w-1/2 mx-auto p-6 m-4 items-center "
                      key={index}
                    >
                      <h1 className="mb-4 font-bold text-2xl">{`Room ${index + 1}`}</h1>
                      <label>
                        Give some Title to the room:
                        <input
                          id="title"
                          type="text"
                          placeholder="Title..."
                          className="rounded-lg px-2 py-1 border block w-[60%] mb-4"
                          onChange={manageForm.handleChange}
                          value={manageForm.values.title}
                        />
                      </label>
                      <label>
                        Creator's name:
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name..."
                          className="rounded-lg px-2 py-1 border block w-[60%] "
                          onChange={manageForm.handleChange}
                          value={manageForm.values.name}
                        />
                      </label>
                      {manageForm.errors.name && manageForm.touched.name && (
                        <p className=" text-xs text-red-600 mt-2" id="name-error">
                          {manageForm.errors.name}
                        </p>
                      )}
        
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded-full block mt-4 flex"
                        type="submit"
                        disabled={manageForm.isSubmitting}
                      >
                        {manageForm.isSubmitting ? (
                          <IconLoader3 className="animate-spin" />
                        ) : (
                          <IconCheck />
                        )}
                        {manageForm.isSubmitting ? "Creating..." : "Create a Room"}
                      </button>
                    </div>
                  );
                })}
              </form> */}

      <div className="m-16">
        <h1 className="text-center font-bold text-3xl">Manage Rooms</h1>
        <div className="container mx-auto text-black w-full shadow-xl">
          {loading ? (
            <p className="text-center text-black text-2xl font-bold">
              Loading... Please Wait
            </p>
          ) : (
            <table className="mt-4 p-10 w-full">
              <thead className="border border-violet-700 text-white bg-violet-900 ">
                <tr>
                  <th className="p-2">Room Id</th>
                  <th className="p-2">Room Title</th>
                  <th className="p-2">Created By</th>
                  <th className="p-2">Created At</th>
                  <th className="p-2">Views</th>
                  <th className="p-2">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-slate-200">
                {roomList.map((room) => {
                  return (
                    <tr key={room._id} className="border border-slate-800">
                      <td className="p-2 border border-gray-400">{room._id}</td>
                      <td className="p-2 border border-gray-400">
                        {room.title}
                      </td>
                      <td className="p-2 border border-gray-400">
                        {room.name}
                      </td>
                      <td className="p-2 border border-gray-400">
                        {room.createdAt}
                      </td>
                      <td className="p-2 border border-gray-400">
                        <Link
                          className="bg-green-500 flex w-fit text-white px-2 py-1 rounded-full"
                          href={"/host/" + room._id}
                        >
                          Enter to the Room
                          <IconTrash />
                        </Link>
                      </td>
                      <td className="p-2 border border-gray-400">
                        <button
                          className="bg-red-500 flex w-fit text-white px-2 py-1 rounded-full"
                          onClick={() => {
                            deleteRoom(room._id);
                          }}
                        >
                          Delete this Room
                          <IconTrash />
                        </button>
                      </td>
                      {/* <td className='p-2 border border-gray-300'>
                          <Link href={ '/manage-room'+user._id } className='bg-blue-500 text-white block w-fit px-2 py-1 rounded-full'>
                            <IconPencil/>
                          </Link>
                          
                        </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageRoom;
