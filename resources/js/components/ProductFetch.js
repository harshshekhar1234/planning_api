import React from 'react';
import ProductList from './ProductList';

const ProductFetch = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <ProductList />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductFetch;