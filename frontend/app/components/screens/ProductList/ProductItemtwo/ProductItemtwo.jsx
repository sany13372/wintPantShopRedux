import React from 'react';
import Link from 'next/link'
import Image  from 'next/image';
import Images from '../../../../../public/material_mob.png'
import styles from './ProductItemtwo.module.scss'

const ProductItemtwo = ({product}) => {
    return (
        <div className="xl:w-1/4 md:w-1/2 p-4" key={product.slug}>
        <Link href={`/product/${product.slug}`}>
        <div className="bg-gray-100 p-6 rounded-lg">
            <Image alt='Картинка' src={Images} className="h-40 rounded w-full object-cover object-center mb-6"/>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{product.name}</h2>
            <div  className={styles.prices}>{product.price}</div>
        </div>
        </Link>
        </div>
    );
};

export default ProductItemtwo;