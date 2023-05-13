import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectExperiences = ({ projectName, purpose, techSkills }) => {
    const purposeResult = purpose.split('\n').map((sentence, i) => <div key={i}>{sentence}</div>);
    const techSkillsResult = techSkills.split('\n').map((skills, i) => <div key={i}>{skills}</div>);

    return (
        <div className='leading-loose ps-6'>
            <div>
                <div className='rightBarTitle text-lg'>{projectName}</div>
            </div>

            <div>
                <div className='flex flex-nowrap'>
                    <div className='-ms-4'>
                        <FontAwesomeIcon
                            icon={faCircle}
                            style={{ width: 5 }} />
                    </div>
                    <div className='ps-3'>Purpose:</div>
                </div>

                <div>
                    {purposeResult}
                </div>
            </div>

            <div>
                <div className='flex flex-nowrap'>
                    <div className='-ms-4'>
                        <FontAwesomeIcon
                            icon={faCircle}
                            style={{ width: 5 }} />
                    </div>
                    <div className='ps-3'>Tech Skills:</div>
                </div>

                <div>
                    <div>{techSkillsResult}</div>
                </div>
            </div>
        </div>
    )
};

export default ProjectExperiences;