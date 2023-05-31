import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectExperiences = ({ project, register, errors }) => {
    return (
        project ? (<div className='leading-loose pt-4'>
            <div>
                <div className='text-lg font-semibold ps-5'>
                    {project.name}
                </div>
            </div>

            <div>
                <div className='flex flex-nowrap'>
                    <div>
                        <FontAwesomeIcon
                            icon={faCircle}
                            className='w-[5px]' />
                    </div>

                    <div className='ps-4'>
                        Purpose:
                    </div>
                </div>

                <div className='ps-6'>
                    {project.purpose}
                </div>
            </div>

            <div>
                <div className='flex flex-nowrap'>
                    <div>
                        <FontAwesomeIcon
                            icon={faCircle}
                            className='w-[5px]' />
                    </div>

                    <div className='ps-4'>
                        Tech Skills:
                    </div>
                </div>

                <div>
                    <div className='ps-6'>
                        {project.skills}
                    </div>
                </div>
            </div>

            {project.link ?
                (<div>
                    <div className='flex flex-nowrap'>
                        <div>
                            <FontAwesomeIcon
                                icon={faCircle}
                                className='w-[5px]' />
                        </div>

                        <div className='ps-4'>
                            GitHub:
                        </div>
                    </div>

                    <div>
                        <div className='ps-6'>
                            <a href={project.link}
                                target="_blank"
                                className='text-blue-700 hover:underline'>
                                {project.link}
                            </a>
                        </div>
                    </div>
                </div>)
                : null
            }
        </div>)
            : (<div>
                <div className='text-lg font-semibold ps-6'>
                    <Input
                        register={register}
                        labelName={"Project Name"}
                        idName={"projectName"}
                        errors={errors} />
                </div>

                <div className='flex flex-nowrap'>
                    <div>
                        <FontAwesomeIcon
                            icon={faCircle}
                            className='w-[5px]' />
                    </div>

                    <div className='ps-5 w-[100%]'>
                        <div>
                            Purpose:
                        </div>

                        <div>
                            <Input
                                register={register}
                                labelName={"Project Purpose"}
                                idName={"projectPurpose"}
                                errors={errors} />
                        </div>
                    </div>
                </div>

                <div className='flex flex-nowrap'>
                    <div>
                        <FontAwesomeIcon
                            icon={faCircle}
                            className='w-[5px]' />
                    </div>

                    <div className='ps-5 w-[100%]'>
                        <div>
                            Tech Skills:
                        </div>

                        <div>
                            <TextArea
                                register={register}
                                labelName={"Tech Skills"}
                                idName={"techSkills"}
                                errors={errors}
                                rows={8}
                                cols={41} />
                        </div>
                    </div>
                </div>

                <div className='flex flex-nowrap'>
                    <div>
                        <FontAwesomeIcon
                            icon={faCircle}
                            className='w-[5px]' />
                    </div>

                    <div className='ps-5 w-[100%]'>
                        <div>
                            GitHub:
                        </div>

                        <div>
                            <Input
                                register={register}
                                labelName={"Github link"}
                                idName={"link"}
                                errors={errors} />
                        </div>
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


export default ProjectExperiences;