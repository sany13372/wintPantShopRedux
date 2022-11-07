import Link from 'next/link';
import React from 'react';
import { useStateProducts } from '../../../providers/CartProvider';
import Button from '../../UI/Button/Button';
import CartPageItem from './CartPageItem/CartPageItem';



const CartPage = () => {
    const { cartItems, totalPrice} = useStateProducts();

    return (
        <main>
            <section className="body-font overflow-hidden pb-28">
                {cartItems.length >= 1 && <h2 className='px-[20px] mb-[15px] md:px-[40px] md:mb-[30px] lg:px-[80px] text-title text-[#141414]'>Ваш заказ</h2>}
                {cartItems.length >= 1 ? cartItems.map((item) => <CartPageItem product={item} key={[item._id,item.cartColor,item.cartSize]} />
                ) :
                    <div className='flex flex-col items-center justify-center'>
                        <h4 className='section__total-title text-xs md:text-base mb-2'>Ваша корзина пуста</h4>
                        <Link href={'/products'}><Button text='К товарам' className='h-12 w-48' /></Link>
                    </div>}
                {cartItems.length >= 1 &&
                    <div className='flex justify-between items-center px-[20px] md:px-[40px] lg:px-[80px] mt-[15px] md:mt-[30px]'>
                        <Link href={'/zakaz'}>
                            <Button text='Оформить заказ' className='w-48 h-12'/>
                        </Link>
                        <div>
                            <h5 className='section__total-title text-xs md:text-base'>Итого, без доставки</h5>
                            <p className='section__total-text text-xs md:text-[18px]'>{totalPrice} ₽</p>
                        </div>
                    </div>
                }
            </section>
        </main>
    );
};

export default CartPage;