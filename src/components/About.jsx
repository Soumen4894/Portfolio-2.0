// // import React, { useContext } from 'react'
// import image2 from "../assets/image2.png"
// // import { IoSchoolSharp } from "react-icons/io5";
// // import { themeContext } from '../context/Context';

// // const About = () => {
// //   const {theme} = useContext(themeContext)
// //   return (
// //     <div className={`animate-slide-down h-screen ${theme === 'dark' ? 'bg-slate-800 text-white': 'bg-yellow-50'}  `}>
// //       <div className='flex justify-center'>
// //         <h1 className='text-4xl font-gFont p-2'>About Me</h1>
// //       </div>
// //       <div className='flex justify-around gap-32 '>
// //         <div className=' pt-4 w-2/5 flex flex-col items-center justify-center'>
// //           <div><img className='rounded-full h-48 w-48 p-4 ' src={image2} alt='Image' /></div>
// //           {/* <p className='text-white font-gFont p-4'>
// //               Hello and welcome to my portfolio! I'm Soumen Mandal, a dedicated MERN Stack Developer from India . I'm thrilled to share my journey, experience, and the pro jects that showcase my skills in development.
// //             </p> */}
// //           <div>
// //             <p className=' text-center font-gFont p-4'>
// //               Hello and welcome to my portfolio! I'm Soumen Mandal, a dedicated MERN Stack Developer from India . I'm thrilled to share my journey, experience, and the pro jects that showcase my skills in development.
// //             </p>
// //           </div>
// //         </div>
// //         <div className='pt-4 w-2/5 flex flex-col items-center '>
// //           <h1 className=' font-gFont text-4xl'>Education</h1>
// //           <div className='flex gap-10 pt-4'> 
// //             <IoSchoolSharp color={` ${theme === 'dark' ? 'white' : 'black'}`} size={40}/>
// //             <div className=''>Bachelor og Technology in Electronics and Communication Engineering from Ramkrishna Mahato Government Engineering College</div>
// //           </div>

// //         </div>
// //       </div>

// //     </div>
// //   )
// // }

// // export default About

// import React, { useContext } from 'react';
// import { themeContext } from '../context/Context'; // Adjust the path as needed
// import { FaCheckCircle } from 'react-icons/fa';

// const About = () => {
//     const { theme } = useContext(themeContext);

//     return (
//         <div
//             className={`${
//                 theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'
//             } py-16 min-h-screen font-gFont`}
//         >
//             <div className="container mx-auto px-6 md:px-12">
//                 {/* Section Header */}
//                 <div className="text-center mb-12 animate-fade-in">
//                     <h1 className="text-5xl font-extrabold mb-4">About Me</h1>
//                     <p className={`${
//                         theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
//                     } text-lg max-w-2xl mx-auto`}>
//                         Hi! I’m <span className="text-blue-500">Soumen Mandal</span>, a passionate web developer dedicated to creating elegant and efficient solutions.
//                     </p>
//                 </div>

//                 {/* Main Content Section */}
//                 <div className="flex flex-wrap items-center gap-12 animate-slide-in">
//                     {/* Left Section: Image */}
//                     <div className="w-full md:w-1/2 text-center">
//                         <div className="relative group">
//                             <img
//                                 src={image2} // Replace with your photo
//                                 alt="Soumen Mandal"
//                                 className="rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
//                             />
//                             <div className="absolute inset-0 duration-500 rounded-lg"></div>
//                         </div>
//                     </div>

//                     {/* Right Section: Details */}
//                     <div className="w-full md:w-1/2">
//                         <h2 className="text-4xl font-bold mb-6">Who Am I?</h2>
//                         <p className={`${
//                             theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
//                         } text-lg mb-8 leading-relaxed`}>
//                             I'm a driven engineering graduate specializing in web development. With experience in React, JavaScript, and C++, I aim to deliver impactful digital solutions.
//                         </p>
//                         <h3 className="text-3xl font-semibold mb-4">Key Skills:</h3>
//                         <div className="grid grid-cols-2 gap-4">
//                             {[
//                                 { name: "JavaScript", color: "bg-yellow-500" },
//                                 { name: "React", color: "bg-blue-500" },
//                                 { name: "Node.js", color: "bg-green-500" },
//                                 { name: "C++", color: "bg-purple-500" },
//                                 { name: "SQL", color: "bg-pink-500" },
//                                 { name: "Express.js", color: "bg-orange-500" },
//                             ].map((skill, index) => (
//                                 <span
//                                     key={index}
//                                     className={`inline-flex items-center px-4 py-2 rounded-full text-white font-semibold shadow-md ${skill.color}`}
//                                 >
//                                     <FaCheckCircle className="mr-2" />
//                                     {skill.name}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Additional Section */}
//                 <div className="mt-16 text-center animate-fade-in">
//                     <h2 className="text-4xl font-bold mb-6">My Philosophy</h2>
//                     <p className={`${
//                         theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
//                     } text-lg max-w-3xl mx-auto leading-relaxed`}>
//                         I strive to learn and grow every day, embracing challenges to build solutions that inspire and transform lives. 
//                         Collaboration, curiosity, and commitment drive my journey in technology.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;

import React, { useContext } from 'react';
import { themeContext } from '../context/Context';
import { FaLaptopCode, FaUserGraduate, FaBullseye } from 'react-icons/fa';

const About = () => {
    const { theme } = useContext(themeContext);

    return (
        <div
            className={`${
                theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'
            } py-16 min-h-screen`}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold tracking-wide mb-4">About Me</h1>
                    <p className={`${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    } text-lg max-w-3xl mx-auto`}>
                        Hi there! I'm <span className="text-blue-500 font-semibold">Soumen Mandal</span>, a passionate web developer and problem solver. I strive to create impactful solutions that deliver exceptional user experiences.
                    </p>
                </div>

                {/* About Section */}
                <div className="flex flex-wrap items-center gap-16">
                    {/* Profile Image Section */}
                    <div className="w-full md:w-5/12 lg:w-4/12 relative">
                        <div className="relative group">
                            <img
                                src="https://via.placeholder.com/400x400" // Replace with your image
                                alt="Soumen Mandal"
                                className="rounded-3xl shadow-lg transform transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-30 rounded-3xl transition-opacity duration-500"></div>
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

