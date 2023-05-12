import React from 'react';

const SelfIntroduction = ({ nickName, firstName, lastName, dateOfBorn, expectSalary, availability }) => {
    return (
        <div className='text-center'>
            <div>
                <div className='text-2xl font-bold'>
                    {nickName}
                </div>
            </div>

            <div class="grid justify-items-stretch">
                <div className='w-3/5 justify-self-center text-2xl font-bold border-b-2 border-slate-400 drop-shadow-md'>
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