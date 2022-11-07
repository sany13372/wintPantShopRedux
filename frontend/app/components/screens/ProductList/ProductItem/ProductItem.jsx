import React, { useState } from 'react';

import { urlFor } from '../../../../../../backend/lib/client.js';

import Link from 'next/link';
import styles from './ProductItem.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';


const ProductItem = ({ product }) => {
    const { asPath } = useRouter();
    const [mainImage, setMainImage] = useState(product.image[0]);

    return (
        <Link href={`/product/${product.slug.current}`} className={cn({[styles.card]:asPath!=='/products',[styles.card_grid]:asPath=='/products'})}>
            <div className={'flex flex-col justify-between'}>
                <img
                    onMouseEnter={(() => setMainImage(product.image[1]))}
                    onMouseLeave={(() => setMainImage(product.image[0]))}
                    src={urlFor(mainImage)}
                    alt='card__image'
                    className='w-full object-cover h-full object-center block'
                />
                <p className='text-[11px] lg:text-base mt-3'>{product.name}</p>
                <p className='text-[11px] text-[#909090] lg:text-base'>{product.price} ₽</p>
            </div>
        </Link>
    );
};

export default ProductItem;