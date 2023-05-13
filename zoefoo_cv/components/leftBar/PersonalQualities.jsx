import React from 'react';

const PersonalQualities = ({ characterList }) => {
    const characters = characterList.split('\n').map((character, i) => <div key={i}>{character}</div>);
    return (
        <div className='text-center leading-loose'>
            <div className='grid'
                style={{ letterSpacing: 1 }}>
                <div className='titleCenter text-decoration w-5/6 text-xl pb-2 mb-4'>PERSONAL QUALITIES</div>
            </div>

            <div>
                <div>{characters}</div>
            </div>
        </div>
    )
};

export default PersonalQualities;