import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = ({ phone, email }) => {
    return (
        <div>
            <div>
                <h2>CONTACT</h2>
            </div>

            <div>
                <div className='flex flex-nowrap'>
                    <FontAwesomeIcon icon={faPhone} />
                    <div>{phone}</div>
                </div>

                <div className='flex flex-nowrap'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div>{email}</div>
                </div>
            </div>
        </div>
    )
};


export default Contact;