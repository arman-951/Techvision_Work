import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/userSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email, password };

    try {
      await dispatch(registerUser(userData)).unwrap();
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert(error || "User already exists or registration failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="shadow-md w-96 bg-white !p-6 rounded-lg"
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">Sign Up</h1>

        <div className="!mb-4">
          <label className="block !mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md !px-3 !py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="!mb-4">
          <label className="block !mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md !px-3 !py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="!mb-4">
          <label className="block !mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md !px-3 !py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white w-full !py-2 rounded-md !mb-3"
        >
          Sign Up
        </button>

        <p className="text-sm text-center">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 hover:underline !ml-1"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
