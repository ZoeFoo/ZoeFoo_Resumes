import React from 'react';

const PersonalQualities = ({ list }) => {
    return (
        <div className='text-center leading-loose'>
            <div className='px-[15px] tracking-[2px]'>
                <div className='font-bold text-decoration text-xl pb-2 mb-4'>
                    PERSONAL QUALITIES
                </div>
            </div>

            <div>
                <div>
                    {list}
                </div>
            </div>
        </div>
    )
};

export default PersonalQualities;