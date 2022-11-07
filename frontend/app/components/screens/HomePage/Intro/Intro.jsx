import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Ibg from '../../../../../public/mainPic.jpeg'
import Button from '../../../UI/Button/Button';
const Intro = () => {
    return (
        <section  className='bg-gray-100 overflow-hidden'>     
        <div className="container mx-auto px-4 flex">
           <div className="flex  justify-center flex-col">
              <h1
                className='text-title'
              >
                Тепло. <br/>
                Комфорт. <br/>
                Надёжность. <br/>
              </h1>
              <h3 className='text-xs mt-[10px] mb-[20px] md:mt-[15px] md:mb-[25px] lg:text-base lg:mb-[50px] md:max-w-[60%]'>
                В стремлении создать уникальный продукт на рынке мы решили сделать товар для мужчин, который будет
                защищать их здоровье и содержать их в тонусе
              </h3>
            <div className='flex'><Link href='/products'className='w-48 h-12' ><Button text='К товарам' className='w-48 h-12'/></Link></div>
           </div>
           <Image
              src={Ibg}
              alt='main picture'
              className='max-w-[40vw] md:ml-0 ml-8 intro-image'
           />
        </div>
     </section>
    );
};

export default Intro;