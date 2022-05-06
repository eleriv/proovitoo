import React from "react";

function AddProduct() {
  return (
        <div className="">
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
