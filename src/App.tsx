import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Product from './components/Product/Product';
import Register from './components/Register/Register';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
       <BrowserRouter>
        <Routes>
          <Route path="/data/register" element={<Register/>}/>
          <Route path="/data/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
