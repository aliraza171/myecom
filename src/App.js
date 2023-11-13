import React from 'react';
import './App.css';
import Home from './Component/Home';
// import Navbar from './Component/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Products from './Component/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
