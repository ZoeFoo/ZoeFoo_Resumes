import React from 'react';

const HandsOnExperiences = ({ skillList }) => {
    const skills = skillList.split('\n').map((skill, i) => <div key={i}>{skill}</div>);
    return (
        <div className='leading-loose'>
            <div>
                <div className='titleCenter text-decoration text-xl pb-2 mb-4'
                    style={{ width: 330,letterSpacing: 2 }}
                >Hands-on Experiences</div>
            </div>

            <div className='ms-3'>
                <div style={{ letterSpacing:1 }}>{skills}</div>
            </div>
        </div>
    )
};

export default HandsOnExperiences;