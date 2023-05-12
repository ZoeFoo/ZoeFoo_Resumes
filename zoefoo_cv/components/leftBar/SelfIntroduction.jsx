import React from 'react';

const SelfIntroduction = ({ nickName, firstName, lastName, dateOfBorn, expectSalary, availability }) => {
    return (
        <div>
            <div>
                <div>
                    {nickName}
                </div>
            </div>

            <div>
                <div>
                    {lastName}, {firstName}
                </div>
            </div>

            <div>
                <div>
                    {dateOfBorn}
                </div>
            </div>

            <div>
                <div>Expected Salary:</div>
                <div>HKD {expectSalary}/ month</div>
            </div>

            <div>
                <div>Availability: {availability}</div>
            </div>
        </div>
    )
};

export default SelfIntroduction;