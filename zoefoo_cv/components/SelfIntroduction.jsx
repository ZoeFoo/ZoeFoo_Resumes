import React from 'react';

const SelfIntroduction = ({ person }) => {
    return (
        <div className='text-center leading-loose'>
            <div>
                <div className='text-2xl font-bold'>
                    {person.nickName}
                </div>
            </div>

            <div className="px-[50px]">
                <div className='font-bold text-decoration text-2xl pb-2 mb-4'>
                    {person.lastName}, {person.firstName}
                </div>
            </div>

            <div className="text-left px-[20px]">
                <div className="flex justify-between">
                    <span className="font-semibold">
                        Date Of Birth:
                    </span>

                    {person.dateOfBirth}
                </div>

                <div className="flex justify-between">
                    <span className="font-semibold">
                        Expected Salary:
                    </span>

                    HKD {person.expectedSalary.toLocaleString("en-US")}
                </div>

                <div className="flex justify-between">
                    <span className="font-semibold">
                        Availability:
                    </span>

                    {person.availability}
                </div>
            </div>
        </div>
    )
};

export default SelfIntroduction;