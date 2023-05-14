import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Education = ({ graduationFrom, dateFrom, dateEnd, graduationPosition }) => {
    return (
        <div>
            <div>
                <div>
                    <FontAwesomeIcon
                        icon={faCircle}
                        style={{ width: 5 }} />
                </div>

                <div>{graduationFrom}</div>

                <div>
                    ({dateFrom} - {dateEnd})
                </div>
            </div>

            <div>
                {graduationPosition}
            </div>
        </div>
    )
};

export default Education;