import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    // reduce method 
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price
    }

    // function for fixed decimal number 
    const formatNumber = format => {
        const precetion = format.toFixed(2)
        return Number(precetion)
    }

    let shipping = 0
    if(total > 15){
        shipping = 4.99
    } else if(total > 35) {
        shipping = 0
    } else if(total < 15 && total != 0){
        shipping = 12.99
    }

    let tax = total / 10

    const grandTotal = total + shipping + tax

    return (
        <div className= "cart">
            <h4 className="summary">Order Summary</h4>
            <p className="item">Items Ordered: {cart.length}</p>
            <p>Product Price: ${formatNumber(total)}</p>
            <p>Shipping: ${formatNumber(shipping)}</p>
            <p>Tax + VAT: ${formatNumber(tax)}</p>
            <p>Total Price: ${formatNumber(grandTotal)}</p>
            <button className="confirm">Confirm Order</button>
        </div>
    );
};

export default Cart;