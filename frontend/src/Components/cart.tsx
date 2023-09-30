import React, { useState, useEffect } from 'react';
import "./cart.css"
import { useSelector } from 'react-redux';

function Cart() {
//   const [cart, setCart] = useState([]);
const cart=useSelector((state:any)=>state.receipe)  
console.log("store",cart)


  return (
    <div className="cart-page">
      {/* <h1>Your Cart</h1> */}
      {cart.length === 0 ? (
        <h3 className='p1'>No products added to the cart.</h3>
      ) : (
        <div className="cart-list">
          {cart.map((item:any) => (
            <div className="cart-item" key={item.id}>
            <img src={item.image} alt="hey" />

              <h2>Name: {item.title}</h2>
              <p>Price: ₹{item.price}</p>
              <p>category: {item.category}</p>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        

        <div className="card">
   <a className="card1" href="#">
          
          <p>Estimated Delivery Date: {getEstimatedDeliveryDate()}</p>
    <div className="go-corner" >
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
</div>
      )}
    </div>
  );
}

// Function to get an estimated delivery date (you can implement your own logic here)
const getEstimatedDeliveryDate = () => {
  const currentDate = new Date();
  // Assuming a delivery time of 3 days
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(currentDate.getDate() + 3);
  return deliveryDate.toDateString();
};

export default Cart;