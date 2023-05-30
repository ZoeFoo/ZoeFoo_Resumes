import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import Modal from '@/components/Modal';

import apis from '@/services/apis';

const LoginForm = () => {
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isFailed, setFailed] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        try {
            const res = await apis.auth.login(data);

            if (res.status == 200) {
                setIsSuccessful(true);
                setTimeout(() => { setIsSuccessful(false) }, 2000);
                console.log(res.data.jwt);
            } else {
                setFailed(true);
                setTimeout(() => { setFailed(false) }, 2000);
            }
        } catch (error) {
            console.error('onSubmit failed', error)
        }
    };
    return (
        <div className='text-white relative'>
            <div className='flex flex-col leading-loose'>
                <div className='text-center text-[40px] font-bold m-5'>
                    Login
                </div>

                <div>
                    <form
                        className='max-w-[500px] mx-auto'
                        onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Input
                                register={register}
                                labelName={"Email"}
                                idName={"email"}
                                errors={errors} />
                        </div>

                        <div>
                            <Input
                                register={register}
                                labelName={"Password"}
                                idName={"password"}
                                errors={errors} />
                        </div>

                        <div className='flex flex-nowrap text-[20px] font-semibold'>
                            <div>Dont't have an account?</div>

                            <div className='mx-3 text-[green] hover:underline'>
                                <Link href='/'>Register</Link>
                            </div>
                        </div>

                        <button onClick={handleSubmit}
                            className='text-[20px] font-bold border-2 rounded-lg tracking-[10px] bg-slate-700 w-[100%] p-5 my-3 hover:bg-slate-500'>
                            Login
                        </button>
                    </form>
                </div>
            </div>

            {isSuccessful && < div >
                <Modal
                    successful={true}
                    stateText={'Login Successful'} />
            </div>}

            {isFailed && < div >
                <Modal
                    successful={false}
                    stateText={`This Account doesn't Exist`} />
            </div>}
        </div>
    );
};

const Input = ({ register, labelName, idName, errors }) => {
    return (
        <div>
            <label className='text-[20px] font-bold tracking-[5px]'>{labelName}</label>
            <input {...register(`${idName}`, { required: true })}
                className='text-black' />
            {errors[idName] && <p>This field is required</p>}
        </div>
    )
};

export default LoginForm;