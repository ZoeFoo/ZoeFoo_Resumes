import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectExperiences = ({ projectName, purpose, techSkills }) => {
    const purposeResult = purpose.split('\n').map((sentence, i) => <div key={i}>{sentence}</div>);
    const techSkillsResult = techSkills.split('\n').map((skills, i) => <div key={i}>{skills}</div>);

    return (
        <div>
            <div>
                <h2>{projectName}</h2>
            </div>

            <div>
                <div className='flex flex-nowrap'>
                    <FontAwesomeIcon icon={faCircle} />
                    <div>Purpose:</div>
                </div>

                <div>
                    {purposeResult}
                </div>
            </div>

            <div>
                <div className='flex flex-nowrap'>
                    <FontAwesomeIcon icon={faCircle} />
                    <div>Tech Skills:</div>
                </div>

                <div>
                    <div>{techSkillsResult}</div>
                </div>
            </div>
        </div>
    )
};

export default ProjectExperiences;