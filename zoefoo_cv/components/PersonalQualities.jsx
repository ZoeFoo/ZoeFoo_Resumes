import React from 'react';

const PersonalQualities = ({ list }) => {
    return (
        <div className='text-center leading-loose'>
            <div className='px-[20px]'
                style={{ letterSpacing: 1 }}>
                <div className='font-bold text-decoration text-xl pb-2 mb-4'>
                    PERSONAL QUALITIES
                </div>
            </div>

            <div>
                <div>
                    {
                        list.map((character, i) => (
                            <div key={i}>{character}</div>)
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default PersonalQualities;