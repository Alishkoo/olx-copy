'use client'

import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ProductType } from '../types/productType';
import {getAllProducts} from '../api/services/productsService';
import { createContext } from 'react';

interface ProductContextType{
    products: ProductType[];
    setProducts: (products: ProductType[]) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

const Provider: React.FC<{children: ReactNode}> = ({children}) => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetchProducts = async() =>{
            try{
                const productsData = await getAllProducts();
                setProducts(productsData.data);
            } catch (error){
                console.error('Failed to fetch products:', error);
            }
        };
        fetchProducts();
    }, []);

    const valueToShare = {
        products,
        setProducts
    }

    return (
        <ProductContext.Provider value={valueToShare}>
            {children}
        </ProductContext.Provider>
    );
};

const useProducts = () => {
    const context = useContext(ProductContext);

    if(!context){
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
}

export {Provider, useProducts}