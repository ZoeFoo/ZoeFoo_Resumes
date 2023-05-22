import React from 'react';

const Modal = ({ successful, stateText }) => {
    const successfullImg = '/successfull.gif';
    const failed = '/failed.gif'

    return (
        <div className='fixed flex items-center top-0 w-full h-full bg-black bg-opacity-50 '>
            <div className='h-[40%] flex justify-center flex-col bg-white rounded-[20px] px-[30px] mx-auto '>
                <div className='mx-auto'>
                    <img src={successful ? successfullImg : failed }
                        className='w-[200px]' />
                </div>

                <div className='mx-auto text-center text-[30px] tracking-[10px] text-[#aeaeae] font-bold mt-[40px]'>
                    {stateText}
                </div>
            </div>
        </div>
    )
};

export default Modal;