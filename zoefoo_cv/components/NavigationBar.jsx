import React, { useState } from 'react';
import RegisterForm from '@/components/RegisterForm';

const NavigationBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className='relative text-white'>
            <div className='flex justify-end'>
                <div>
                    <button onClick={() => { setIsVisible(true) }}
                        className='text-[20px] font-bold tracking-[5px] inline-block mx-[50px] my-3 p-3 border-2 rounded-md border-white hover:bg-white/30'>
                        Register
                    </button>
                </div>
            </div>

            {isVisible && <div className='absolute w-screen h-screen bg-gradient-to-b from-gray-700 to-white'>
                <RegisterForm
                    setIsVisible={setIsVisible} />
            </div>}
        </div>
    )
};

export default NavigationBar;