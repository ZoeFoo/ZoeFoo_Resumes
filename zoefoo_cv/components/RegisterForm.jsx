import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import api from '@/services';

const RegisterForm = ({ setIsVisible }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        await api.createAccount(data);
    };

    return (
        <div className='text-white'>
            <div className='text-end my-5 mx-[50px]'>
                <button onClick={() => { setIsVisible(false) }}>
                    <FontAwesomeIcon icon={faSquareXmark} className='text-[50px]' />
                </button>
            </div>

            <div className='flex flex-col item-center leading-loose'>
                <div className='text-center text-[40px] font-bold m-5'>
                    Register
                </div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Input
                                register={register}
                                labelName={"Email"}
                                errors={errors} />
                        </div>

                        <div>
                            <Input
                                register={register}
                                labelName={"Password"}
                                errors={errors} />
                        </div>

                        <div>
                            <Input
                                register={register}
                                labelName={"First Name"}
                                errors={errors} />
                        </div>

                        <div>
                            <Input
                                register={register}
                                labelName={"Last Name"}
                                errors={errors} />
                        </div>

                        <button onClick={handleSubmit}
                            className='text-[20px] font-bold border-2 rounded-lg tracking-[10px] bg-slate-700 w-[100%] p-5 my-3 hover:bg-slate-500'>
                            Submit
                        </button>
                    </form>
                </div>

            </div>

        </div>
    );
};

const Input = ({ register, labelName, errors }) => {
    return (
        <div>
            <label className='text-[20px] font-bold tracking-[5px]'>{labelName}</label>
            <input {...register(`${labelName}`, { required: true })}
                className='text-black' />
            {errors[labelName] && <p>This field is required</p>}
        </div>
    )
};


export default RegisterForm;