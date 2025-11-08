import React from 'react'
import Product from './Product';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { clearAllItems } from '../redux/slice';

const Home = () => {
     const dispatch=useDispatch();
  return (
    <>
      <button onClick={()=>dispatch(clearAllItems())} className="btn bg-red-600 text-white">
        Clear Cart
      </button>
      <Product />
    </>
  )
}

export default Home
