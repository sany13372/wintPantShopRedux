import React from 'react';
import { client } from '../../../backend/lib/client';
import { products } from '../../app/components/screens/data';
import ProductItemtwo from '../../app/components/screens/ProductList/ProductItemtwo/ProductItemtwo';
import ProductsPage from '../../app/components/screens/ProductsPage/ProductsPage';

const Products = ({products}) => {
    return <ProductsPage products={products}/>
};

export default Products;

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
  
    const products = await client.fetch(query);
  
  
    return {
      props: {products}
    }
  }