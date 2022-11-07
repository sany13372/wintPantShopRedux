import React from 'react';
import Image from 'next/image';

import Image2 from '../../../../../public/desktopKrugi.png'
import Image3 from '../../../../../public/SharyMobile.png'
import Image4 from '../../../../../public/1.svg'
import Image5 from '../../../../../public/2.svg'
import Image6 from '../../../../../public/3.svg'
import Image7 from '../../../../../public/4.svg'
import Image8 from '../../../../../public/5.svg'
import Image9 from '../../../../../public/6.svg'



const Uniques = () => {
    return (
        <section className='bg-gray-100' id="uniclos">
        <div className='container mx-auto px-4 py-[40px] md:py-[80px] lg:py-[120px'>
        <h2 className='text-title'> Уникальность </h2>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='grid grid-cols-2 grid-row-3 gap-y-2 gap-x-4 md:gap-5 md:w-[65%] lg:w-[50%] mt-[20px] md:mt-[40px] lg:mt-[60px] mb-[40px]'>
                <div className='flex items-center'>
                    <Image src={Image4} alt='icon1' className='md:h-[67px] md:h-[67px] mr-[15px] md:mr-[20px] iconUniq'/>
                    <p className='text-[11px] leading-[13px] md:text-base'>Быстро сохнет</p>
                </div>
                <div className='flex items-center'>
                    <Image src={Image7} alt='icon2' className='md:h-[67px] md:h-[67px] mr-[15px] md:mr-[20px] iconUniq'/>
                    <p className='text-[11px] leading-[13px] md:text-base'>Оптимальный микроклимат внутри изделия</p>
                </div>
                <div className='flex items-center'>
                    <Image src={Image5} alt='icon3' className='md:h-[67px] md:h-[67px] mr-[15px] md:mr-[20px] iconUniq'/>
                    <p className='text-[11px] leading-[13px] md:text-base'>Комфорт движения в любую погоду</p>
                </div>
                <div className='flex items-center'>
                    <Image src={Image8} alt='icon4' className='md:h-[67px] md:h-[67px] mr-[15px] md:mr-[20px] iconUniq'/>
                    <p className='text-[11px] leading-[13px] md:text-base'>Лёгкость стирки и ухода за материалом</p>
                </div>
                <div className='flex items-center'>
                    <Image src={Image6} alt='icon5' className='md:h-[67px] md:h-[67px] mr-[15px] md:mr-[20px] iconUniq'/>
                    <p className='text-[11px] leading-[13px] md:text-base'>Поддерживает дышащие свойства мембранных связей</p>
                </div>
                <div className='flex items-center'>
                    <Image src={Image9} alt='icon6' className='md:h-[67px] md:h-[67px] mr-[15px] md:mr-[20px] iconUniq'/>
                    <p className='text-[11px] leading-[13px] md:text-base'>Даже мокрый сохраняет тепло</p>
                </div>   
            </div>
            <Image src={Image2} alt='Материалы' className='lg:mt-[-50px] max-w-[100%] md:max-w-[30%] hiddenImg' />
            <Image src={Image3} alt='Материалы' className='max-w-[100%] md:max-w-[30%] md:hidden' />
        </div>
        </div>
        </section>
    );
};

export default Uniques;