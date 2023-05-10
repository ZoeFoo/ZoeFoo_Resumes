import React from 'react';

const SelfIntroduction = ({ nickName, firstName, lastName, dateOfBorn, expectSalary, availability }) => {
    return (
        <div>
            <div>
                <p>
                    {nickName}
                </p>
            </div>

            <div>
                <p>
                    {lastName}, {firstName}
                </p>
            </div>

            <div>
                <p>
                    {dateOfBorn}
                </p>
            </div>

            <div>
                <p>Expected Salary:</p>
                <p>HKD {expectSalary}/ month</p>
            </div>

            <div>
                <p>Availability: {availability}</p>
            </div>
        </div>
    )
};

export default SelfIntroduction;