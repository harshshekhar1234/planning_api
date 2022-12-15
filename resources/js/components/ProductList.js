import React, {useState, useEffect} from 'react';
import {fetchProductData} from './store/product-action';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';

const ProductList = () => {
    const dispatch = useDispatch();
    const showProduct = useSelector((state) => state.product.items);

    useEffect(() => {
    dispatch(fetchProductData());
    }, []);
    return (
        <div className="container">
            {showProduct.length ? showProduct.map(item => <Product key = {item.id} item={item}/>) : <h1>Loading मेरा वेब पेज</h1>}
        </div>
    );
}

export default ProductList;