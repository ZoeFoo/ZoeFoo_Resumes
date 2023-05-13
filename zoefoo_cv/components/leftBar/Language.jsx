import React from 'react';

const Language = ({ cantonese, english, mandarin }) => {
    return (
        <div className='text-center leading-loose'>
            <div className='grid'>
                <div className='titleCenter text-decoration w-4/5 text-2xl pb-2 mb-4'
                    style={{ letterSpacing: 8 }}
                >LANGUAGE</div>
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