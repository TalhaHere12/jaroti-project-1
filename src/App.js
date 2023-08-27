import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import AddUser from "./components/users/AddUser";
import Categories from "./components/categories/Categories";
import Allusers from "./components/users/Allusers";
import './lib/fontawesome-free-6.2.0-web/css/all.min.css';
import './App.css';
import Edituser from "./components/users/Edituser";
// import Allusers from "./components/users/Allusers
function App() {
  const [cartItems , setCartItems] = useState([])
    const addToCart = (product) => {
        setCartItems([...cartItems,product])
    }
  return (
    <div>
    <Router>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300&family=Catamaran&display=swap');
      </style>
      <Routes>
        <Route exact path="/" element={<Home addToCart={addToCart} cartItems={cartItems}/>} />
        <Route exact path="/categories" element={<Categories  />} />
        <Route exact path="/cart-main" element={<Cart cartItems={cartItems}/>} />
        <Route exact path="/wishlist" element={<Wishlist  />} />
        <Route exact path="/adduser" element={<AddUser  />} />
        <Route exact path="/allusers" element={<Allusers/>} ></Route>
        <Route exact path="/edituser/:email" element={<Edituser/>}></Route>
      </Routes>
    </Router>
  </div>
  );
}
export default App;