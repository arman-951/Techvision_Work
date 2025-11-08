import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  // const selector=useSelector((state)=>state.cart);
  // console.log(selector.value)

  const cartCount = useSelector((state) => state.carts.items);
  console.log(cartCount);
  return (
    <>
      <div className="cart-container">
        <Link to="/carts" className="cart-icon">
          🛒
        </Link>

        <span className="cart-count">{cartCount?.length || 0}</span>
      </div>
    </>
  );
};

export default AddToCart;
