import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props.product)
    const {name, img, seller, price, stock, key} = props.product
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-desc">
                <h3><Link to={"/product/"+key}>{name}</Link></h3>
                <p>by: {seller}</p><br/>
                <p>$ {price}</p>
                <p>only {stock} left in stock - order soon</p>
                {props.showAddToCart === true &&<button className="main-button" onClick= {() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>}
            </div>
        </div> 
    );
};

export default Product;