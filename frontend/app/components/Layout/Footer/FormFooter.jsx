import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validEmail } from '../../../shared/regex';
import FielFooter from '../../UI/FielFooter/FielFooter';
import emailjs from '@emailjs/browser'
import { EmailServices } from '../../../services/Email.services';
const FormFooter = () => {
   const { register, handleSubmit, formState: { errors }, reset } = useForm()
   const [newqus, setNewqus] = useState(false)
   const submitFooter = (data) => {
      EmailServices.sendEmail(data)
      reset()
      setNewqus(true)
   }
   return (
      <form className='p-[25px] lg:p-[30px] bg-[#181818] md:mt-[-15px] lg:mt-[-30px]' onSubmit={handleSubmit(submitFooter)}>
         {newqus ?
            <div className='flex flex-col justify-center items-center'>
               <h3 className='text-white mt-36 mb-24 text-center  text-xs lg:text-base'>Ваша заявка отправлена.<br /> В скором времени мы вам ответим</h3>
               <div onClick={() => setNewqus(false)} className=' w-40 h-9 flex items-center justify-center bg-[#f5f5f5] text-gray-900 text-xs lg:text-base hover:bg-gray-300 transition duration-150 ease-out hover:ease-in'>Создать новую</div>
            </div> : (
               <>
                  <legend className='text-white text-xs lg:text-base'>
                     Остались вопросы, заполните форму и мы свяжемся с вами
                  </legend>
                  <fieldset>
                     <FielFooter placeholder='Ваше имя' error={errors?.namefooter} {...register("namefooter", { required: 'Поле обязательно к заполнению!' })} />
                     <FielFooter placeholder='Номер телефона' type='number' error={errors?.telephonefooter} {...register("telephonefooter", { required: 'Поле обязательно к заполнению!' })} />
                     <FielFooter placeholder='Email' error={errors?.emailfooter} {...register("emailfooter", { required: 'Поле обязательно к заполнению!', pattern: { value: validEmail, message: 'Не корректная почта!' } })} />
                     <textarea type='text' name='name' {...register('comments')} className='bg-[#1e1e1e] text-[#909090] pl-[15px] pt-[10px] pb-[50px] min-w-[100%] mt-[10px]' placeholder='Ваш вопрос' />
                     <button type="submit" className='mt-[10px] px-[32px] py-[10px] bg-[#f5f5f5] text-gray-900 text-xs lg:text-base hover:bg-gray-300 transition duration-150 ease-out hover:ease-in'>Отправить</button>
                  </fieldset>
               </>
            )}
      </form>
   );
};

export default FormFooter;