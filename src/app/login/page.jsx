"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import React from "react";
import { IconCheck, IconLoader3 } from "@tabler/icons-react";
import Link from "next/link";

const LoginSchema = Yup.object().shape({
  
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .matches(/[a-z]/, "Lowercase letter is required")
    .matches(/[A-Z]/, "Uppercase letter is required")
    .matches(/[0-9]/, "number is required")
    .matches(/\W/, "Special Character is required")
    .min(8, "Minimum 8 characters requied"),
});

const Login = () => {
  //intialization formik
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      
    },
    oonSubmit: (values, { resetForm, setSubmitting }) => {
      axios
        .get("http://localhost:5000/user/getall", values)
        .then((result) => {
          toast.success("Login successfully");
          resetForm();
          router.push("/manage-room");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || "Something went wrong");
          setSubmitting(false);
        });
    },
    validationSchema: LoginSchema,
  });

  return (
    <div className="flex bg-violet-300 h-screen">
      <div
        className="bg-cover bg-center flex items-center justify-center w-full m-20 ml-32"
        style={{ backgroundImage: "url('login-image.png')" }}
      >
      </div>

      <div className="flex justify-start items-center w-full mr-28">
        <form
          onSubmit={loginForm.handleSubmit}
          className="justify-center items-center"
        >
          <div className="bg-white border-1 border-black  shadow-2xl  px-20 py-10 rounded-lg ">
            <h1 className="text-4xl text-black font-bold text-center">Login</h1>
            <p className="text-lg font-semibold text-violet-700 text-center mt-2">
              to your account
            </p>
            <div className="mt-6">
              <label className="block font-bold">Email:</label>
              <input
                className="rounded-full bg-gray-300 px-2 py-1 w-full"
                id="email"
                type="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
              />
              {loginForm.errors.email && loginForm.touched.email && (
                  <p className=" text-xs text-red-600 mt-2" id="name-error">
                    {loginForm.errors.email}
                  </p>
                )}
              <label className="block font-bold mt-4">Password:</label>
              
              
              <input
                className=" rounded-full bg-gray-300 px-2 py-1 w-full"
                id="password"
                type="password"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
              />
              <Link
                      className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                      href="/forgetPassword"
                    >
                      Forgot password?
              </Link>
              <button
                // className="bg-violet-700 block mt-4 text-white shadow-xl w-full rounded-lg font-xl font-bold px-2 py-2 w-fit"
                className="w-full mt-4 shadow-xl rounded-lg font-xl font-bold px-2 py-2 inline-flex justify-center items-center gap-x-2 border border-transparent bg-violet-700 text-white hover:bg-violet-800 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                type="submit"
                disabled={loginForm.isSubmitting}
              >
                {loginForm.isSubmitting ? (
                    <IconLoader3 className="animate-spin" />
                  ) : (
                    <IconCheck />
                  )}
                  {loginForm.isSubmitting ? "Submitting..." : "Log In"}{" "}
              </button>
              <p className="text-center mt-4">
                Not yet registered?
                <a href="/signup" className="text-blue-700 ">
                  SignUp
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
