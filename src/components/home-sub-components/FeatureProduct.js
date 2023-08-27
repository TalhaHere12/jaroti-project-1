import React, { useState } from "react";
import Products from "./../arrays/Products"

import "./styles/FeatureProduct.css";
const FeatureProduct = ({addToCart, cartItems}) => {


    console.log(cartItems)

    return(
        <>
        <div className='feature-products-main-box'>

            <div className="feature-products">

                {Products.map(({ id, status, discount, title, price, img, quantity }) => {

                    return (
        
                            <div key={id} className="feature-product-box">

                                <div className="feature-product-upper">

                                    {status != " " ? (
                                        <>
                                            <div className="feature-product-status"> {status} </div>
                                        </>
                                    ) : null}

                                    {discount != " " ? (
                                        <>
                                            <div className="feature-product-discount"> ${discount} </div>
                                        </>
                                    ) : null}

                                    <div className="feature-product-interact">
                                        <div className="feature-wishlist">
                                            <span className="feature-wishlist-icon"><i class="fa-regular fa-heart"></i></span>
                                            <span className="feature-wishlist-title">Wishlist</span>
                                        </div>
                                        <div className="feature-quickview">
                                            <span className="feature-quickview-icon"><i class="fa-solid fa-search"></i></span>
                                            <span className="feature-quickview-title">Quick Look</span>
                                        </div>
                                        <div className="feature-compare">
                                            <span className="feature-compare-icon"><i class="fa-solid fa-code-compare"></i></span>
                                            <span className="feature-compare-title">Compare</span>
                                        </div>
                                    </div>
                                    <div className="feature-product-interact-hidder"></div>

                                    <div className="feature-product-img" >
                                        
                                        <img src={img} />
                                        
                                    </div>

                                    <div className="feature-quicklook">
                                        <span className="feature-look-text" onClick={() => addToCart({id , title , price ,discount ,img ,quantity})}>ADD TO CART</span>
                                    </div>

                                </div>
                                <div className="feature-quicklook-hidder"></div>

                                <div className="feature-product-lower">
                                     
                                    <div className="feature-product-title"> {title} </div>
                                    
                                    <p className="feature-product-price">${price}</p>
                                    
                                </div>

                            </div>

                    );
                })}

            </div>

        </div>
        </>
    );
}

export default FeatureProduct;
