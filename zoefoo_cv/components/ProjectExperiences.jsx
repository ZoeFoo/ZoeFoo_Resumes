import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectExperiences = ({ project: { name, purpose, skills, link } }) => {
    //const purposeResult = purpose.split('\n').map((sentence, i) => <div key={i}>{sentence}</div>);

    return (
        <div className='leading-snug my-5'>
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