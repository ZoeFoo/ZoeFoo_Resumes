import React from 'react';

const Info = ({info:{ expectedSalary, availability }}) => {
    return (
        <div className='mx-[25px]'>
            <div className="flex justify-between">
                <div className="font-semibold">
                    Expected Salary:
                </div>

                HKD {expectedSalary.toLocaleString("en-US")}
            </div>

            <div className="flex justify-between">
                <div className="font-semibold">
                    Availability:
                </div>

                {availability}
            </div>
        </div>
    )
};

export default Info;






