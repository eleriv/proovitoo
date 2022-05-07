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
        <div className="productItem">
            <div>
                <button className="removeProduct" onClick={handleRemove}>x</button>
            </div>
            <div>
                <div><img className="productImage" src={product.image} alt='Product'></img></div>
                <div>{product.name}</div>
                <div>{product.price}€</div>
            </div>
            
            <button className="btn" onClick={handleProductToCart}>{buttonValue()}</button>
        </div>
    )
}
