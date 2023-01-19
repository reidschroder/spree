import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Product from './components/Product/Product';
import Register from './components/Register/Register';
import Nav from './components/Nav/Nav';
import DarkMode from './components/DarkMode/DarkMode';
import ProductList from './components/ProductList/ProductList';
import Address from './components/Address/Address';
import ProductPage from './components/ProductPage/ProductPage';
import Home from './components/Home/Home';
import CartCheckout from './components/Cart/CartCheckout';


function App() {
  return (
    <div className="App">
      <Nav />
      {/* <ProductList/> */}
      <ProductPage/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/cart" element={<CartCheckout/>}/>
          <Route path="/address" element ={<Address/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
