import React from 'react';
import { useStateProducts } from '../../../providers/CartProvider';

import CheckBoxBlock from './CheckBoxBlock';

import Form from './Form';

const ZakazPage = () => {
    const { cartItems } = useStateProducts()
    return (
        <main className='container pb-40 mx-auto px-[20px] md:px-0'>
            {cartItems.length >= 1 ?
                <div>
                    <h2 className='text-title mb-[10px] md:mb-[20px] lg:mb-[30px]'>Введите ваши данные</h2>
                    <p className='text-[11px] md:text-[13px] lg:text-[18px] mb-[30px]'>Для заказа и оплаты банковской картой заполните форму ниже.
                        <br />Внимание! Для оплаты подходят только Российские банковские карты.</p>
                    <div className='flex justify-between gap-[30px] items-start flex-wrap md:flex-nowrap'>
                        <Form />
                        <CheckBoxBlock />
                        
                    </div>
                </div>
                : <div className='text-center py-32 font-bold text-4xl'>Пожалуйста заполните корзину</div>}
        </main>
    );
};

export default ZakazPage;