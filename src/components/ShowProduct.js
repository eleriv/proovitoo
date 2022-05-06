import React from "react";
import Product from "./Product";

export default function ShowProduct({ products, removeProduct }) {
    return (
        products?.map(product => {
            return <Product key={product.id} removeProduct={removeProduct} product={product} />
        })
    )
}
