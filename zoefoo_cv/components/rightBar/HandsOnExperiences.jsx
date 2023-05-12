import React from 'react';

const HandsOnExperiences = ({ skillList }) => {
    const skills = skillList.split('\n').map((skill,i) => <div key={i}>{skill}</div>);
    return (
        <div>
            <div>
                <h2>Hands-on Experiences</h2>
            </div>

            <div>
                <div>{skills}</div>
            </div>
        </div>
    )
};

export default HandsOnExperiences;