import React, { useState } from "react";


import HeaderTop from "./cart-sub-components/HeaderTop";
import HeaderCenter from "./cart-sub-components/HeaderCenter";
import HeaderBottom from "./cart-sub-components/HeaderBottom";
import Footer from "./cart-sub-components/Footer";

import "./cart-sub-components/styles/Cart.css";
import { Link } from 'react-router-dom';

function Cart({cartItems}) { 

  
  const [cartProducts ,setCartItems] = useState(cartItems)
  const [selectedShippingOption ,setSlectedShippingOption] = useState("flatRate")

  if(cartProducts.length > -1){
    cartItems = cartProducts
  }


  const updateQuantity = (item , newQuantity) =>{
    const updatedCartItems = cartProducts.map(cartItem => {
      if(cartItem.id === item.id)
      {
        cartItem.quantity = parseInt(newQuantity)
      }
      return cartItem
    })
    setCartItems(updatedCartItems)
  }

  const calculatePriceForEachItem = (item) => {
    return item.price * item.quantity
  }

  const calculatePriceForAllItemsWithoutShipping = () => {
    const subtotal = cartProducts.reduce((total ,item ) =>  total + parseFloat(item.price * item.quantity), 0)
    return subtotal
  }

  const calculatePriceForAllItemsWithShipping = () => {
    const subtotal = cartProducts.reduce((total ,item ) =>  total + parseFloat(item.price * item.quantity), 0)
    var shippingCharges = 0.00
    if(selectedShippingOption === "flatRate"){
      shippingCharges = 10.00
    }else if(selectedShippingOption === "localPickup" ){
      shippingCharges = 5.00
    }
    return subtotal + shippingCharges
  }

  const removeProduct = (item) => {
    const updatedCartItems = cartProducts.filter(cartItem => cartItem.id !== item.id)
    setCartItems(updatedCartItems)
  }

  console.log(cartProducts)

   if(cartProducts.length !== 0 ){

   return (
     <div className="Cart-component">
       <HeaderTop />
       <HeaderCenter />
       <HeaderBottom />

      

       <div className="cart-items">

         <div className='cart-items-heading'>
           <div className="cart-items-heading-product">Product</div>
           <div className="cart-items-heading-price">Price</div>
           <div className="cart-items-heading-quantity">Quantity</div>
           <div className="cart-items-heading-subtotal">Subtotal</div>
         </div>

       {cartProducts.map((item) => {
       const image = './images/' + item.img;
       return (
         <div key={item._id} className="cart-item">
           <img src={image} alt={item.title} />
           <div className="cart-item-details">
             <h3>{item.title}</h3>
             <p>{item.price}</p>
           </div>
           <div className="quantity-button">
             <button
               className="product-increament"
               onClick={() => updateQuantity(item , item.quantity + parseInt(1))}
             >
               +
             </button>
             <div className="product-quantity">
               {item.quantity}
             </div>
             <button
               className="product-decreament"
               onClick={() => updateQuantity(item , item.quantity > 1 ? item.quantity -1 : 1 )}
             >
               -
             </button>
           </div>
           <div className="cart-item-total">
             <p>${calculatePriceForEachItem(item)}</p>
           </div>
           <div className="cart-item-remove"
            onClick={() => removeProduct(item)} >
             <i className="fa-solid fa-x" ></i>
           </div>
         </div>
       );
     })}

       </div>

       <div className="cart-totals-card">
         <div className="cart-totals-card-heading">
           <h2>Cart totals</h2>
         </div>
         <div className="cart-totals-card-subtotals">
           <div className="cart-totals-card-subtotals-heading">Subtotal</div>
           <div className="cart-totals-card-subtotals-price">${calculatePriceForAllItemsWithoutShipping()}</div>
         </div>
         <div className="cart-totals-card-shipping">
           <div className="cart-totals-card-shipping-heading">Shipping</div>
           <div className="cart-totals-card-shipping-details">
             <div className="cart-totals-card-shipping-flat">
               <input type='radio'
                        name='shippingCharges'
                        value={"flatRate"}
                        onChange={() => setSlectedShippingOption("flatRate")}
                        />Flat rate: $10.00
             </div>
             <div className="cart-totals-card-shipping-local">
               <input type='radio' 
                      name='shippingCharges' 
                      value={"localPickup"}
                      onChange={() => setSlectedShippingOption("localPickup")}
                      />Local pickup: $5.00
             </div>
             <div className="cart-totals-card-shipping-discription">
               Shipping options will be updated<br />during checkout.
             </div>
             <div className="cart-totals-card-shipping-calculate" >
               <i className="fa-solid fa-truck-fast"></i>CALCULATE SHIPPING
             </div>
           </div>
           <div className="cart-totals-card-total">
             <div className="cart-totals-card-total-heading">Total</div>
             <div className="cart-totals-card-total-price">${calculatePriceForAllItemsWithShipping()}</div>
           </div>
         </div>
         <div className="cart-totals-card-button">
             PROCEED TO CHECKOUT
         </div>
       </div>

       <Footer />
     </div>
   );
   }else{

    return (
      <div className="Cart-componenet">
        <HeaderTop />
        <HeaderCenter />
        <HeaderBottom />
  
        <div className="cart-empty-message">
          <p>your Cart is currently empty</p>
          <Link to="../" className="browse-products-button">Browse Products</Link>
        </div>
  
        <Footer />
      </div>
    );
     }
}

export default Cart;
