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


function App() {
  return (
    <div className="App">
      <Nav />
      <Cart />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
