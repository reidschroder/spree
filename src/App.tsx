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
import SendEmail from './components/SendEmail/SendEmail';
import ProductPage from './components/ProductPage/ProductPage';
import Home from './components/Home/Home';
import CartCheckout from './components/Cart/CartCheckout';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import FeaturedProductsList from './components/FeaturedProductsList/FeaturedProductsList';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
import OutOfBounds from './components/OutOfBounds/OutOfBounds';



function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/cart" element={<CartCheckout/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path="/product/:id" element={<ProductPage/>}/>
          <Route path="/orderconfirmation" element={<OrderConfirmation/>}/>
          <Route path="/*" element={<OutOfBounds/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
