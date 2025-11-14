import React, { useContext, useEffect } from 'react';
import { themeContext } from '../context/Context';
import { FaLaptopCode, FaUserGraduate, FaBullseye } from 'react-icons/fa';
import photo from "../assets/Photo.jpeg";
import photo_bw from "../assets/photo_bw.jpeg";
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const { theme } = useContext(themeContext);
    const navigate = useNavigate();
    const location = useLocation();

    if(location.pathname !== "/about"){
        navigate("/about");
    }

    useEffect(()=>{
        navigate("/about");
    },[])

    return (
        <div
            className={`${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-yellow-50'
                } py-16 min-h-screen`}
        >
            
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold tracking-wide mb-4">About Me</h1>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        } text-lg max-w-3xl mx-auto`}>
                        Hi there! I'm <span className={`font-bold bg-gradient-to-r ${theme === 'dark'
                            ? 'from-fuchsia-600 to-yellow-700'
                            : 'from-green-500 to-yellow-500'
                            } text-transparent bg-clip-text`}>Soumen Mandal</span>, a passionate web developer and problem solver. I strive to create impactful solutions that deliver exceptional user experiences.
                    </p>
                </div>

                {/* About Section */}
                <div className="flex flex-wrap items-center gap-16">
                    {/* Profile Image Section */}
                    <div className="w-full md:w-5/12 lg:w-4/12 relative">
                        <div className="relative group">
                            {theme === 'dark' ? (
                                <div className="rounded-3xl shadow-lg overflow-hidden">
                                <img
                                    src={photo} // Replace with your image
                                    alt="Soumen Mandal"
                                    className="rounded-3xl shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"
                                />
                                <img
                                    src={photo_bw} // Replace with your image
                                    alt="Soumen Mandal"
                                    className="rounded-3xl shadow-lg transform transition-all duration-500 opacity-0 group-hover:scale-105 group-hover:opacity-100 absolute inset-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-sky-100 to-amber-100 opacity-0 group-hover:opacity-30 rounded-3xl transition-opacity duration-500"></div>
                            </div>
                            ) : (
                                <div className="rounded-3xl shadow-lg overflow-hidden">
                                <img
                                    src={photo_bw} // Replace with your image
                                    alt="Soumen Mandal"
                                    className="rounded-3xl shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"
                                />
                                <img
                                    src={photo}
                                    alt="Soumen Mandal"
                                    className="rounded-3xl shadow-lg transform transition-all duration-500 opacity-0 group-hover:scale-105 group-hover:opacity-100 absolute inset-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-sky-100 to-amber-100 opacity-0 group-hover:opacity-30 rounded-3xl transition-opacity duration-500"></div>
                            </div>)}
                        </div>
                    </div>

                    {/* About Content Section */}
                    <div className="w-full md:w-7/12 lg:w-8/12">
                        <div className="space-y-8">
                            {/* First Item */}
                            <div className="flex items-center gap-6">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-3xl shadow-lg">
                                    <FaLaptopCode />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Web Developer</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        I specialize in creating responsive and efficient web applications using modern technologies like React, Node.js, and JavaScript.
                                    </p>
                                </div>
                            </div>
                            {/* Second Item */}
                            <div className="flex items-center gap-6">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500 text-white text-3xl shadow-lg">
                                    <FaUserGraduate />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Engineering Graduate</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Graduated in 2024 with a degree in Engineering. My academic background provides a strong foundation for tackling technical challenges.
                                    </p>
                                </div>
                            </div>
                            {/* Third Item */}
                            <div className="flex items-center gap-6">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-500 text-white text-3xl shadow-lg">
                                    <FaBullseye />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">My Philosophy</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        I believe in continuous learning, staying curious, and collaborating to create meaningful, impactful solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-16">
                    <h2 className="text-4xl font-bold text-center mb-6">My Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'JavaScript', color: 'bg-yellow-500' },
                            { name: 'React', color: 'bg-blue-500' },
                            { name: 'Node.js', color: 'bg-green-500' },
                            { name: 'C++', color: 'bg-purple-500' },
                            { name: 'SQL', color: 'bg-pink-500' },
                            { name: 'Express.js', color: 'bg-orange-500' },
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className={`text-white text-center py-2 px-4 rounded-full shadow-lg ${skill.color} font-semibold`}
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

