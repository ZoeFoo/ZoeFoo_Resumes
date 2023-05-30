import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCircle, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import ProjectExperiences from './ProjectExperiences';
import Modal from '@/components/Modal';

import apis from '@/services/apis';


const ResumesForm = () => {
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isFailed, setFailed] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        console.log({ data })
    }

    return (
        <div className="flex justify-center mt-[90px] p-5 print:mt-0 p-0 text-black">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='page flex flex-nowrap'>
                    <div className='flex flex-col justify-evenly w-2/5 bg-slate-100 px-[10px] text-center'>
                        <div>
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
                        </div>

                        <div>
                            <div className='px-[10px] tracking-[2px]'>
                                <div className='font-bold text-decoration text-xl'>
                                    PERSONAL QUALITIES
                                </div>
                            </div>

                            <div>
                                <TextArea
                                    register={register}
                                    labelName={"Personal Qualities"}
                                    idName={"qualities"}
                                    errors={errors}
                                    rows={"5"}
                                    cols={"29"} />
                            </div>
                        </div>

                        <div>
                            <div className='px-[50px]'>
                                <div className='font-bold text-decoration text-xl tracking-[2px]'>
                                    LANGUAGE
                                </div>
                            </div>

                            <div className="text-left">
                                <div className='flex flex-nowrap'>
                                    <div className='flex flex-col justify-center w-[50%] ps-[5%]'>
                                        Cantonese:
                                    </div>

                                    <div>
                                        <Input
                                            register={register}
                                            labelName={"Cantonese"}
                                            idName={"cantonese"}
                                            errors={errors} />
                                    </div>
                                </div>

                                <div className='flex flex-nowrap'>
                                    <div className='flex flex-col justify-center w-[50%] ps-[5%]'>
                                        English:
                                    </div>

                                    <div>
                                        <Input
                                            register={register}
                                            labelName={"English"}
                                            idName={"english"}
                                            errors={errors} />
                                    </div>
                                </div>

                                <div className='flex flex-nowrap'>
                                    <div className='flex flex-col justify-center w-[50%] ps-[5%]'>
                                        Mandarin:
                                    </div>

                                    <div>
                                        <Input
                                            register={register}
                                            labelName={"Mandarin"}
                                            idName={"mandarin"}
                                            errors={errors} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='px-[50px]'>
                                <div className='font-bold text-decoration text-xl tracking-[2px]'>
                                    CONTACT
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-center">
                                    <FontAwesomeIcon icon={faPhone} className='my-2 mx-2' />

                                    <div>
                                        <Input
                                            register={register}
                                            labelName={"Phone"}
                                            idName={"phone"}
                                            errors={errors} />
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <FontAwesomeIcon icon={faEnvelope} className='my-2 mx-2' />

                                    <div>
                                        <Input
                                            register={register}
                                            labelName={"Email"}
                                            idName={"email"}
                                            errors={errors} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between w-3/5 my-[10px] px-[25px] bg-white '>
                        <div>
                            <div className='text-decoration inline-block text-xl tracking-[2px] font-bold px-5'>
                                Hands-on Experiences
                            </div>

                            <div className='ps-6'>
                                <TextArea
                                    register={register}
                                    labelName={"Hands-on Experiences"}
                                    idName={"handsOnExperiences"}
                                    errors={errors}
                                    rows={8}
                                    cols={41} />
                            </div>
                        </div>

                        <div>
                            <div className='text-decoration inline-block text-xl font-bold tracking-[2px] px-5' >
                                Project Experiences
                            </div>

                            <div>
                                <div>
                                    <ProjectExperiences
                                        register={register}
                                        errors={errors} />
                                </div>

                                {isVisible && (<div>
                                    <ProjectExperiences
                                        register={register}
                                        errors={errors} />
                                </div>
                                )}

                                <div className='text-center'>
                                    <div onClick={() => { setIsVisible(true) }}>
                                        <FontAwesomeIcon
                                            icon={faSquarePlus}
                                            className='text-[40px] text-[#334155]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <button key={1} onClick={handleSubmit}
                        className='text-[20px] font-bold border-2 rounded-lg tracking-[10px] bg-slate-700 w-[100%] p-5 my-3 hover:bg-slate-500'>
                        Submit
                    </button>
                </div>
            </form>

            {isSuccessful && < div >
                <Modal
                    successful={true}
                    stateText={'Successful'} />
            </div>}

            {isFailed && < div >
                <Modal
                    successful={false}
                    stateText={'Account Already Exists'} />
            </div>}
        </div>
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

const TextArea = ({ register, labelName, idName, errors, rows, cols }) => {
    return (
        <div>
            <textarea {...register(`${idName}`, { required: false })}
                placeholder={labelName}
                rows={rows}
                cols={cols}
                className='text-black' />
            {errors[idName] && <p>This field is required</p>}
        </div>
    )
};

export default ResumesForm;