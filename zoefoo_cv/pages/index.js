import React from 'react';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
    return (
        <div className='h-screen flex items-center flex-col justify-center text-white bg-gradient-to-b from-gray-700 to-white'>
            <div className='text-center text-[70px] font-bold'>
                Welcome
            </div>

            <div className='w-full'>
                <RegisterForm />
            </div>
        </div>
    )
};