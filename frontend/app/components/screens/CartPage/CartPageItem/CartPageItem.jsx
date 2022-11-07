import React from 'react';
import { urlFor } from '../../../../../../backend/lib/client';
import styles from './CartPageItem.module.scss'



import CloseImg from '../../../../../public/Close.svg'
import Image from 'next/image';
import { useStateProducts } from '../../../../providers/CartProvider';
const CartPageItem = ({ product }) => {
    const { onRemove, toggleCartItemQuanitity } = useStateProducts();
    if (product.quantity) {
        return (
            <div className={styles.item}>
                <div className='flex justify-between items-center w-[100%] sm:flex-row py-[10px] lg:py-[20px]'>
                    <div className='ml-[20px] md:ml-[40px] mr-[5px] md:mr-[0] lg:ml-[80px] w-[20%] md:w-[15%]'>
                        <img src={urlFor(product?.image[0])} className={[styles.imageblock]}  alt='Картинка' />
                    </div>
                    <div className='w-[60%] md:w-[50%]'>
                        <h3 className='text-[11px] md:text-base md:mb-1 leading-xs'>{product.name}</h3>
                        <p className='flex text-gray-500 text-[11px] md:text-base font-regular'>Размер: {product.cartSize ? product.cartSize : product.size.map((siz) => <div>{siz}</div>)}</p>
                        <div className='hidden max-[650px]:block'>
                            <p className='text-gray-500 text-[11px] md:text-base'>
                                {product.cartColor}
                            </p>
                            <p className='section__total-title text-gray-500 text-[11px] md:text-base'>
                                {product.price} ₽
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 md:gap-3 md:w-[30%] justify-center items-center'>
                        <button onClick={() => toggleCartItemQuanitity(product, 'inc')} className={styles.oral}>+</button>
                        <div className='section__total-title text-[11px] md:text-base'>{product.quantity}</div>
                        <button onClick={() => toggleCartItemQuanitity(product, 'dec')} className={styles.oral}>-</button>
                    </div>
                    <p className='text-gray-500 text-[11px] md:text-base max-[650px]:hidden w-[30%] md:w-[20%] text-center'>
                        {product.price} ₽
                    </p>
                    <p className='text-gray-500 text-[11px] md:text-base max-[650px]:hidden w-[30%] md:w-[20%] text-center'>
                        {product.cartColor}
                    </p>
                    <div className='mr-[20px] md:mr-[40px] lg:mr-[80px] w-[10%] md:w-[20%] flex justify-end md:justify-center'>
                        <Image alt='Картинка' className='cursor-pointer' onClick={() => onRemove(product, product.cartSize, product.cartColor)} src={CloseImg} height={13} width={13} />
                    </div>
                </div>
            </div>
        );
    }

};

export default CartPageItem;