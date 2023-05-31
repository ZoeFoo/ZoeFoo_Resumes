import React from 'react';

const PersonalQualities = ({ list, register, errors}) => {
    return (
        list? (<div className='text-center leading-loose'>
            <div className='px-[15px] tracking-[2px]'>
                <div className='font-bold text-decoration text-xl pb-2 mb-4'>
                    PERSONAL QUALITIES
                </div>
            </div>

            <div>
                <div>
                    {list}
                </div>
            </div>
        </div>)
            : (<div>
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
            </div>)
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

export default PersonalQualities;