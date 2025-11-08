import React from 'react'
import AddToCart from './addToCart'

const Header = () => {
  return (
    <>
      <header className="header">
    <div className="logo">ShopEase</div>

    <nav className="nav-links">
      {/* <a href="/">Home</a> */}
      <a href="/">Products</a>
      {/* <a href="#">Contact</a> */}
    </nav>
   <AddToCart/>
  </header>
    </>
  )
}

export default Header
