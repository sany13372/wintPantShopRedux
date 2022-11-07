import { useRouter } from 'next/router';
import React from 'react';
import FormFooter from './FormFooter';
import { Link as Linkto } from 'react-scroll/modules';
import Link from 'next/link';

const Footer = () => {
   const { asPath } = useRouter()
   return (
      <footer className="py-[60px] lg:pb-[125px] lg:pt-[85px] bg-[#141414] text-gray-100" id='contact'>
         <div className='container px-4 mx-auto footer_inner w-[100%]'>
            <div className='flex flex-col items-start min-w-[100%] footer_hidden'>
               <Link href={'/'} className='mb-[15px] text-xs lg:text-base footer-font'>Главная</Link>
               {asPath == '/' ? <Linkto to='about' className="mb-[15px] text-xs lg:text-base cursor-pointer footer-font">О компании</Linkto> : <Link href={'/'} className="mb-[15px] cursor-pointer text-xs lg:text-base footer-font">О компании</Link>}
               {asPath == '/' ? <Linkto to='uniclos' className="mb-[15px] text-xs lg:text-base cursor-pointer footer-font">Уникальность</Linkto> : <Link href={'/'} className="mb-[15px] cursor-pointer text-xs lg:text-base footer-font">Уникальность</Link>}
               {asPath == '/' ? <Linkto to='reviews' className="mb-[15px] text-xs cursor-pointer lg:text-base footer-font">Отзывы</Linkto> : <Link href={'/'} className="mb-[15px] text-xs cursor-pointer lg:text-base footer-font">Отзывы</Link>}
               <Linkto to='contact' className="mb-[15px] text-xs lg:text-base footer-font cursor-pointer">Контакты</Linkto>
            </div>

            <div className='flex flex-col items-start min-w-[100%] footer_hidden'>
               <a className="mb-[15px] text-xs lg:text-base footer-font">Публичная оферта</a>
               <a className="mb-[15px] text-xs lg:text-base footer-font">Политика конфиденциальности</a>
               <a className="mb-[15px] text-xs lg:text-base footer-font">Помощь</a>
            </div>
            <div className='flex flex-col items-start min-w-[100%] footer_order'>
               <a href="mailto:wintpant@mail.ru" className="mb-[15px] text-xs lg:text-base footer-font text-gray-400">wintpant@mail.ru</a>
               <a href="tel:+79219649072" className="mb-[15px] text-xs lg:text-base footer-font text-gray-400">+79219649072</a>
               <a href="https://wa.me/79219649072" className="mb-[15px] text-xs lg:text-base footer-font text-gray-400">WhatsApp / Telegram </a>
            </div>
            <FormFooter />
         </div>
      </footer>
   );
};

export default Footer;