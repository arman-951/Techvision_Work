import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearCart,
  decrementQuantity,
  incrementQuantity,
  orderPlaced,
  removeItemFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  // store quantity per item using an object { [id]: count }
  //   const [quantities, setQuantities] = useState({});
  const carts = useSelector((state) => state.carts.items);
  console.log(carts);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleOrder=()=>{
    dispatch(orderPlaced());
    navigate('/')
  }

  // calculate total based on item price * quantity
  const total = carts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <>
      <div className="cart-list-container">
        <h2 className="cart-list-title">Your Cart</h2>

        <div className="cart-list-items">
          <div className="flex justify-between items-center font-semibold">
            <h2>Your Items</h2>
            <p>
              {carts.length} {carts.length > 1 ? "items" : "item"}
            </p>
          </div>
          {/* <!-- Cart Item 1 --> */}
          {carts.length > 0 ? (
            carts.map((item) => (
              <div key={item.id} className="cart-list-item">
                <img
                  src={item.images}
                  alt="Product"
                  className="cart-list-item-img"
                />
                <div className="cart-list-item-details">
                  <h3 className="cart-list-item-name">{item.title}</h3>
                  <p className="cart-list-item-category">{item.brand}</p>
                  <p className="cart-list-item-price">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <div className="cart-list-item-actions">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="quantity-btn"
                  >
                    −
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="quantity-btn"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeItemFromCart(item.id))}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="font-bold border border-dashed !px-5 !py-3 text-center">
              Cart is Empty
            </p>
          )}
        </div>

        {carts.length>0 && <div className="flex justify-between items-end">
         
          <div className="cart-summary">
            <h3>
              {" "}
              Total: <span>${total.toFixed(2)}</span>
            </h3>
            <button onClick={handleOrder} className="checkout-btn">Place Order</button>
          </div>
           <div className="cart-summary">
            <button onClick={()=>dispatch(clearCart())} className="checkout-btn !bg-red-600">Clear Cart</button>
          </div>
        </div>}
      </div>
    </>
  );
};

export default CartList;
