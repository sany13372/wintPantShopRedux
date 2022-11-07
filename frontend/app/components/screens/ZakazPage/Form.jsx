import React, { useEffect } from 'react';
import { useStateProducts } from '../../../providers/CartProvider';

import Field from '../../UI/Input/Input';

import { useForm } from 'react-hook-form'
import { validEmail } from '../../../shared/regex';
import styles from './Form.module.scss'
import cn from 'classnames'

const Form = () => {
    const { priceBox } = useStateProducts()
    const { register, handleSubmit, formState: { errors }, reset,watch,getValues,setValue,setError} = useForm()

    useEffect(() => {
        setValue('country','Россия')
    },[])
    const submitForm = (data) => {
        const country = getValues('country');
        if (country !== 'Россия') {
            setError('country', { type: 'custom', message: 'Только Россия' });
            return false
        }
        reset()
    }
    return (
        <form className='max-[767px]:order-2 w-[100%]' onSubmit={handleSubmit(submitForm)}>
            <fieldset>
                <div className={cn(['flex gap-2 max-[600px]:flex-wrap'],[styles.item])}>
                    <div className='flex flex-col'>
                        <Field placeholder='Ф.И.О.*' type='text' error={errors?.name} {...register("name", { required: 'Поле обязательно к заполнению!' })} />
                        <Field placeholder='Email*' type='text' error={errors.email} {...register('email', {
                            required: 'Поле не заполено!',
                            pattern: { value: validEmail, message: 'Не корректная почта!' }
                        })} />
                        <Field placeholder='Город/населённый пункт*' type='text' error={errors.sity} {...register('sity', {
                            required: 'Поле обязательно к заполнению!'
                        })} />
                        <Field placeholder='Индекс*' type='text' error={errors.ind} {...register('ind', {
                            required: 'Поле обязательно к заполнению!'
                        })} />
                    </div>
                    <div className='flex flex-col '>
                        <Field placeholder='Телефон*' type='number' error={errors.telephone} {...register('telephone', {
                            required: 'Поле обязательно к заполнению!'
                        })} />
                        <Field placeholder='Страна**' type='text' error={errors.country}  {...register('country', {
                            required: 'Поле не заполено!',
                            pattern:{
                                value:'Россия',
                                message:'Только Россия'
                            }
                        })} />
                        <Field placeholder='Адрес для доставки*' type='text' error={errors.address} {...register('address', {
                            required: 'Поле обязательно к заполнению!'
                        })} />
                        <Field placeholder='Комментарий для менеджера' type='text'  {...register('comment')} />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <button type="submit" className='max-[600px] w-48 h-12 flex items-center justify-center bg-[#141414] text-white text-xs lg:text-base hover:bg-gray-300 transition duration-150 ease-out hover:ease-in'>Перейти к оплате</button>
                    <div>
                        <h3 className='mt-2 hidden text-right mb-1 max-[800px]:block footer-font'>Итого к оплате</h3>
                        <h4 className=' text-right hidden max-[800px]:block footer-font'>{priceBox} ₽</h4>
                    </div>
                </div>
            </fieldset>
        </form>
    );
};

export default Form;