"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [active, setActive] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
        { passowrd: password, email: email }
      );
      console.log("response from segment", response.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const Login = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        { passowrd: password, email: email }
      );
      console.log("response from segment", response.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  //updated login and register page to show active tab based on state of 'active
  return (
    <div className=" bg-green-400 h-screen flex flex-col gap-10 justify-center items-center">
      <div className=" flex gap-0 justify-center items-center">
        <button
          onClick={() => setActive("Login")}
          className={` border-black border hover:bg-gray-400 px-3 py-1 w-fit flex gap-0 rounded-l-full ${
            active === "Login" ? "bg-black font-bold text-white" : "text-black"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActive("Register")}
          className={`${
            active === "Register"
              ? "bg-black font-bold text-white"
              : "text-black"
          } border-black border hover:bg-gray-400 px-3 py-1 w-fit flex gap-0 rounded-r-full`}
        >
          Register
        </button>
      </div>
      {active === "Login" && (
        <div className=" py-10 px-5 w-[400px] h-auto bg-white border-black rounded-md">
          <p className=" text-3xl font-bold text-center">Login</p>
          <div className=" flex flex-col gap-5 py-5">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className=" border-black border px-3 py-1"
            />
            <input
              type="password"
              placeholder="Password"
              className=" border-black border px-3 py-1"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={Login}
              className=" bg-black text-white px-3 py-1"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      )}

      {active === "Register" && (
        <div className=" py-10 px-5 w-[400px] h-auto bg-white border-black rounded-md">
          <p className=" text-3xl font-bold text-center">Register</p>
          <div className=" flex flex-col gap-5 py-5">
            <input
              type="text"
              placeholder="Email"
              className=" border-black border px-3 py-1"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              className=" border-black border px-3 py-1"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={register}
              className=" bg-black text-white px-3 py-1"
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
