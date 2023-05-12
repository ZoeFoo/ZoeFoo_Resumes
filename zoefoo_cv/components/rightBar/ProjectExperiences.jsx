import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectExperiences = ({ projectName, purpose, techSkills }) => {
    const purposeResult = purpose.split('\n').map((sentence, i) => <p key={i}>{sentence}</p>);
    const techSkillsResult = techSkills.split('\n').map((skills, i) => <p key={i}>{skills}</p>);

    return (
        <div>
            <div>
                <h2>{projectName}</h2>
            </div>

            <div>
                <div className='flex flex-nowrap'>
                    <FontAwesomeIcon icon={faCircle} />
                    <p>Purpose:</p>
                </div>

                <div>
                    {purposeResult}
                </div>
            </div>

            <div>
                <div className='flex flex-nowrap'>
                    <FontAwesomeIcon icon={faCircle} />
                    <p>Tech Skills:</p>
                </div>

                <div>
                    <p>{techSkillsResult}</p>
                </div>
            </div>
        </div>
    )
};

export default ProjectExperiences;