import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Education = ({ education: { name, dateStart, dateEnd, position } }) => {
    return (
        <div className='leading-snug my-7'>
            <div className='ps-2 flex flex-nowrap justify-center'>
                <div className='me-2'>
                    <FontAwesomeIcon
                        icon={faCircle}
                        className='w-[5px]' />
                </div>

                <div className=' font-semibold'>
                    {name}
                </div>
            </div>

            <div>
                {dateStart} - {dateEnd}
            </div>

            <div className=' text-center'>
                {position}
            </div>
        </div>
    )
};

export default Education;