import Link from 'next/link';
import React, { useState } from 'react';
import cn from 'classnames'
import styles from './Header.module.scss'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Ibg from './logo.svg';
import CartImage from './Cart.svg';


import { Link as Linkto } from 'react-scroll/modules';
import style from './Navbar.module.css';
import { useStateProducts } from '../../../providers/CartProvider';
import NavToggle from '../../UI/NavButton/NavToggle';



const Header = () => {
   const { totalQuantities } = useStateProducts();
   const { asPath } = useRouter();

   const [nav, setNav] = useState(false);

   return (
      <header className={style.header}>
         <div className='container mx-auto'>
            <div className={style.box}>
               <Link href='/' className='ml-[20px] md:ml-0 order-1'>
                  <Image src={Ibg} width={60} height={60} alt='logo' />
               </Link>
               <div className={style.cartItem}>
                  <Link href={'/cart'} className="hover:text-gray-900 absolute bottom-[29px] right-[55px]"><Image src={CartImage} alt='cart-icon' />{totalQuantities > 0 && <div className='w-[12px] h-[12px] rounded-full bg-red-500 absolute top-4 right-0 left-3 bottom-0 text-white text-[8px] flex items-center justify-center'>{totalQuantities}</div>}</Link>
               </div>
               <nav
                  className={
                     nav ? [style.menu, style.active].join(' ') : [style.menu]
                  }
               >
                  <Link href={'/'} onClick={() => setNav(!nav)} className={cn([styles.link], { [styles.linkac]: asPath == '/' })}>Главная</Link>
                  {asPath == '/' ? <Linkto onClick={() => setNav(!nav)} to='about' className="mr-5 cursor-pointer hover:text-gray-900">О компании</Linkto> : <Link href={'/'} className="mr-5 hover:text-gray-900 cursor-pointer">О компании</Link>}
                  {asPath == '/' ? <Linkto onClick={() => setNav(!nav)} to='uniclos' className="mr-5 hover:text-gray-900 cursor-pointer">Уникальность</Linkto> : <Link href={'/'} className="mr-5 hover:text-gray-900 cursor-pointer">Уникальность</Link>}
                  <Link href={'/products'} onClick={() => setNav(!nav)} className={cn([styles.link], { [styles.linkac]: asPath == '/products' })}>Товары</Link>
                  {asPath == '/' ? <Linkto onClick={() => setNav(!nav)} to='reviews' className="mr-5 hover:text-gray-900 cursor-pointer">Отзывы</Linkto> : <Link href={'/'} className="mr-5 hover:text-gray-900 cursor-pointer">Отзывы</Link>}
                  <Linkto onClick={() => setNav(!nav)} to='contact' className="mr-5 hover:text-gray-900 cursor-pointer">Контакты</Linkto>
                  <div className='flex flex-col items-end mt-auto mb-[100px] mr-[20px] contacts_hidden'>
                     <a href="mailto:wintpant@mail.ru" className="mb-[15px] text-[11px] footer-font text-gray-400">wintpant@mail.ru</a>
                     <a href="tel:+79219649072" className="mb-[15px] text-[11px] footer-font text-gray-400">+79219649072</a>
                     <a href="https://wa.me/79219649072" className="mb-[15px] text-[11px] footer-font text-gray-400">WhatsApp / Telegram </a>
                  </div>
               </nav>
               <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                  {/* {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />} */}
                  {<NavToggle nav={ nav }/>}
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;

// <header className="text-gray-600 body-font">
      //    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      //       <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      //          <Image src={Ibg} width={60} height={60} alt='logo' />
      //       </Link>
      //       <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      //          <Link href={'/'} className={cn([styles.link], { [styles.link.active]: asPath !== '/' })}>Главная</Link>
      //          {asPath == '/' ? <Linkto to='about' className="mr-5 hover:text-gray-900">О компании</Linkto> : <Link href={'/'} className="mr-5 hover:text-gray-900">О компании</Link>}
      //          {asPath == '/' ? <Linkto to='uniclos' className="mr-5 hover:text-gray-900">Уникальность</Linkto> : <Link href={'/'} className="mr-5 hover:text-gray-900">Уникальность</Link>}
      //          {asPath == '/' ? <Linkto to='reviews' className="mr-5 hover:text-gray-900">Отзывы</Linkto> : <Link href={'/'} className="mr-5 hover:text-gray-900">Отзывы</Link>}
      //          <Linkto to='contact' className="mr-5 hover:text-gray-900">Контакты</Linkto>
      //          <Link href={'/cart'} className="mr-5 hover:text-gray-900 relative"><Image src={CartImage} alt='cart-icon' /><div className='w-3 h-3 rounded-full bg-red-700 absolute top-3 text-white right-0 text-xs flex items-center justify-center'>{totalQuantities}</div></Link>
      //       </nav>
      //    </div>
      // </header>
