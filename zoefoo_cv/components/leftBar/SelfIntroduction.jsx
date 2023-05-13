import React from 'react';

const SelfIntroduction = ({ nickName, firstName, lastName, dateOfBorn, expectSalary, availability }) => {
    return (
        <div className='text-center leading-loose'>
            <div>
                <div className='text-2xl font-bold'>
                    {nickName}
                </div>
            </div>

            <div class="grid">
                <div className='title text-decoration w-4/6 text-2xl pb-2 mb-4'>
                    {lastName}, {firstName}
                </div>
            </div>

            <div>
                <div>Date Of Birth:</div>
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