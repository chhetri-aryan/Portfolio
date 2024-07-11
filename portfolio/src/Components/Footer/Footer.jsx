import React from 'react';
const Footer = ({darkMode}) => {
    return (
        <div>
            <footer className="rounded-lg bg-sky-200 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                       
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li className='hover:underline me-4 md:me-6'>
                                About
                            </li>
                            <li className='hover:underline me-4 md:me-6'>
                                Privacy Policy
                            </li>
                            <li className='hover:underline me-4 md:me-6'>
                                Licensing
                            </li>
                            <li className='hover:underline me-4 md:me-6'>
                                Contact
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.linkedin.com/in/aryan-chhetri/" target='_blank'>SNEAK™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    )
}

export default Footer
