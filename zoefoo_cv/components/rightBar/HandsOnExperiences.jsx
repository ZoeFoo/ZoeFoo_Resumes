import React from 'react';

const HandsOnExperiences = ({ skillList }) => {
    const skills = skillList.split('\n').map((str,i) => <p key={i}>{str}</p>);
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