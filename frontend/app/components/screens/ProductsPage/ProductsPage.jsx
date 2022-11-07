
import React from 'react';
import ProductItem from '../ProductList/ProductItem/ProductItem';
import style from './ProductsPage.module.scss';



const ProductsPage = ({products}) => {
    return (
        <main>
        <div className="container px-5 pb-24 mx-auto">
        <div className={style.products__grid}>
            {products.map((product) => <ProductItem product={product} key={product._id}/>)}
        </div>
        </div>
    </main>
    );
};

export default ProductsPage;