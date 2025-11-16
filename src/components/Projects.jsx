

import React, { useContext } from 'react';
import project1 from '../assets/Pro1.png';
import project2 from '../assets/Pro2.png';
import { themeContext } from '../context/Context';

const Projects = () => {
    const { theme } = useContext(themeContext);

    return (
        <div
            className={`${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-yellow-50 text-gray-900'
                } animate-slide-down min-h-screen py-8`}
        >
            <div className="text-center">
                <h1 className="font-gFont text-4xl mb-6">Projects</h1>
            </div>

            <div className="grid gap-8 px-6 md:px-12 lg:px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {/* Project 1 */}
                <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg border border-slate-100 hover:scale-105 transition-transform">
                    <a href="https://study-monk-client.vercel.app/" target="_blank" rel="noreferrer">
                        <img className="w-full" src={project1} alt="StudyMonk" />
                    </a>
                    <div className="px-6 py-4">
                        <h2 className="font-bold text-xl mb-2">StudyMonk, a Learning Application</h2>
                        <p className="text-base">
                            E-learning applications provide a flexible and accessible platform for education, allowing
                            learners to access courses and resources anytime and anywhere.
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            MERN Stack
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                            JavaScript
                        </span>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg border border-slate-100 hover:scale-105 transition-transform">
                    <a href="https://example.com/" target="_blank" rel="noreferrer">
                        <img className="w-full" src={project2} alt="Authentication Application" />
                    </a>
                    <div className="px-6 py-4">
                        <h2 className="font-bold text-xl mb-2">Authentication Application</h2>
                        <p className="text-base">
                            Authentication apps bolster security by generating unique codes for account access. Examples
                            include Google Authenticator, enhancing protection beyond traditional passwords.
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            React JS
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                            JavaScript
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;