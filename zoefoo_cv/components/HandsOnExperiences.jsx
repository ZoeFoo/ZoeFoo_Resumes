import React from 'react';

const HandsOnExperiences = ({ list }) => {
    return (
        <div className='leading-loose'>
            <div className='inline-block'
                style={{ letterSpacing: 2 }}>
                <div className='text-decoration text-xl font-bold px-5 pb-2 mb-4'>
                    Hands-on Experiences
                </div>
            </div>

            <div className='ms-5'>
                <div style={{ letterSpacing: 1 }}>
                    {
                        list.map((skill, i) => (
                            <div key={i}>{skill}</div>)
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default HandsOnExperiences;