import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/ProductsSlice';

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    console.log(products);

    return (
        <div>
        </div>
    );
}

export default ProductList;
