import React from 'react';

const Language = ({ languages, register, errors }) => {
    return (
        languages ? (<div className='text-center leading-loose'>
            <div className='px-[50px]'>
                <div className='font-bold text-decoration text-xl tracking-[2px] pb-2 mb-4'>
                    LANGUAGE
                </div>
            </div>

            <div>
                <div>Cantonese: {languages.cantonese}</div>
            </div>

            <div>
                <div>English: {languages.english}</div>
            </div>

            <div>
                <div>Mandarin: {languages.mandarin}</div>
            </div>
        </div>)
            : (<div>
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
            </div>)
    )
}

const Input = ({ register, labelName, idName, errors }) => {
    return (
        <div>
            <input {...register(`${idName}`, { required: false })}
                placeholder={labelName} />
            {errors[idName] && <p>This field is required</p>}
        </div>
    )
};

export default Language;