import React from 'react';

const Language = ({ languages: { cantonese, english, mandarin } }) => {
    return (
        <div className='text-center leading-loose'>
            <div className='px-[50px]'>
                <div className='font-bold text-decoration text-xl tracking-[2px] pb-2 mb-4'>
                    LANGUAGE
                </div>
            </div>

            <div>
                <div>Cantonese: {cantonese}</div>
            </div>

            <div>
                <div>English: {english}</div>
            </div>

            <div>
                <div>Mandarin: {mandarin}</div>
            </div>
        </div>
    )
}

export default Language;