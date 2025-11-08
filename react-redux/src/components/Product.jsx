import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../redux/slice'

const Product = () => {
    const dispatch=useDispatch()
  return (
    <>
      {/* PRODUCT SECTION */}
  <section className="product-section">
    <div className="product-image">
      <img src="https://in.static.webuy.com/product_images/Phones/Phones%20iPhone/SAPPI13P256GSBUNLC_l.jpg" alt="Product" />
    </div>

    <div className="product-details">
      <h1 className="product-title">Apple iPhone 13 Pro</h1>
      <p className="product-category">Category: Smartphones</p>
      <p className="product-description">
        Experience next-level smartphone performance with the Apple iPhone 13 Pro.
        Featuring the A15 Bionic chip, advanced triple-camera system, and a stunning Super Retina XDR display.
      </p>

      <div className="price">
        <span className="current-price">$999</span>
        <span className="old-price">$1099</span>
      </div>

      <div className="buttons">
        <button onClick={()=>dispatch(addItem())} className="btn add-cart">Add to Cart</button>
        <button onClick={()=>dispatch(removeItem())} className="btn buy-now">Remove From Cart</button>
      </div>
    </div>
  </section>
    </>
  )
}

export default Product
