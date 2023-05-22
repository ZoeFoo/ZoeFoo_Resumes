import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = ({ work: { name, dateStart, dateEnd, position, Responsibilities } }) => {
    return (
        <div className=''>
            <div className='flex flex-wrap'>
                <div>
                    <FontAwesomeIcon
                        icon={faCircle}
                        className='w-[5px]' />
                </div>

                <div className='font-semibold ps-7'>
                    {name}
                </div>

                <div className='ps-8'>
                    ({dateStart} - {dateEnd})
                </div>
            </div>

            <div className='flex flex-wrap'>
                <div className='ps-8 pe-2 font-semibold'>
                    Position:
                </div>

                <div>
                    {position}
                </div>
            </div>

            <div className='flex flex-wrap'>
                <div className='ps-8 pe-2 font-semibold'>
                    Position:
                </div>

                <div className='ps-8'>
                    {
                        Responsibilities.map((responsibility, i) => (
                            <div key={i}>{responsibility}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default WorkExperience;