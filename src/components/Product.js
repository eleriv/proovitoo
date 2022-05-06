import React from "react";

export default function Product({ product, removeProduct, putToCart }) {
    const IN_CART = 'In Cart';
    const ADD_TO_CART = 'Add to cart';

    function handleProductToCart() {
        putToCart(product.id)
    }

    function handleRemove() {
        removeProduct(product.id)
    }

    function buttonValue() {
        if (product?.inCart) {
            return IN_CART;
        } else {
            return ADD_TO_CART;
        }
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
            
            <button onClick={handleProductToCart}>{buttonValue()}</button>
        </div>
    )
}
