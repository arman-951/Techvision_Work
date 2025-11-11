import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // ✅ Import UUID

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.gender ||
      !formData.city
    ) {
      alert("Please fill all fields!");
      return;
    }

    // ✅ Get existing users (if any)
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Add new user with UUID
    const newUser = {
      id: uuidv4(), // ✅ unique ID for each user
      ...formData,
    };

    const updatedUsers = [...existingUsers, newUser];

    // ✅ Save updated user list to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log("User Registered:", newUser);
    alert("User Registered Successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      city: "",
    });
  };

  return (
    <div className="shadow-md p-5 w-96 mx-auto mt-5 rounded-lg">
      <h1 className="text-center text-xl font-semibold mb-5">
        Registration Form
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="font-semibold w-1/3">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="px-2 py-1 border border-gray-300 rounded w-2/3 outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="font-semibold w-1/3">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="px-2 py-1 border border-gray-300 rounded w-2/3 outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div className="flex justify-between items-center">
          <label htmlFor="phone" className="font-semibold w-1/3">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your 10-digit number"
            className="px-2 py-1 border border-gray-300 rounded w-2/3 outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Gender */}
        <div className="flex justify-between items-center">
          <label className="font-semibold w-1/3">Gender</label>
          <div className="flex gap-4 w-2/3">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
        </div>

        {/* City */}
        <div className="flex justify-between items-center">
          <label htmlFor="city" className="font-semibold w-1/3">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            className="px-2 py-1 border border-gray-300 rounded w-2/3 outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center mt-5">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 cursor-pointer rounded hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
