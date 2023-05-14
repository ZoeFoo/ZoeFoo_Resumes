import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = ({ companyName, dateFrom, dateEnd, position }) => {
    return (
        <div>
            <div>
                <div>
                    <FontAwesomeIcon
                        icon={faCircle}
                        style={{ width: 5 }} />
                </div>

                <div>{companyName}</div>

                <div>
                    ({dateFrom} - {dateEnd})
                </div>
            </div>

            <div>
                <div>Position: </div>

                <div>
                    {position}
                </div>
            </div>
        </div>
    )
};

export default WorkExperience;