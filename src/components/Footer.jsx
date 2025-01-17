import React, { useContext } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { themeContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { theme } = useContext(themeContext);

    return (
        <footer
            className={`${
                theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-yellow-100 text-gray-800'
            } py-6 font-gFont`}
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Brand Section */}
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-xl font-bold">Soumen Mandal</h1>
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            Web Developer | Programmer
                        </p>
                    </div>

                    {/* Navigation Links */}
                    
                    <div className="flex flex-wrap gap-6">
                    <Link
                            to="/"
                            className={`${
                                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            } transition`}
                        >
                            Home
                        </Link>
                        <Link
                            to ="/about"
                            className={`${
                                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            } transition`}
                        >
                            About
                        </Link>
                        <Link
                            to ="/skills"
                            className={`${
                                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            } transition`}
                        >
                            Skills
                        </Link>
                        <Link
                            to ="/projects"
                            className={`${
                                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            } transition`}
                        >
                            Projects
                        </Link>
                        <Link
                            to ="/contact"
                            className={`${
                                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            } transition`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex gap-4">
                        <a
                            href="https://linkedin.com/in/sm4894/"
                            target="_blank"
                            rel="noreferrer"
                            className={`${
                                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            } transition text-xl`}
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/Soumen4894/"
                            target="_blank"
                            rel="noreferrer"
                            className={`${
                                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            } transition text-xl`}
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://twitter.com/your-profile"
                            target="_blank"
                            rel="noreferrer"
                            className={`${
                                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            } transition text-xl`}
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
                <hr className={`my-6 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`} />
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-center`}>
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
