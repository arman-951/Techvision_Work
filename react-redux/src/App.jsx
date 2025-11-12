import "./App.css";
import {  Route, Routes } from "react-router-dom";
import ProductCards from "./components/ProductCards";
import Home from "./components/Home";
import Header from "./components/Header";
import CartList from "./components/CartList";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
 
  return (
    <><Header/>
      <Routes>
        <Route path="/" element={<ProductCards/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/carts" element={<CartList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
};
export default App;
