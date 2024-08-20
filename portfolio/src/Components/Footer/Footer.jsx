import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Bio } from '../../data/constants';
import { Link } from 'react-router-dom';

const Footer = ({ darkMode }) => {
    return (
        <div>
            <footer className="rounded-lg m-10 mx-4 md:mx-28"
                style={{
                    backgroundColor: darkMode ? "#191924" : "white",
                    boxShadow: "0 0 3px #0070ff"
                }}>
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-center">
                        <ul className="flex flex-wrap justify-center mb-6 font-medium sm:mb-0" style={{ color: darkMode ? "#FFFFFF" : "#000000" }}>
                            <li className='hover:underline me-4 md:me-6'>
                                <Link to={Bio.linkedin} target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedin} className="me-2 size-6" />
                                    LinkedIn
                                </Link>
                            </li>
                            <li className='hover:underline me-4 md:me-6'>
                                <Link to={Bio.x} target='_blank'>
                                    <FontAwesomeIcon icon={faXTwitter} className="me-2 size-6" />
                                    X
                                </Link>
                            </li>

                            <li className='hover:underline me-4 md:me-6'>
                                <Link to={Bio.instagram} target='_blank'>
                                    <FontAwesomeIcon icon={faInstagram} className="me-2 size-6" />
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="text-sm text-center" style={{ color: darkMode ? "#FFFFFF" : "#000000" }}>
                        <p>&copy; 2024 Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
