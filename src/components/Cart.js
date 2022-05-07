import React from "react";

export default function Cart({ number }) {
    return (
        <div className="cart">
             <p>Products in cart: {number}</p>
        </div>
    )
}
