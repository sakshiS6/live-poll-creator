"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import React from "react";
import {
  IconCheck,
  IconLoader3
} from "@tabler/icons-react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .matches(/[a-z]/, "Lowercase letter is required")
    .matches(/[A-Z]/, "Uppercase letter is required")
    .matches(/[0-9]/, "number is required")
    .matches(/\W/, "Special Character is required")
    .min(8, "Minimum 8 characters requied"),
  confirmPassword: Yup.string()
    .required("Please Confirm Password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

const Signup = () => {
  const router = useRouter();

  //intialization formik
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      axios
        .post("http://localhost:5000/user/add", values)
        .then((result) => {
          toast.success("User Registered successfully");
          resetForm();
          router.push("/manage-room");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || "Something went wrong");
          setSubmitting(false);
        });
      //send values to backend
    },
    validationSchema: SignupSchema,
  });
  return (
    <div className="flex bg-violet-300 h-screen">
    <div
    className="bg-cover bg-center flex items-center justify-center w-full m-20 ml-32"
    style={{backgroundImage:"url('login-image.png')"}}
    >
      
    </div>
    <div className="flex justify-start items-center w-full mr-28">
      <form
        onSubmit={signupForm.handleSubmit}
        className="justify-center items-center"
      >
        <div className="bg-white border-1 border-black  shadow-2xl  px-20 py-10 rounded-lg ">
          <h1 className="text-4xl text-black font-bold text-center">Signup</h1>
          <p className="text-lg font-semibold text-violet-700 text-center mt-2">
            to your account
          </p>
          <div className="mt-6">
            <label className="block font-bold">Name:</label>
            <input
              className="rounded-lg bg-gray-300 px-2 py-1 w-full"
              id="name"
              type="text"
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
            />
            {signupForm.errors.name && signupForm.touched.name && (
              <p className=" text-xs text-red-600 mt-2" id="name-error">
                {signupForm.errors.name}
              </p>

            )}
            <label className="block font-bold mt-4">Email:</label>
            <input
              className="rounded-lg bg-gray-300 px-2 py-1 w-full"
              id="email"
              type="email"
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
            />
            {signupForm.errors.email && signupForm.touched.email && (
              <p className=" text-xs text-red-600 mt-2" id="email-error">
                {signupForm.errors.email}
              </p>

            )}
            <label className="block font-bold mt-4">Password:</label>
            <input
              className="rounded-lg bg-gray-300 px-2 py-1 w-full"
              id="password"
              type="password"
              onChange={signupForm.handleChange}
              value={signupForm.values.password}
            />
            {signupForm.errors.password && signupForm.touched.password && (
              <p className=" text-xs text-red-600 mt-2" id="password-error">
                {signupForm.errors.password}
              </p>

            )}
            <label className="block font-bold mt-4">Confirm Password:</label>
            <input
              className=" rounded-lg bg-gray-300 px-2 py-1 w-full"
              id="confirmPassword"
              type="password"
              onChange={signupForm.handleChange}
              value={signupForm.values.confirmPassword}
            />
            {signupForm.errors.confirmPassword && signupForm.touched.confirmPassword && (
              <p className=" text-xs text-red-600 mt-2" id="confirmPassword-error">
                {signupForm.errors.confirmPassword}
              </p>

            )}
            <button
            className="w-full shadow-xl mt-8 py-3 px-4 inline-flex justify-center bg-violet-700 items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-black text-white"
              type="submit"
              disabled={signupForm.isSubmitting}
            >
              {signupForm.isSubmitting? <IconLoader3 className="animate-spin"/> :<IconCheck/>}
              {signupForm.isSubmitting? 'Submitting...' :'Sign Up'}
            </button>
            <p className="text-center mt-4">
              Already have an account?
              <Link href="/login" className="text-blue-700 ">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup;