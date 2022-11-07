import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '../../../assets/img/arrow.svg'
import { useRouter } from 'next/router';
const ProductList = ({ title, products, mitititle }) => {
    const { asPath } = useRouter()
    

    return (
        <section className="container mx-auto px-4 py-[40px] md:py-[80px] lg:py-[120px]">
            <h2 className='text-title'>
                {title}
            </h2>
            <h3 className='md:mb-6 text-[#141414] text-xs md:text-base'>{mitititle}</h3>
            <div className='flex items-baseline justify-end gap-[5px] md:gap-[8px] mb-[12px] md:mb-[38px] lg:mb-[40px]'>
                <Link href='/products' className='text-[9px] md:text-[11px] lg:text-base hover:'>Смотреть все </Link>
                <Image src={Arrow} alt='arrow_icon' className='' />
            </div>
            <div className='mt-[12px] md:mt-[0px]'>
                <div className='grid grid-cols-2 md:grid-cols-4 grid-row-1 gap-[10px] lg:gap-[20px]'>
                    {products.map((product, index) => {
                        if (asPath !== '/products') {
                            while (index < 4) return <ProductItem product={product} key={product._id} />
                        } else {
                            return <ProductItem product={product} key={product._id} />
                        }
                        
                    })}
                </div>
            </div>
        </section>
    );
};


export default ProductList;

