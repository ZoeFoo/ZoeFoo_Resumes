import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectExperiences = ({ project: { name, purpose, skills } }) => {
    const purposeResult = purpose.split('\n').map((sentence, i) => <div key={i}>{sentence}</div>);

    return (
        <div className='leading-loose pt-4'>
            <div>
                <div className='text-lg font-semibold ps-5'>
                    {name}
                </div>
            </div>

            <div>
                <div className='flex flex-nowrap'>
                    <div>
                        <FontAwesomeIcon
                            icon={faCircle}
                            className='w-[5px]' />
                    </div>

                    <div className='ps-4'>
                        Purpose:
                    </div>
                </div>

                <div className='ps-6'>
                    {purposeResult}
                </div>
            </div>

            <div>
                <div className='flex flex-nowrap'>
                    <div>
                        <FontAwesomeIcon
                            icon={faCircle}
                            className='w-[5px]' />
                    </div>

                    <div className='ps-4'>
                        Tech Skills:
                    </div>
                </div>

                <div>
                    <div className='ps-6'>
                        {
                            skills.map((skill, i) => (
                                <div key={i}>{skill}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectExperiences;