import React from 'react';
import Image from 'next/image';
import Image2 from '../../../../../public/1ava.png'
import Image4 from '../../../../../public/2ava.png'
import Image5 from '../../../../../public/3ava.png'
import {AiOutlineStar} from 'react-icons/ai'





const Reviews = () => {
    return (
        <section className="bg-gray-100" id='reviews'>
        <div className="container mx-auto px-4 py-[40px] md:py-[80px] lg:py-[120px]">
        <h2 className='text-title'>Отзывы</h2>
        <div className='flex flex-col sm:flex-row gap-2 md:gap-5 min-w-[100%] py-[20px] md:py-[40px] lg:py-[60px]'>
            <div className='p-5 lg:p-[30px] bg-white w-[100%]'>
                <div className='flex items-center'>
                    <Image src={Image2} alt='avatar' className='rounded-[50%] mr-[5px] lg:mr-[15px] review__avatar' />
                    <div className='flex flex-col w-[100%]'>
                    <div className='flex flex-row justify-between w-[100%]'>
                        <p className='font-bold text-xs lg:text-base'>Виталий</p>
                        <p className='text-xs lg:text-base'>02.09.22</p>
                    </div>
                    <div className='flex gap-1'>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                    </div>
                    <div className='flex flex-row w-[100%] mt-[5px]'>
                        <p className='text-xs mr-[15px] lg:text-base'>Цвет: <span className='text-gray-400'>Оливковый</span></p>
                        <p className='text-xs lg:text-base'>Размер: <span className='text-gray-400'>XL</span></p>
                    </div>
                    </div>                    
                </div>
                <p className='text-xs lg:text-base lg:leading-5 mt-3 lg:mt-6'>
                    Прекрасные термотрусы! Покупал для горнолыжки, очень доволен! Купили
                    другу-охотнику в подарок. Очень ценная
                    вещь оказалась.
                    </p>
            </div>


            <div className='p-5 lg:p-[30px] bg-white w-[100%]'>
                <div className='flex items-center'>
                    <Image src={Image4} alt='avatar' className='rounded-[50%] mr-[5px] lg:mr-[15px] review__avatar' />
                    <div className='flex flex-col w-[100%]'>
                    <div className='flex flex-row justify-between w-[100%]'>
                        <p className='font-bold text-xs lg:text-base'>Андрей</p>
                        <p className='text-xs lg:text-base'>03.05.22</p>
                    </div>
                    <div className='flex gap-1'>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                    </div>
                    <div className='flex flex-row w-[100%] mt-[5px]'>
                        <p className='text-xs mr-[15px] lg:text-base'>Цвет: <span className='text-gray-400'>Чёрный</span></p>
                        <p className='text-xs lg:text-base'>Размер: <span className='text-gray-400'>XXL</span></p>
                    </div>
                    </div>                    
                </div>
                <p className='text-xs lg:text-base lg:leading-5 mt-3 lg:mt-6'>
                    Брал для катания на мотоцикле
                    в прохладную погоду. Свою функцию выполняет. Все цело, не намерзло.
                    На скоростях при +9 можно ездить.
                    </p>
            </div>


            <div className='p-5 lg:p-[30px] bg-white w-[100%]'>
            <div className='flex items-center'>
                    <Image src={Image5} alt='avatar' className='rounded-[50%] mr-[5px] lg:mr-[15px] review__avatar' />
                    <div className='flex flex-col w-[100%]'>
                    <div className='flex flex-row justify-between w-[100%]'>
                        <p className='font-bold text-xs lg:text-base'>Валентина</p>
                        <p className='text-xs lg:text-base lg:text-base'>10.01.22</p>
                    </div>
                    <div className='flex gap-1'>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                        <AiOutlineStar size={15}/>
                    </div>
                    <div className='flex flex-row w-[100%] mt-[5px]'>
                        <p className='text-xs lg:text-base mr-[15px]'>Цвет: <span className='text-gray-400'>Чёрный</span></p>
                        <p className='text-xs lg:text-base'>Размер: <span className='text-gray-400'>XL</span></p>
                    </div>
                    </div>                    
                </div>
                <p className='text-xs lg:text-base lg:leading-5 mt-3 lg:mt-6'>
                    Очень довольна товаром, аналогов 
                    не нашла. Очень важное приобретение
                    для мужа. Рекомендую!
                </p>
            </div>
        </div>
        </div>
    </section>
    );
};

export default Reviews;