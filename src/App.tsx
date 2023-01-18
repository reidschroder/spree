import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Product from './components/Product/Product';
import Register from './components/Register/Register';
import Nav from './components/Nav/Nav';
import Cart from './components/Cart/Cart';
import DarkMode from './components/DarkMode/DarkMode';
import ProductList from './components/ProductList/ProductList';
import Checkout from './components/Checkout/Checkout';
import Address from './components/Address/Address';


function App() {
  return (
    <div className="App">
      <Nav />
      {/* <ProductList/> */}
      <Product></Product>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/home" element={<ProductList/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/address" element ={<Address/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
