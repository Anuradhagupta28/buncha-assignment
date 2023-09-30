import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/navbar';
import Product from './Components/product';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Product/>
    </div>
  );
}

export default App;
