import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ contact, register, errors }) => {
    return (
        contact ? (<div className='leading-loose'>
            <div className='text-center px-[50px]'>
                <div className='font-bold text-decoration text-xl tracking-[2px] pb-2 mb-4'>
                    CONTACT</div>
            </div>

            <div>
                <Item>
                    <FontAwesomeIcon icon={faPhone} className='my-2 mx-2' />
                    <div>{contact.phone}</div>
                </Item>

                <Item>
                    <FontAwesomeIcon icon={faEnvelope} className='my-2 mx-2' />
                    <a href={`mailto:${contact.email}`}
                        className='text-blue-700 hover:underline decoration-1'>
                        {contact.email}
                    </a>
                </Item>
            </div>
        </div>)
            : (<div>
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
            </div>)
    )
};

const Item = ({ children }) => {
    return (
        <div className="flex items-center justify-center">
            {children}
        </div>
    );
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

export default Contact;