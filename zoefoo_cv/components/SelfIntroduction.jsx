import React from 'react';

const SelfIntroduction = ({
    person: { nickName, firstName, lastName, dateOfBirth, expectedSalary, availability }
}) => {
    return (
        <div className='text-center leading-loose'>
            <div>
                <div className='text-2xl font-bold'>
                    {nickName}
                </div>
            </div>

            <div className="px-[50px]">
                <div className='font-bold text-decoration text-2xl pb-2 mb-4'>
                    {lastName}, {firstName}
                </div>
            </div>

            <div className="text-left px-[20px]">
                <div className="flex justify-between">
                    <span className="font-semibold">
                        Date Of Birth:
                    </span>

                    {dateOfBirth}
                </div>

                <div className="flex justify-between">
                    <span className="font-semibold">
                        Expected Salary:
                    </span>

                    HKD {expectedSalary.toLocaleString("en-US")}
                </div>

                <div className="flex justify-between">
                    <span className="font-semibold">
                        Availability:
                    </span>

                    {availability}
                </div>
            </div>
        </div>
    )
};

export default SelfIntroduction;