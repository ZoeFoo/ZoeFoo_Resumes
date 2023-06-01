import React from "react";

const HandsOnExperiencesInput = ({ register, errors }) => {
    return (
        <div>
            <div className='text-decoration inline-block text-xl tracking-[2px] font-bold px-5'>
                Hands-on Experiences
            </div>

            <div>
                <TextArea
                    register={register}
                    labelName={"Hands-on Experiences"}
                    idName={"handsOnExperiences"}
                    errors={errors}
                    rows={8}
                    cols={2} />
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

export default HandsOnExperiencesInput;