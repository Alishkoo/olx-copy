'use client'

import React, { useContext, useState } from 'react';
import { ProductType } from '../types/productType';
import  useProducts  from '../hooks/useProducts';
import ProductItem from './productsItem';

const ProductList :React.FC = () => {

    const {data, isLoading, isSuccess} = useProducts();

    if(isLoading){
        return <h1>Loading...</h1>
    }
    
    return (
        <div className="flex flex-wrap mb-2">
            {isSuccess && data.map((product: ProductType) => (
                <div className="w-1/3" key={product.id}>
                    <ProductItem product={product} />
                </div>
            ))}
        </div>
    )
}

export default ProductList;