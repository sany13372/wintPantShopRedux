import React, { useEffect } from 'react';
import { useState } from 'react';
import { useStateProducts } from '../../../providers/CartProvider';
import styles from './CheckBoxBlock.module.scss'

const CheckBoxBlock = () => {
    const {totalPrice,priceBox,zakazPrice,setPriceBox} = useStateProducts()
    const [val,setVal] = useState(135)
    const [selectedRb,setSelectedRb] = useState('radio1')

    useEffect (() => {
        setPriceBox( priceBox + totalPrice)
        zakazPrice(135)
    } ,[] );




    const isRadioSeelcted = (values) => selectedRb === values;

    const HandleRadioClick = (e) => setSelectedRb(e.currentTarget.value)
    
    const allvalue = (argus) => {
        setVal(argus)
        zakazPrice(val)
    }

    return (
    <div className=' pt-10 '>  
        <div className="decoration-left decoration-checkbox2 mb-6 footer-font" onClick={() => allvalue(135)} >
            <input id='1'  type='radio' value='radio1' onChange={HandleRadioClick}   name='zakaz' checked={isRadioSeelcted('radio1')} className="decoration-checkbox__input"/>
            <label htmlFor='1' className="decoration-checkbox__label">СДЕК по Санкт-Петербургу  - 135 ₽ (1-3 дня)</label>
        </div>
        <div className="decoration-left decoration-checkbox2 mb-6 footer-font" onClick={() => allvalue(120)} >
            <input id='2'  type='radio' value='radio2' onChange={HandleRadioClick}  name='zakaz' checked={isRadioSeelcted('radio2')} className="decoration-checkbox__input"/>
            <label htmlFor='2' className="decoration-checkbox__label">Почта России по Санкт-Петербургу - 120 ₽</label>
        </div>
        <div className="decoration-left decoration-checkbox2 mb-6 footer-font" onClick={() => allvalue(600)}  >
            <input id='3'  type='radio' value='radio3'onChange={HandleRadioClick}  checked={isRadioSeelcted('radio3')} name='zakaz' className="decoration-checkbox__input"/>
            <label htmlFor='3' className="decoration-checkbox__label">СДЕК  по России - 600 ₽</label>
        </div>
        <div className="decoration-left decoration-checkbox2 mb-6 footer-font" onClick={() => allvalue(350)}>
            <input id='4'  type='radio' value='radio4' name='zakaz' onChange={HandleRadioClick}  checked={isRadioSeelcted('radio4')} className="decoration-checkbox__input"/>
            <label htmlFor='4' className="decoration-checkbox__label">Почта России  по России - 350 ₽</label>
        </div>
        <h3 className='mt-28 text-right mb-1 max-[800px]:hidden footer-font'>Итого к оплате</h3>
        <h4 className='text-right max-[800px]:hidden footer-font'>{priceBox} ₽</h4>
    </div>
    );
};

export default CheckBoxBlock;