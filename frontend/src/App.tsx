import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/navbar';
import Product from './Components/product';
import './App.css';
import AllRoute from './Routes/AllRoutes';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

    <Navbar />
    {/* <Product/> */}
    <AllRoute/>
    </Provider>
    </div>
  );
}

export default App;
