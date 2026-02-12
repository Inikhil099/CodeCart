import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupimg from "../assets/register.webp";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <div className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          {" "}
          {/* form here */}
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-extrabold  text-[#14A9A6]">
              CodeCart
            </h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey There! 👋</h2>
          <p className="text-center mb-6">Enter Your Details To Signup</p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter Your Password"
            />
          </div>
          <button className="w-full bg-black hover:cursor-pointer text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition">
            Sign Up
          </button>
          <p className="mt-6 text-center text-sm">
            Already have an accound ?
            <Link to={"/login"} className="text-blue-500">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={signupimg}
            alt="signup"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
