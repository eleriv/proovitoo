import React from "react";

export default function Product({ product, removeProduct }) {
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
            <button>Add to cart</button>
        </div>
    )
}
