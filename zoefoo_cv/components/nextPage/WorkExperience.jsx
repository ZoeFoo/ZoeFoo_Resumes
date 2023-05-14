import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = ({ companyName, dateFrom, dateEnd, position }) => {
    return (
        <div className='leading-loose'>
            <div className='flex flex-wrap'>
                <div>
                    <FontAwesomeIcon
                        icon={faCircle}
                        style={{ width: 5 }} />
                </div>

                <div className='rightBarTitle ps-6 pe-3'>{companyName}</div>

                <div>
                    ({dateFrom} - {dateEnd})
                </div>
            </div>

            <div className='flex flex-wrap'>
                <div className='ps-7'>Position: </div>

                <div>
                    {position}
                </div>
            </div>
        </div>
    )
};

export default WorkExperience;