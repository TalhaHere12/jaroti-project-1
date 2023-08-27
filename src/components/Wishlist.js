import React, { useState , useEffect } from "react";

import HeaderTop from "./wishlist-sub-components/HeaderTop";
import HeaderCenter from "./wishlist-sub-components/HeaderCenter";
import HeaderBottom from "./wishlist-sub-components/HeaderBottom";
import Footer from "./wishlist-sub-components/Footer";

import "./wishlist-sub-components/styles/Wishlist.css";
import { Link , useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate;

  // console.log(products);
  // if(products != 0 ){


  // return (
  //   <div className="Wishlist-componenet">
  //     <HeaderTop />
  //     <HeaderCenter />
  //     <HeaderBottom />
  //     <div className="wishlist-items">

  //       <div className='wishlist-items-heading'>
  //         <div className="wishlist-items-heading-product">Product</div>
  //         <div className="wishlist-items-heading-price">Price</div>
  //         <div className="wishlist-items-heading-quantity">Quantity</div>
  //         <div className="wishlist-items-heading-subtotal">Subtotal</div>
  //       </div>

  //       {products.map((item) => {
  //     const image = './images/' + item.img;
  //     return (
  //         <div key={item._id} className="wishlist-item">
  //           <img src={image} alt={item.title} />
  //           <div className="wishlist-item-details">
  //             <h3>{item.title}</h3>
  //             <p>{item.price}</p>
  //           </div>

  //           <div className="wishlist-item-remove">
  //             <i className="fa-solid fa-x"></i>
  //           </div>
  //         </div>

  //       )})}

  //     </div>

  //     <Footer />
  //   </div>
  
  // );
  // }else{

    return (
      <div className="Cart-componenet">
        <HeaderTop />
        <HeaderCenter />
        <HeaderBottom />
  
        <div className="cart-empty-message">
          <p>your Wishlist is currently empty</p>
          <Link to="../" className="browse-products-button">Browse Products</Link>
        </div>
  
        <Footer />
      </div>
    );
    // }
}

export default Wishlist;