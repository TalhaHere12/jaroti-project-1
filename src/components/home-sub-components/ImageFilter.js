import React, { useState, useEffect } from "react";
import Products from "./../arrays/Products"

import "./styles/ImageFilter.css";

const ImageFilter = (props) => {
  const [products, setProducts] = useState(Products);

  const filterItem = (cateProduct) => {
    const updatedProducts = Products.filter((curElem) => {
      return curElem.category === cateProduct;
    });
    setProducts(updatedProducts);
  };

    return(
        <>
        <div className='ProductsFilter'>

            <div className='category-menu'>
                <a className="category-menuitems" onClick={() => filterItem('Earrings')}>Earrings</a>
                <a  className="category-menuitems" onClick={() => filterItem('Necklaces')}>Necklaces</a>
                <a className="category-menuitems" onClick={() => filterItem('Rings')}>Rings</a>
                <a className="category-menuitems" onClick={() => filterItem('Bracelets')}>Bracelets</a>
                <a className="category-menuitems" onClick={() => filterItem('Anklets')}>Anklets</a>
                <a className="category-menuitems" onClick={() => filterItem('handbags')}>Handbags</a>
            </div>

            <div className="products">

                {products.map(({ id, productname, category, status,  discount, title, color, brand, materials, style,
                              price, quantity, img, productUploader, productbuyer , productwisher}) => {

                    return (
                        
        
                            <div key={id} className="product-box">

                                <div className="product-upper">
                        
                                    {status != " " ? (
                                        <>
                                            <div className="product-status"> {status} </div>
                                        </>
                                    ) : null}

                                    {discount != " " ? (
                                        <>
                                            <div className="product-discount"> {discount} </div>
                                        </>
                                    ) : null}

                                    <div className="product-interact">
                                        <div className="wishlist">
                                            <span className="wishlist-icon">
                                                <i class="fa-regular fa-heart"></i>
                                            </span>
                                            <span className="wishlist-title">Wishlist</span>
                                        </div>
                                        <div className="quickview">
                                            <span className="quickview-icon"><i class="fa-solid fa-search"></i></span>
                                            <span className="quickview-title">Quick Look</span>
                                        </div>
                                        <div className="compare">
                                            <span className="compare-icon"><i class="fa-solid fa-code-compare"></i></span>
                                            <span className="compare-title">Compare</span>
                                        </div>
                                    </div>
                                    <div className="product-interact-hidder"></div>

                                    <div className="product-img" >
                                        
                                        <img src={img} />
                                        
                                    </div>

                                    <div className="quicklook" >
                                        <span className="look-text">ADD TO CART</span>
                                    </div>

                                </div>
                                <div className="quicklook-hidder"></div>

                                <div className="product-lower">
                                     
                                    <div className="product-title"> {title} </div>
                                    
                                    <p className="product-price">{price}</p>
                                    
                                </div>

                            </div>

                        
                    );
                })}

            </div>

        </div>
        </>
    );
}

export default ImageFilter;
