import React, { useState } from "react";
import ShowProduct from "./ShowProduct";

function AddProduct() {
    const [products, setProducts] = useState(['Õun', 'Kartul']);

    return (
        <div className="">
            <ShowProduct products={products} />
            <h3>Add product form</h3>
            <div>
                <input type='text' placeholder='Product Image'/>
                <input type='text' placeholder='Product Name'/>
                <input type='text' placeholder='Product price'/>
            </div>
            <button>Submit</button>
        </div>
  );
}

export default AddProduct;
