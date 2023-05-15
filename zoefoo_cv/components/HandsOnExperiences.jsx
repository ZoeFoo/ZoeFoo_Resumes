import React from 'react';

const HandsOnExperiences = ({ list }) => {
    return (
        <div className='leading-loose'>
            <div className='inline-block tracking-[2px]'>
                <div className='text-decoration text-xl font-bold px-5 pb-2 mb-4'>
                    Hands-on Experiences
                </div>
            </div>

            <div className='ms-5 tracking-[1px]'>
                <div>
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