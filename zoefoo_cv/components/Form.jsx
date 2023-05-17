import React from "react";
import { useForm } from "react-hook-form";


const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("firstName", data.firstName);
        console.log(data);
        console.log(formData)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input {...register("firstName", { required: true })} />
            {errors.firstName && <p>This field is required</p>}

            <label>Last Name</label>
            <input {...register("lastName", { required: true })} />
            {errors.lastName && <p>This field is required</p>}

            <button onClick={handleSubmit}>
                submit
            </button> 
        </form>
    );
};

export default Form;