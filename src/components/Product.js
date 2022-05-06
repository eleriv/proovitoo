import React from "react";

export default function Product({ product }) {
    return (
        <div>
            <div className="product">
            {product.image}
            {product.name}
            {product.price}
            </div>
            <button>Add to cart</button>
        </div>
    )
}
