import React from 'react';
import Link from 'next/link';

const NavigationBar = () => {
    return (
        <div className='relative text-white'>
            <div className='flex justify-end'>
                <div>
                    <Link href='/createResumes'
                        className='text-[20px] font-bold tracking-[5px] inline-block mx-[50px] my-3 p-3 border-2 rounded-md border-white hover:bg-white/30'>
                        Create Resumes
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default NavigationBar;