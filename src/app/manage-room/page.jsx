"use client";
import {
  IconCheck,
  IconDoorEnter,
  IconLoader3,
  IconTrash,
} from "@tabler/icons-react";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";

const ManageSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  title: Yup.string().required("Title is required"),
});

const ManageRoom = () => {
  const router = useRouter();

  const [roomList, setRoomList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRoomList = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:5000/room/getall");
    console.log(res.data);
    setRoomList(res.data);
    setLoading(false);
  };

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
          resetForm();
          fetchRoomList();
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || "Something went wrong!");
          setSubmitting(false);
        });
    },
    validationSchema: ManageSchema,
  });

  useEffect(() => {
    fetchRoomList();
  }, []);

  

  const deleteRoom = async (id) => {
    if (!confirm("Are you sure you want to delete this room")) return;

    const res = await axios.delete(`http://localhost:5000/room/delete/${id}`);
    if (res.status === 200) {
      fetchRoomList();
      toast.success("Room Deleted Successfull");
    } else {
      toast.error("Failed to delete room");
    }
  };

  return (
    <div className="bg-cover min-h-screen bg-violet-300 text-black pt-4 p-8">
      <h1 className="text-5xl font-bold text-center text-gray-900 dark:text-neutral-400 ">
        Create a Room for the Poll
      </h1>
      <p className="text-xl p-1 font-semibold text-center text-gray-900 dark:text-neutral-400 ">
        Build Your Poll Room in Just a Few Clicks
      </p>
      {/* <button
        className="text-2xl font-bold mt-8 text-gray-700 text-center bg-white px-4 py-2 rounded-lg"
        type="submit"
        onClick={addNewRoom}
      >
        <IconSquarePlus />
        Create Room
      </button> */}
      <div className="bg-gray-200 w-full mt-6 p-8 rounded-lg flex ">
        <div className="text-gray-800 dark:text-neutral-400  w-[45rem] p-8">
          <form onSubmit={manageForm.handleSubmit}>
            <div className="mx-auto items-center rounded-xl p-4 ">
              <h1 className="font-bold text-4xl mb-4 text-center">
                Create Room
                <p className="text-lg font-semibold p-1">
                  Ready to Host? Create a Room and Connect with Your Audience...
                </p>
                <img src="/Vote.png" alt="Poll" className="rounded-lg" />
              </h1>
              <label className="font-semibold text-lg">
                Give some Title to the room:
                <input
                  id="title"
                  type="text"
                  placeholder="Title..."
                  className="rounded-lg px-3 py-2 border block w-full mb-4 bg-gray-100"
                  onChange={manageForm.handleChange}
                  value={manageForm.values.title}
                />
              </label>
              {manageForm.errors.title && manageForm.touched.title && (
                <p className=" text-xs text-red-600 mt-2" id="title-error">
                  {manageForm.errors.title}
                </p>
              )}
              <label className="font-semibold text-lg">
                Creator's name:
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name..."
                  className="rounded-lg px-3 py-2 border block w-full bg-gray-100"
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
                className="bg-green-600 text-white px-2 py-2 rounded-xl mt-4 flex items-center justify-center w-full gap-2"
                type="submit"
                disabled={manageForm.isSubmitting}
              >
                {manageForm.isSubmitting ? (
                  <IconLoader3 className="animate-spin" />
                ) : (
                  <IconCheck />
                )}
                {manageForm.isSubmitting ? "Creating..." : "Created a Room"}
              </button>
            </div>
          </form>
        </div>
        <div className="w-[55rem] bg-gray-200">
          <img src="/ManageRoom.png" alt="Poll" className="w-full h-full" />
        </div>
      </div>
      {/* Manage Room */}
      <div className="mt-12">
        <h1 className="text-center text-gray-900 dark:text-neutral-400 font-bold text-4xl">
          Manage Rooms
        </h1>

        <p className="text-lg text-center font-semibold p-2">
          Quick Access to Your Poll Room Details. View, Enter, or Delete Your
          Poll Room
        </p>
        <div className="container mx-auto text-black w-full shadow-xl">
          {loading ? (
            <p className="text-center text-black text-6xl text-2xl font-bold mt-4">
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
              <tbody className="bg-gray-100 text-center">
                {roomList.map((room) => {
                  return (
                    <tr key={room._id} className="border border-gray-200">
                      <td className="p-2 border border-gray-400">{room._id}</td>
                      <td className="p-2 border border-gray-400">
                        {room.title}
                      </td>
                      <td className="p-2 border border-gray-400">
                        {room.name}
                      </td>
                      <td className="p-2 border border-gray-400">
                        {new Date(room.createdAt).toDateString()}
                      </td>
                      <td className="p-2 border border-gray-400">
                        <Link
                          className="bg-violet-500 flex w-fit text-white px-2 py-1 rounded-full mx-auto gap-2"
                          href={"/host/" + room._id}
                        >
                          Enter to the Room
                          <IconDoorEnter />
                        </Link>
                      </td>
                      <td className="p-2 border border-gray-400">
                        <button
                          className="bg-red-500 flex w-fit text-white px-2 py-1 rounded-full mx-auto gap-2"
                          onClick={() => {
                            deleteRoom(room._id);
                          }}
                        >
                          Delete this Room
                          <IconTrash />
                        </button>
                      </td>
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
