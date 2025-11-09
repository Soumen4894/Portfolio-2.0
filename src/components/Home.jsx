import React, { useContext } from 'react';
import photo from "../assets/image.png";
import { Link } from 'react-router-dom';
import { themeContext } from '../context/Context';

const Home = () => {
    const { theme } = useContext(themeContext);

    return (
        <div
            className={`animate-slide-down ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-yellow-50'
                } pt-5 min-h-screen flex flex-col justify-center items-center`}>
            <div className="flex flex-col justify-center items-center gap-8 px-4">
                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        className={`h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 border-2 ${theme === 'dark' ? 'border-yellow-50' : 'border-slate-600'} object-contain rounded-full hover:scale-110 transition-transform duration-200`}
                        src={photo}
                        alt="Photo"
                    />
                </div>

                {/* Introduction Section */}
                <div className="flex flex-col gap-6 md:w-2/4 text-center md:text-left ">
                    <div>
                        <p className="text-3xl sm:text-4xl md:text-5xl font-gFont text-center">
                            <span
                                className={`font-bold bg-gradient-to-r ${theme === 'dark'
                                    ? 'from-fuchsia-600 to-yellow-700'
                                    : 'from-green-500 to-yellow-500'
                                    } text-transparent bg-clip-text`}>
                                I'm Soumen Mandal,
                            </span>{' '}
                            a full-stack developer based in India.
                        </p>
                    </div>
                    <div>
                        <p className="font-gFont text-sm sm:text-base text-center">
                            I'm a MERN Stack Developer with a strong passion for building
                            efficient, scalable, and user-friendly web applications. Proficient in
                            MongoDB, Express.js, React, and Node.js, I specialize in both frontend
                            and backend development. With hands-on experience in creating
                            full-stack applications, I thrive on solving challenges, learning new
                            technologies, and delivering impactful solutions.
                        </p>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-wrap justify-center md:justify-center gap-8">
                        <Link to="/contact">
                            <button
                                className={`p-4 bg-gradient-to-r ${theme === 'dark'
                                    ? 'from-fuchsia-600 to-yellow-700 hover:from-yellow-700 hover:to-fuchsia-600'
                                    : 'from-green-200 to-yellow-200 hover:from-yellow-200 hover:to-green-200'
                                    } rounded-full w-40 hover:scale-110 transition-transform duration-200 hover:font-bold`}>
                                Contact Me
                            </button>
                        </Link>
                        <a href='https://study-monk-client.vercel.app/' target="_blank">
                            <button
                                className={`p-4 bg-gradient-to-r ${theme === 'dark'
                                    ? 'from-fuchsia-600 to-yellow-700 hover:from-yellow-700 hover:to-fuchsia-600'
                                    : 'from-green-200 to-yellow-200 hover:from-yellow-200 hover:to-green-200'
                                    } rounded-full w-40 hover:scale-110 transition-transform duration-200 hover:font-bold`}>
                                Recent Project
                            </button>
                        </a>
                        <a href='https://shorturl.at/0EvfK' target='_blank'>
                            <button
                                className={`p-4 bg-gradient-to-r ${theme === 'dark'
                                    ? 'from-fuchsia-600 to-yellow-700 hover:from-yellow-700 hover:to-fuchsia-600'
                                    : 'from-green-200 to-yellow-200 hover:from-yellow-200 hover:to-green-200'
                                    } rounded-full w-40 hover:scale-110 transition-transform duration-200 hover:font-bold`}>
                                My Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
