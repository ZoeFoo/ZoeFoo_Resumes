import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectExperiences = ({ project: { name, purpose, skills, link } }) => {
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
                    {purpose}
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
                        {skills}
                    </div>
                </div>
            </div>

            {link ?
                (<div>
                    <div className='flex flex-nowrap'>
                        <div>
                            <FontAwesomeIcon
                                icon={faCircle}
                                className='w-[5px]' />
                        </div>

                        <div className='ps-4'>
                            GitHub:
                        </div>
                    </div>

                    <div>
                        <div className='ps-6'>
                            <a href={link}
                                target="_blank"
                                className='text-blue-700 hover:underline'>
                                {link}
                            </a>
                        </div>
                    </div>
                </div>)
                : null
            }
        </div>
    )
};

export default ProjectExperiences;