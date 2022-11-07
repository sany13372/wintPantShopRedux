
import React from 'react';
import { urlFor } from '../../../../../backend/lib/client';
import ProductList from '../ProductList/ProductList';
import styles from './ProductPageItem.module.scss'

import Modal from '../../UI/Modals/ModalOne/ModalOne';
import { useModal } from '../../../hooks/useModal';
import { useState } from 'react';

import cn from 'classnames'
import styleBut  from '../../../components/UI/Button/Button.module.scss'
import Link from 'next/link';
import { useStateProducts } from '../../../providers/CartProvider';
const ProductPageItem = ({products,product}) => {
  const { checkModal, showModalone, showModalthree, showModaltwo, close } = useModal();
  const { onAdd, qty } = useStateProducts();

  const [size, setSize] = useState(product.size[0]) // statement for color
  const color = product.colors.filter(item => item.split(',')[2] === product.slug.current).toString().split(',')[1];





  const Buynow = () => {
    onAdd(product, qty, size, color)
  }

  const changeColorHandler = (clrSlg) => {
    return product.slug.current === clrSlg ? 'border-solid border-[3px] border-[#E7750C]' : '';
  }
  const [imageCount,setImageCount] = useState(0)




    return (
        <main>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container py-6 md:py-12 lg:py-24 min-w-[100%] px-[20px] md:px-[40px] lg:px-[80px]">
            <div className={styles.item}>
              <div className={cn([styles.imagemobile],['flex flex-col flex-wrap items-center justify-center gap-2 '])} >
                {product.image.map((img,index) => <img onClick={() => setImageCount(index)} className={cn([styles.imge],{[styles.active]: imageCount == index})} src={urlFor(img)} alt='Картинка'/>)}
              </div>
              <div>
                <img className={styles.mainimage}  src={urlFor(product.image[imageCount])}/>
              </div>
              <div className='lg:ml-[40px] md:ml-[10px] w-[100%] mt-6'>
                <h3 className='text-xs md:text-base font-medium font-normal mb-1 text-[#141414]'>{product.name}</h3>
                <h3 className='text-[13px] md:text-base text-[#141414] font-semibold mb-4'>{product.price} ₽</h3>
                {product.colors && <h3 className='text-xs md:text-base color-[#141414] mb-2'>Цвет:</h3>}
                <div className='flex items-start'>
                  {product.colors &&
                    product.colors.map((color) => {
                      const colorBg = color.split(',')[0]
                      const colorSlg = color.split(',')[2]

                      return (
                        <Link href={`/product/${colorSlg}`}>
                          <button
                            key={colorBg}
                            className={`w-[30px] h-[30px] mr-[10px] ${changeColorHandler(colorSlg)}`}
                            style={{
                              backgroundColor: colorBg,
                            }}
                          >
                          </button>
                        </Link>
                      )
                    })
                  }
                </div>
                <h3 className='text-xs md:text-base color-[#141414] mt-4'>Размер:</h3>
                <div className='flex mt-3 gap-2 flex-wrap'>
                  {
                    product.size.map((item) => {
                      return (
                        <button
                          className={item === size ? `footer-font text-xs border-solid border-[1px] border-[#000000] min-w-[41px] min-h-[24px] md:min-w-[36px] md:min-w-[20px] lg:min-w-[51px] lg:min-h-[28px] mr-[10px] md:text-base`
                            : `footer-font text-xs border-solid border-[1px] border-[#909090] text-[#909090] min-w-[41px] min-h-[24px] md:min-w-[36px] md:min-w-[20px] lg:min-w-[51px] lg:min-h-[28px] mr-[10px] md:text-base`}
                          onClick={() => {
                            setSize(item);
                          }}
                        >
                          {item}
                        </button>
                      )
                    })
                  }
                </div>
                <button
                  className='text-gray-400 mb-4 mt-2 text-[11px] md:text-base' onClick={() => checkModal(product.category)}>Таблица размеров </button>
              <button onClick={() => Buynow()}  className={cn([styleBut.button],[`text-white bg-black hover:bg-gray-300 hover:text-black w-48 h-12 mb-[25px] md:mb-[0px]`])}>
                Добавить
              </button>
                <div className='flex gap-[5px] md:gap-2 mt-[7px] sm:mt-5 min-w-[100%]'>
                  <h3 className='text-xs lg:text-base font-medium text-[#141414]'>
                    Состав:
                  </h3>
                  <h3 className='text-xs lg:text-base text-[#141414]'>
                    {product.sostav}
                  </h3>
                </div>
                <div className='flex gap-[2px] md:gap-2 mt-[7px] sm:mt-5'>
                  <h3 className='text-xs lg:text-base font-medium text-[#141414]'>
                  Страна производства:
                  </h3>
                  <h3 className='text-xs lg:text-base text-[#141414]'>
                  {product.country}
                  </h3>
                </div>
                <div className='flex gap-[2px] md:gap-2 mt-[7px] sm:mt-5'>
                  <h3 className='text-xs lg:text-base font-medium text-[#141414]'>
                  Назначение:
                  </h3>
                  <h3 className='text-xs lg:text-base text-[#141414]'>
                  {product.naznachenie}
                  </h3>
                </div>
                <div className='flex gap-[2px] md:gap-2 mt-[7px] sm:mt-5'>
                  <h3 className='text-xs lg:text-base font-medium text-[#141414]'>
                  Пол:
                  </h3>
                  <h3 className='text-xs lg:text-base text-[#141414]'>
                  {product.gender}
                  </h3>
                </div>
              </div>  
            </div>
            <div className="pl-[15px] md:pl-[60px] lg:pl-[95px] flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0">
                  <h3 className='text-xs md:text-base mb-3 font-medium text-[#141414]'>Описание:</h3>
                  <p className="leading-relaxed mb-4">{product.details}</p>
                  <h3 className='text-xs md:text-base mb-5 font-medium text-[#141414]'>Уход за вещами:</h3>
                  <p className="leading-relaxed">{product.uhod}</p>
                </div>
            </div>
            <ProductList products={products} mitititle='Вам может понравиться'/>
          </div>
          <Modal showModalone={showModalone} showModaltwo={showModaltwo} close={close} showModalthree={showModalthree}/>
          </section>
    </main>
    );
};

export default ProductPageItem;