import React from 'react';

const HandsOnExperiences = ({ list }) => {
    return (
        <div className='leading-snug'>
            <div className='inline-block tracking-[2px]'>
                <div className='text-decoration text-xl font-bold mb-2 px-5'>
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