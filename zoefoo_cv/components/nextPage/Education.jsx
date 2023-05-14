import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Education = ({ graduationFrom, dateFrom, dateEnd, graduationPosition }) => {
    return (
        <div className='leading-loose'>
            <div className='flex flex-nowrap'>
                <div>
                    <FontAwesomeIcon
                        icon={faCircle}
                        style={{ width: 5 }} />
                </div>

                <div className='ps-7 pe-3 text-lg font-bold'>
                    {graduationFrom}
                </div>

                <div>
                    ({dateFrom} - {dateEnd})
                </div>
            </div>

            <div className='ps-8'>
                {graduationPosition}
            </div>
        </div>
    )
};

export default Education;