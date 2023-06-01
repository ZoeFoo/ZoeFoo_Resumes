import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import SelfIntroductionInput from '@/components/resumesForm/SelfIntroductionInput';
import PersonalQualitiesInput from '@/components/resumesForm/PersonalQualitiesInput';
import LanguageInput from '@/components/resumesForm/LanguageInput';
import Contact from '@/components/Contact';
import ProjectExperiences from '@/components/ProjectExperiences';
import Modal from '@/components/Modal';

import apis from '@/services/apis';

const LatestProjectExperienceForm = ({ setProject, setProjectExperiencesForm }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const projectData = async (project) => {
        setProject(project)
        setProjectExperiencesForm(false);
    }

    return (
        <div className='absolute top-0 left-0 w-full h-full bg-[black] bg-opacity-[50%] flex items-center'>
            <div className='w-[21cm] bg-slate-100 rounded-[20px] mx-auto py-10 px-10'>
                <form onSubmit={handleSubmit(projectData)}>
                    <div>
                        <ProjectExperiences
                            register={register}
                            errors={errors} />
                    </div>

                    <div className="flex flex-nowrap text-center mt-3">
                        <div className="w-[100%] ">
                            <button type="submit"
                                className="text-[white] border-1 border-[#e5e7eb] rounded-md bg-[#334155] py-3 w-[80%]">
                                Save
                            </button>
                        </div>

                        <div className="w-[100%]">
                            <button type="button"
                                onClick={() => { setProjectExperiencesForm(false) }}
                                className="text-[white] border-1 border-[#e5e7eb] rounded-md bg-[#334155] py-3 w-[80%]">
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

const ResumesForm = () => {
    const [project, setProject] = useState(null);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isFailed, setFailed] = useState(false);
    const [isSecondPage, setIsSecondPage] = useState(false);
    const [projectExperiencesForm, setProjectExperiencesForm] = useState(false);
    const [isClikced, setIsClikced] = useState(false);
    const [isAddProjectExperiences, setIsAddProjectExperiences] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        console.log({ data })
    };

    const secondPage = () => {
        setIsSecondPage(true);
        setIsClikced(true);
    };

    return (
        <div className="relative pt-[50px] text-black flex justify-center">
            {
                projectExperiencesForm && (
                    <LatestProjectExperienceForm
                        setProject={setProject}
                        setProjectExperiencesForm={setProjectExperiencesForm} />
                )
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='page my-[30px] flex flex-nowrap'>
                    <div className='flex flex-col justify-evenly w-2/5 bg-slate-100 px-[10px] text-center'>
                        <div>
                            <SelfIntroductionInput
                                register={register}
                                errors={errors} />
                        </div>

                        <div>
                            <PersonalQualitiesInput
                                register={register}
                                errors={errors} />
                        </div>

                        <div>
                            <LanguageInput
                                register={register}
                                errors={errors} />
                        </div>

                        <div>
                            <Contact
                                register={register}
                                errors={errors} />
                        </div>
                    </div>

                    <div className='flex flex-col justify-evenly w-3/5 px-[25px] bg-white '>
                        <div>
                            <div className='text-decoration inline-block text-xl tracking-[2px] font-bold px-5'>
                                Hands-on Experiences
                            </div>

                            <div className=''>
                                <TextArea
                                    register={register}
                                    labelName={"Hands-on Experiences"}
                                    idName={"handsOnExperiences"}
                                    errors={errors}
                                    rows={8}
                                    cols={2} />
                            </div>
                        </div>

                        <div>
                            <div className='text-decoration inline-block text-xl font-bold tracking-[2px] px-5' >
                                Latest Project Experiences
                            </div>

                            {
                                project &&
                                <ProjectExperiences project={project} />
                            }

                            <div>
                                {!isClikced &&
                                    (<div>
                                        <button type="button"
                                            onClick={() => { setProjectExperiencesForm(true) }}
                                            className='text-[white] text-center border-1 border-[#e5e7eb] rounded-md bg-[#334155] my-3 py-3 w-[100%]'>
                                            <div>
                                                <FontAwesomeIcon
                                                    icon={faSquarePlus}
                                                    className='text-[40px]' />
                                            </div>

                                            <div>
                                                Add Project Experiences
                                            </div>
                                        </button>
                                    </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>

                {
                    isSecondPage &&
                    (<div className='page  my-[30px]' >
                        <div className='px-[8%] py-[5%]'>
                            <div className=''>
                                <div className='inline-block'>
                                    <div className='text-decoration text-xl font-bold tracking-[2px] px-5' >
                                        Project Experiences
                                    </div>
                                </div>

                                <div>
                                    <ProjectExperiences
                                        register={register}
                                        errors={errors} />
                                </div>

                                {isAddProjectExperiences &&
                                    (<NewProjectExperiences
                                        register={register}
                                        errors={errors} />)
                                }

                                {isClikced &&
                                    (<div>
                                        <button type="button"
                                            onClick={() => { setIsAddProjectExperiences(true) }}
                                            className='text-[white] text-center border-1 border-[#e5e7eb] rounded-md bg-[#334155] ms-6 py-3 w-[94%]'>
                                            <div>
                                                <FontAwesomeIcon
                                                    icon={faSquarePlus}
                                                    className='text-[40px]' />
                                            </div>

                                            <div>
                                                Add Project Experiences
                                            </div>
                                        </button>
                                    </div>
                                    )}
                            </div>

                            <div>
                                <div className='text-decoration text-xl font-bold inline-block tracking-[2px] px-8 pb-2 mb-4'>
                                    Education
                                </div>
                                <div>
                                    {/*{*/}
                                    {/*    educations.map((education, i) => (*/}
                                    {/*        <Education key={i}*/}
                                    {/*            education={education} />*/}
                                    {/*    ))*/}
                                    {/*}*/}
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className='text-decoration text-xl font-bold inline-block tracking-[2px] px-8 py-2 my-4'>
                                        Work Experiences
                                    </div>
                                </div>

                                <div>
                                    {/*{*/}
                                    {/*    works.map((work, i) => (*/}
                                    {/*        <WorkExperience key={i}*/}
                                    {/*            work={work} />*/}
                                    {/*    ))*/}
                                    {/*}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }

                <div>
                    <button type="submit"
                        className='text-[20px] font-bold border-2 rounded-lg tracking-[10px] bg-slate-700 w-[100%] p-5 my-3 hover:bg-slate-500'>
                        Submit
                    </button>
                </div>
            </form >

            {isSuccessful && < div >
                <Modal
                    successful={true}
                    stateText={'Successful'} />
            </div>}

            {
                isFailed && < div >
                    <Modal
                        successful={false}
                        stateText={'Account Already Exists'} />
                </div>
            }
        </div >
    )
};

const NewProjectExperiences = ({ register, errors }) => {
    return (
        <div>
            <ProjectExperiences
                register={register}
                errors={errors} />
        </div>
    )
};

const SavedProjectExperiences = ({ project }) => {
    console.log(project)
    return (
        <div>
            <ProjectExperiences project={project} />
        </div>
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