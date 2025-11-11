import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, removeUser } from "../features/userSlice"; // ✅ adjust path

const GetUser = () => {
  const dispatch = useDispatch();

  // ✅ Extract state from Redux
  const { users, loading, error } = useSelector((state) => state.users);

  // ✅ Fetch users when component mounts
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // ✅ Handle loading and error states
  if (loading) return <p className="text-center mt-5">Loading users...</p>;
  if (error)
    return <p className="text-center mt-5 text-red-500">Error: {error}</p>;

  return (
    <div className="shadow-md p-5 w-3/4 mx-auto overflow-auto mt-5 rounded-md">
      <h1 className="font-semibold text-lg border-b-2 border-green-400 mb-3 pb-1">
        Users List
      </h1>

      {users && users.length > 0 ? (
        <table className="w-full border-collapse">
          <thead className="bg-yellow-100">
            <tr>
              <th className="py-2 px-3 border">S.No.</th>
              <th className="py-2 px-3 border">Name</th>
              <th className="py-2 px-3 border">Email</th>
              <th className="py-2 px-3 border">Phone</th>
              <th className="py-2 px-3 border">Gender</th>
              <th className="py-2 px-3 border">City</th>
              <th className="py-2 px-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="text-center hover:bg-gray-50">
                <td className="py-2 px-3 border">{index+1}</td>
                <td className="py-2 px-3 border text-nowrap">{user.name}</td>
                <td className="py-2 px-3 border text-nowrap">{user.email}</td>
                <td className="py-2 px-3 border">{user.phone}</td>
                <td className="py-2 px-3 border">{user.gender}</td>
                <td className="py-2 px-3 border">{user.city}</td>
                <td className="py-2 px-3 border">
                  <button
                    onClick={() => dispatch(removeUser(user.id))}
                    className="bg-red-500 hover:bg-red-600 text-white cursor-pointer px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-600 mt-3">No users found.</p>
      )}
    </div>
  );
};

export default GetUser;
