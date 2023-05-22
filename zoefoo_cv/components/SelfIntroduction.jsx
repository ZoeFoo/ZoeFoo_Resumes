import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SelfIntroduction = ({
    person: { nickName, firstName, lastName, phone, email }
}) => {
    return (
        <div className='text-center leading-loose'>
            <div>
                <div className='text-2xl font-bold'>
                    {nickName}
                </div>
            </div>

            <div className="px-[50px]">
                <div className='font-bold text-decoration text-2xl pb-2 mb-4'>
                    {lastName}, {firstName}
                </div>
            </div>

            <div className="text-left px-[20px]">
                <div>
                    <Item>
                        <FontAwesomeIcon icon={faPhone} className='my-2 mx-2' />
                        <div>{phone}</div>
                    </Item>

                    <Item>
                        <FontAwesomeIcon icon={faEnvelope} className='my-2 mx-2' />
                        <a href={`mailto:${email}`}
                            className='text-blue-700 hover:underline decoration-1'>
                            {email}
                        </a>
                    </Item>
                </div>
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

export default SelfIntroduction;