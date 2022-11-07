import React from 'react';
import About from './About/About';
import ProductList from '../ProductList/ProductList';
import Intro from './Intro/Intro';
import Uniques from './Uniques/Uniques';
import Reviews from './Reviews/Reviews';
import styles from '../Page.module.scss'



const HomePage = ({products}) => {

    return (
    <main className={styles.wrapper}>
        <Intro/>
        <About/>
        <Uniques/>
        <ProductList products={products} title='Товары'/>
        <Reviews/>
    </main>  
    );
};

export default HomePage;