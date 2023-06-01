import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ contact }) => {
    return (
        <div className='leading-loose'>
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
        </div>
    )
};

const Item = ({ children }) => {
    return (
        <div className="flex items-center justify-center">
            {children}
        </div>
    );
};

export default Contact;