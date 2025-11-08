import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { addItemToCart, removeItemFromCart } from "../redux/cartSlice";

const ProductCards = () => {
  const dispatch = useDispatch();

  const { product,loading, error } = useSelector((state) => state.products);
  const cartSelector=useSelector((state)=>state.carts.items)
  console.log(cartSelector.length)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center mt-10 text-lg font-semibold">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  }

  return (
    <div className="product-container">
      {product?.map((item, index) => (
        <div key={index} className="product-card">
          <div className="product-image">
            <img
              src={
                item.images && item.images.length > 0
                  ? item.images[0]
                  : "https://www.neolight.in/wp-content/uploads/2022/01/iphone-13-pro-gold.jpg"
              }
              alt={item.title}
            />
          </div>

          <div className="product-info">
            <h3 className="product-title">{item.title}</h3>
            <p className="product-category">{item.brand}</p>

            <div className="price">
              <span className="current-price">${item.price}</span>
              <span className="old-price">$1099</span>
            </div>
            {
              cartSelector.find((cartItem)=>cartItem.id===item.id)
              ?
              <button onClick={()=>dispatch(removeItemFromCart(item))} className="add-to-cart !bg-red-600 hover:!bg-red-700">Remove From Cart</button>
              :
              <button onClick={()=>dispatch(addItemToCart(item))} className="add-to-cart">Add to Cart</button>
            }
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
