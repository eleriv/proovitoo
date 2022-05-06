import React from "react";
import Product from "./Product";

export default function ShowProduct({ products, removeProduct, setCartNumber, putToCart}) {
    return (
        products?.map(product => {
            return <Product key={product.id} removeProduct={removeProduct} setCartNumber={setCartNumber} product={product} putToCart={putToCart}/>
        })
    )
}
