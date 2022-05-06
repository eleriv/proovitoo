import React, { useState } from "react";

export default function Product({ product, removeProduct, setCartNumber }) {
    const [count, setCount] = useState(1);

    function handleProductToCart() {
        console.log('handleProductToCart - Product.js');
        setCount(count => count + 1);
        setCartNumber(count);
    }

    function handleRemove() {
        removeProduct(product.id)
    }

    return (
        <div>
            <div>
                <button onClick={handleRemove}>x</button>
            </div>
            <div className="product">
                {product.image}
                {product.name}
                {product.price}
            </div>
            <button onClick={handleProductToCart}>Add to cart</button>
        </div>
    )
}
