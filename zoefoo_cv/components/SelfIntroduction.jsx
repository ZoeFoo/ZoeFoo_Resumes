import React from 'react';

const SelfIntroduction = ({person, register, errors}) => {
    return (
        person? (<div className='text-center leading-loose'>
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
        </div>)
            : (<div>
                <div className='text-xl font-bold '>
                    <Input
                        register={register}
                        labelName={"Nick Name"}
                        idName={"nickName"}
                        errors={errors} />
                </div>

                <div className='flex flex-nowrap font-bold text-decoration text-xl'>
                    <div className="pe-[5px]">
                        <Input
                            register={register}
                            labelName={"Last Name"}
                            idName={"lastName"}
                            errors={errors} />
                    </div>

                    <div className="ps-[5px]">
                        <Input
                            register={register}
                            labelName={"First Name"}
                            idName={"firstName"}
                            errors={errors} />
                    </div>
                </div>

                <div className="text-left">
                    <div className="flex flex-nowrap">
                        <div className="flex flex-col justify-center font-semibold w-[70%]">
                            Date Of Birth:
                        </div>

                        <div>
                            <Input
                                register={register}
                                labelName={"Date Of Birth"}
                                idName={"dateOfBirth"}
                                errors={errors} />
                        </div>
                    </div>

                    <div className="flex flex-nowrap">
                        <div className="flex flex-col justify-center font-semibold w-[70%]">
                            Expected Salary:
                        </div>

                        <div>
                            <Input
                                register={register}
                                labelName={"Expected Salary"}
                                idName={"expectedSalary"}
                                errors={errors} />
                        </div>
                    </div>

                    <div className="flex flex-nowrap">
                        <div className="flex flex-col justify-center font-semibold w-[70%]">
                            Availability:
                        </div>

                        <Input
                            register={register}
                            labelName={"Availability"}
                            idName={"availability"}
                            errors={errors} />
                    </div>
                </div>
            </div>)
    )
};

const Input = ({ register, labelName, idName, errors }) => {
    return (
        <div>
            <input {...register(`${idName}`, { required: false })}
                placeholder={labelName} />
            {errors[idName] && <p>This field is required</p>}
        </div>
    )
};

export default SelfIntroduction;