import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { useModal } from '../../../../hooks/useModal';
import clsIcon from '../../../../assets/img/close.svg'

const Modal = ({ showModalone, showModaltwo, showModalthree, close}) => {

return (
    <>
        {showModalone &&       
            <div onClick={() => close()} className='fixed top-0 bottom-0 left-0 right-0 bg-slate-500/[0.3] px-[10px] border-box overflow-x-auto'>
                <div onClick={(e) => e.stopPropagation()} className='block max-w-[800px] min-w-[700px] mx-auto mt-[30vh] bg-white py-[30px]'>
                    <div className='flex justify-between align-center mb-[25px] px-[40px] border-box'>
                        <h4 className='table-title text-xs md:text-base'>Таблица размеров</h4>
                    <Image
                        className='md:w-[20px] hover:opacity-[0.7] hover:cursor-pointer ease-in'
                        onClick={() => {
                            close()
                        }}
                        src={clsIcon}
                        width={15}
                        height={15}
                        alt='close-button' />
                    </div>
                    <div className='flex justify-between align-center px-[40px] mb-[16px] border-box'>
                        <p className='text-[11px] md:text-base text-[#909090] text-left w-[12%]'>Размер</p>
                        <p className='text-[11px] md:text-base text-[#909090] text-left w-[24%]'>Обхват пояса (см)</p>
                        <p className='text-[11px] md:text-base text-[#909090] text-left w-[24%]'>Обхват бёдер (см)</p>
                        <p className='text-[11px] md:text-base text-[#909090] text-left w-[24%]'>Обхват бедра ноги (см)</p>
                        <p className='text-[11px] md:text-base text-[#909090] text-left w-[12%]'>Длина (см)</p>
                    </div>
                    <div className='flex justify-between align-center px-[40px] py-[13px] bg-[#F7F7F7] border-box'>
                        <p className='text-[11px] md:text-base text-left text-left w-[12%]'>S</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[24%]'>66</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[24%]'>94</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[24%]'>56</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[12%]'>33</p>
                    </div>
                    <div className='flex justify-between align-center px-[40px] py-[13px] border-box'>
                        <p className='text-[11px] md:text-base text-left text-left w-[12%]'>M</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[24%]'>69</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[24%]'>100</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[24%]'>61</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[12%]'>34</p>
                    </div>
                    <div className='flex justify-between align-center px-[40px] py-[13px] bg-[#F7F7F7] border-box'>
                        <p className='text-[11px] md:text-base text-left text-left w-[12%]'>L</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[24%]'>72</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[24%]'>106</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[24%]'>64</p>
                        <p className='text-[11px] md:text-base text-left text-left w-[12%]'>36</p>
                    </div>
                </div>
            </div>    
        }

        {showModaltwo && 
            <div onClick={() => close()} className='fixed top-0 bottom-0 left-0 right-0 bg-slate-500/[0.3] px-[10px] border-box overflow-x-auto'>
                <div onClick={(e) => e.stopPropagation()} className='block max-w-[800px] min-w-[700px] mx-auto mt-[15vh] bg-white py-[30px]'>
                    <div className='flex justify-between align-center mb-[25px] px-[40px] border-box'>
                        <h4 className='table-title text-xs md:text-base'>Таблица размеров</h4>
                    <Image
                        className='md:w-[20px] hover:opacity-[0.7] hover:cursor-pointer ease-in'
                        onClick={() => {
                            close()
                        }}
                        src={clsIcon}
                        width={15}
                        height={15}
                        alt='close-button' />
                    </div>
                    <div className='flex justify-between align-center px-[40px] mb-[16px] border-box'>
                        <p className='text-[11px] md:text-base text-[#909090] text-left w-[12%]'>Размер</p>
                        <p className='text-[11px] md:text-base text-[#909090] text-left w-[24%]'>Обхват пояса (см)</p>
                        <p className='text-[11px] md:text-base text-[#909090] text-left w-[24%]'>Обхват бёдер (см)</p>
                        <p className='text-[11px] md:text-base text-[#909090] text-left w-[24%]'>Обхват бедра ноги (см)</p>
                        <p className='text-[11px] md:text-base text-[#909090] text-left w-[12%]'>Длина (см)</p>
                    </div>
                    <div className='flex justify-between align-center px-[40px] py-[13px] bg-[#F7F7F7] border-box'>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>S</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>70</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>100</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>57</p>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>34</p>
                    </div>
                    <div className='flex justify-between align-center px-[40px] py-[13px] border-box'>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>M</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>73</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>106</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>60</p>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>37</p>
                    </div>
                    <div className='flex justify-between align-center px-[40px] py-[13px] bg-[#F7F7F7] border-box'>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>L</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>78</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>112</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>64</p>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>38</p>
                    </div>
                    <div className='flex justify-between align-center px-[40px] py-[13px] border-box'>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>XL</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>82</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>116</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>66</p>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>39</p>
                    </div>
                    <div className='flex justify-between align-center px-[40px] py-[13px] bg-[#F7F7F7] border-box'>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>XXL</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>86</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>120</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>68</p>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>41</p>
                    </div>
                    <div className='flex justify-between align-center px-[40px] py-[13px] border-box'>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>3XL</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>91</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>124</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>70</p>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>42</p>
                    </div>
                    <div className='flex justify-between align-center px-[40px] py-[13px] bg-[#F7F7F7] border-box'>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>4XL</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>95</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>130</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>74</p>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>44</p>
                    </div>
                    <div className='flex justify-between align-center px-[40px] py-[13px] border-box'>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>5XL</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>98</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>136</p>
                        <p className='text-[11px] md:text-base text-left w-[24%]'>76</p>
                        <p className='text-[11px] md:text-base text-left w-[12%]'>45</p>
                    </div>
                </div>
            </div>
        }


        {showModalthree && 
        <div onClick={() => close()} className='fixed top-0 bottom-0 left-0 right-0 bg-slate-500/[0.3] px-[10px] border-box overflow-x-auto'>
            <div onClick={(e) => e.stopPropagation()} className='block max-w-[800px] min-w-[700px] mx-auto mt-[35vh] bg-white py-[30px]'>
                <div className='flex justify-between align-center mb-[25px] px-[40px] border-box'>
                    <h4 className='table-title text-xs md:text-base'>Таблица размеров</h4>
                <Image
                    className='md:w-[20px] hover:opacity-[0.7] hover:cursor-pointer ease-in'
                    onClick={() => {
                        close()
                    }}
                    src={clsIcon}
                    width={15}
                    height={15}
                    alt='close-button' />
                </div>
                <div className='flex justify-between align-center px-[40px] mb-[16px] border-box'>
                    <p className='text-[11px] md:text-base text-[#909090] w-[40%] text-left'>Размер</p>
                    <p className='text-[11px] md:text-base text-[#909090] w-[40%] text-left'>Высота (см)</p>
                    <p className='text-[11px] md:text-base text-[#909090] w-[20%] text-left'>Длина (см)</p>
                </div>
                <div className='flex justify-between align-center px-[40px] py-[13px] bg-[#F7F7F7] border-box'>
                    <p className='text-[11px] md:text-base text-left w-[40%]'>S/M</p>
                    <p className='text-[11px] md:text-base text-left w-[40%]'>32</p>
                    <p className='text-[11px] md:text-base text-left w-[20%]'>63</p>
                </div>
                <div className='flex justify-between align-center px-[40px] py-[13px] border-box'>
                    <p className='text-[11px] md:text-base text-left w-[40%]'>L/XL</p>
                    <p className='text-[11px] md:text-base text-left w-[40%]'>32</p>
                    <p className='text-[11px] md:text-base text-left w-[20%]'>67</p>
                </div>

            </div>
        </div>
        }
    </>
    )
};

export default Modal;