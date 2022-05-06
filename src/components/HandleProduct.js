import React, { useState, useRef, useEffect } from "react";
import ShowProduct from "./ShowProduct";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'productApp.products'

function HandleProduct({ putToCart, setNumber }) {
    const [products, setProducts] = useState([]);
    
    const productImageRef = useRef()
    const productNameRef = useRef()
    const productPriceRef = useRef()

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedProducts) setProducts(storedProducts)
    }, [])

    useEffect(() => {
        if (products?.length) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products))
        }
    }, [products])

    function addNewProduct(e) {
        const image = productImageRef.current.value
        const name = productNameRef.current.value
        const price = productPriceRef.current.value

        if (image === '') return
        if (name === '') return
        if (price === '') return

        setProducts(prevProducts => {
            return[...prevProducts, { id: uuidv4(), image: image, name: name, price: price, inCart: false}]
        })

        productImageRef.current.value = null
        productNameRef.current.value = null
        productPriceRef.current.value = null
    }

    function removeProduct(id) {
        const newProducts = products.filter(product => product.id !== id);
        setProducts(newProducts);
    }

    function putToCart(id) {
        const newProducts = [...products]
        const product = newProducts.find(products => products.id === id)
        product.inCart = !product.inCart
        setProducts(newProducts)
        setNumber(products.filter(product => product.inCart).length)
    }

    return (
        <div className="">
            <h3>Add product form</h3>
            <div>
                <input ref={productImageRef} type='text' placeholder='Product Image'/>
                <input ref={productNameRef} type='text' placeholder='Product Name'/>
                <input ref={productPriceRef} type='text' placeholder='Product price'/>
            </div>
            <button onClick={addNewProduct}>Submit</button>
            <ShowProduct products={products} removeProduct={removeProduct} putToCart={putToCart} />
        </div>
  );
}

export default HandleProduct;
