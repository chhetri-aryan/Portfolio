import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ darkMode }) => {
    return (
        <div>
            <footer className="rounded-lg m-10" style={{ backgroundColor: darkMode ? "#000000" : "#854CE6" }}>
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                            <li className='hover:underline me-4 md:me-6'>
                                <FontAwesomeIcon icon={faLinkedin} className="me-2 size-6" />
                                LinkedIn
                            </li>
                            <li className='hover:underline me-4 md:me-6'>
                                <FontAwesomeIcon icon={faTwitter}  className="me-2 size-6" />
                                Twitter
                            </li>
                            <li className='hover:underline me-4 md:me-6'>
                                <FontAwesomeIcon icon={faInstagram}  className="me-2 size-6"  />
                                Instagram
                            </li>
                            <li className='hover:underline me-4 md:me-6'>
                                <FontAwesomeIcon icon={faWhatsapp} className="me-2 size-6"  />
                                WhatsApp
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="text-sm text-white text-center">
                        <p>&copy; 2024 Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
