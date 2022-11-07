import Link from 'next/link';
import React from 'react';
import Button from '../../UI/Button/Button';

const SuccessPage = () => {

    return (
        <main>
            <section className="body-font overflow-hidden pb-28">
                <div className='flex flex-col items-center justify-center'>
                    <h4 className='section__total-title text-xs md:text-base mb-2'>Заказ успешно оплачен</h4>
                    <Link href={'/products'}><Button text='К товарам' className='h-12 w-48' /></Link>
                </div>
            </section>
        </main>
    );
};

export default SuccessPage;