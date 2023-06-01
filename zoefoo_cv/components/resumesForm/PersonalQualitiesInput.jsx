import React from "react";

const PersonalQualitiesInput = ({ register, errors }) => {
    return (
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

export default PersonalQualitiesInput;