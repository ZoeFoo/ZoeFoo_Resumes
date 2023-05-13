import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = ({ phone, email }) => {
    return (
        <div className='leading-loose'>
            <div className='grid'>
                <div className='titleCenter text-decoration text-2xl w-4/6 pb-2 mb-4'
                    style={{ letterSpacing: 8 }}>CONTACT</div>
            </div>

            <div className='flex flex-wrap justify-center'>
                <div className='flex flex-nowrap'>
                    <FontAwesomeIcon icon={faPhone} className='my-2 mx-2' />
                    <div>{phone}</div>
                </div>

                <div className='flex flex-nowrap'>
                    <FontAwesomeIcon icon={faEnvelope} className='my-2 mx-2' />
                    {/*<div onClick={() => {*/}
                    {/*    window.location.href = `${email}`}}>{email}</div>*/}
                    <a href={email} className='text-blue-700 hover:underline decoration-1'>{email}</a>
                </div>
            </div>
        </div>
    )
};


export default Contact;