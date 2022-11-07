import { useRouter } from 'next/router';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Header/Header.module.scss'



const Layout = ({children}) => {
    const {asPath,back} = useRouter()
    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
            {asPath !== '/' && <div className='pl-[20px] md:pl-[40px] lg:pl-[80px] mb-5 md:mb-10 pt-5 md:pt-10 border-box'><span onClick={() => back()} className='cursor-pointer   text-gray-500'>Вернуться назад</span></div>}
            {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;