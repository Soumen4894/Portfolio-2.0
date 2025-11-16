// import React, { useContext } from 'react'
// import project1 from "../assets/Pro1.png"
// import project2 from "../assets/Pro2.png"
// import project3 from "../assets/Pro3.png"
// import { themeContext } from '../context/Context'


// const Projects = () => {
//     const { theme } = useContext(themeContext)
//     return (
//         <div className={`${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-yellow-50'} animate-slide-down h-screen`}>
//             <div className='flex justify-center pt-4'>
//                 <h1 className=' font-gFont text-4xl'>Projects</h1>
//             </div>
//             <div className=' flex justify-around p-10'>
//                 <div>
//                     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border-2 border-slate-100  hover:scale-105 transition-transform">
//                         <a href='https://study-monk-client.vercel.app/' target='_blank' rel='noreferrer'><img className="w-full" src={project1} alt="StudyMonk" /></a>
//                         <div className="px-6 py-4 font-gFont">
//                             <div className="font-bold text-xl mb-2">StudtyMonk, a learning application</div>
//                             <p className="font-gFont text-base">
//                                 E-learning applications provide a flexible and accessible platform for education, allowing learners to access courses and resources anytime and anywhere.
//                             </p>
//                         </div>
//                         <div className="px-6 pt-4 pb-2">
//                             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-gFont font-semibold text-gray-700 mr-2 mb-2">MERN Stack</span>
//                             {/* {/* <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span> */}
//                             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold font-gFont text-gray-700 mr-2 mb-2">JavaScript</span>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="max-w-sm bg-slate-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                     <a href="#">
//                         <img className="rounded-t-lg" src={project1} alt="" />
//                     </a>
//                     <div className="p-5">
//                         <a href="#">
//                             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">StudtyMonk, a learning application</h5>
//                         </a>
//                         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">E-learning applications provide a flexible and accessible platform for education, allowing learners to access courses and resources anytime and anywhere.</p>
//                         <div className='flex justify-between'>
//                             <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                 Read more
//                             </a>
//                             <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                 Read more
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//                         <a href='https://study-monk-client.vercel.app/' target='_blank' rel='noreferrer'><img className="w-full" src={project2} alt="Authentication Application" /></a>
//                         <div className="px-6 py-4 font-gFont">
//                             <div className="font-bold font-gFont text-xl mb-2">Authentication Application</div>
//                             <p className=" font-gFont text-base">
//                                 Authentication apps bolster security by generating unique codes for account access. Examples include Google Authenticator, enhancing protection beyond traditional passwords.
//                             </p>
//                         </div>
//                         <div className="px-6 pt-4 pb-2">
//                             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold font-gFont text-gray-700 mr-2 mb-2">React JS</span>
//                             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold font-gFont text-gray-700 mr-2 mb-2">JavaScript</span>
//                             {/* <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Projects

import React, { useContext } from 'react';
import project1 from '../assets/Pro1.png';
import project2 from '../assets/Pro2.png';
import { themeContext } from '../context/Context';

const Projects = () => {
    const { theme } = useContext(themeContext);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     navigate("/");
    // }, [])

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