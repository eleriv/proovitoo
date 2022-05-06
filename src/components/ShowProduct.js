import React from "react";
import Product from "./Product";

export default function ShowProduct({ products }) {
    return (
        products?.map(product => {
            return <Product key={product} product={product} />
        })
    )
}
