import React from "react";
import AddToCart from "./addToCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userSlice"; // ✅ ensure you have setLoggedUser action

const Header = () => {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.user);

  // ✅ Sync Redux state with localStorage when page loads or refreshes
  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  //   if (storedUser) {
  //     dispatch(setLoggedUser(storedUser));
  //   }
  // }, [dispatch]);

  // ✅ Handle Logout
  const handleLogout = () => {
    if(confirm("Are You Sure for logout?")){
      dispatch(logoutUser());
    }
  };

  return (
    <header className="header flex justify-between items-center px-5 py-3 shadow-md">
      <Link to="/" className="logo text-2xl font-semibold">
        ShopEase
      </Link>

      <nav className="nav-links flex gap-5">
        <Link to="/">Products</Link>
      </nav>

      <div className="flex items-center gap-5">
        <AddToCart />
        {loggedUser && <p className="font-medium">{loggedUser.name}</p>}
        {loggedUser ? (
          <button
            onClick={handleLogout}
            className="!px-5 !py-1 rounded bg-red-500 hover:bg-red-600 text-white cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="!px-5 !py-1 rounded bg-green-500 hover:bg-green-600 text-white"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
