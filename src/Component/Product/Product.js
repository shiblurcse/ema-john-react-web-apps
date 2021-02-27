import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {name, img, seller, price, stock} = props.product
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-desc">
                <h3>{name}</h3>
                <p>by: {seller}</p><br/>
                <p>$ {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className="main-button"><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div> 
    );
};

export default Product;