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
                    <p>{phone}</p>
                </div>

                <div className='flex flex-nowrap'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
};


export default Contact;