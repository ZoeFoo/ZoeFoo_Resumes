import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = ({work:{ name, dateStart, dateEnd, position }}) => {
    return (
        <div className='leading-loose'>
            <div className='flex flex-wrap'>
                <div>
                    <FontAwesomeIcon
                        icon={faCircle}
                        style={{ width: 5 }} />
                </div>

                <div className='font-semibold ps-7 pe-3'>
                    {name}
                </div>

                <div>
                    ({dateStart} - {dateEnd})
                </div>
            </div>

            <div className='flex flex-wrap'>
                <div className='ps-8 pe-2'>
                    Position:
                </div>

                <div>
                    {position}
                </div>
            </div>
        </div>
    )
};

export default WorkExperience;