import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../redux/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ If user came from a protected route like /carts, redirect them there after login
  const from = location.state?.from || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      await dispatch(loginUser(loginData)).unwrap();
      alert("Login successful!");
      navigate(from, { replace: true }); // ✅ Redirect back to where they came from
    } catch (error) {
      alert(error || "User not registered or invalid credentials!");
      // ❌ Stay on login page if login fails
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="shadow-md w-96 bg-white !p-6 rounded-lg"
      >
        <h1 className="text-2xl font-semibold !mb-4 text-center">Sign In</h1>

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
          Sign In
        </button>

        <p className="text-sm text-center">
          Don’t have an account?
          <Link
            to="/register"
            className="text-blue-600 hover:underline !ml-1"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
