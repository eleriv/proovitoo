import React from "react";

export default function Cart({ number }) {
    var numberCount;

    if (number < 1) {
        numberCount = 0;
    } else {
        numberCount = number;
    }

    return (
        <div>
            <p>Products in cart: {numberCount}</p>
        </div>
        
    )
}
