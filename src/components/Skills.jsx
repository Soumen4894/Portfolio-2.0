// import React, { useContext } from 'react'
// import html from '../assets/html.svg'
// import css from "../assets/css.svg"
// import js from '../assets/Javascript.svg'
// import react from '../assets/react.svg'
// import node from '../assets/nodejs.svg'
// import express from '../assets/express.svg'
// import mongo from '../assets/mongodb.svg'
// import tailwind from '../assets/tailwind.svg'
// import sql from '../assets/sql.svg'
// import github from '../assets/github.svg'
// import postman from '../assets/postman.svg'
// import { themeContext } from '../context/Context'

// const Skills = () => {
//     const {theme} = useContext(themeContext)
//     return (
//         <div className={`animate-slide-down font-gFont ${theme === 'dark' ? 'bg-slate-800  text-white' : 'bg-yellow-50'} `}>
//             <div className='flex justify-center pt-4'>
//                 <h1 className='text-white font-gFont text-4xl'>Skills</h1>
//             </div>
//             <div className='flex justify-center'>
//                 <div className={`flex flex-col justify-center p-4 m-1 items-center gap-2 border-2 rounded-md ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}>
//                     <img className='h-28' src={html} alt='HTML'/>
//                     <p>HTML</p>
//                 </div>
//                 <div className={`flex flex-col justify-center p-4 m-1 items-center gap-2 border-2 rounded-md ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}>
//                     <img className='h-28' src={css} alt='css'/>
//                     <p>CSS</p>
//                 </div>
//                 <div className={`flex flex-col justify-center p-4 m-1 items-center gap-2 border-2 rounded-md ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}>
//                     <img className='h-28' src={js} alt='javascript'/>
//                     <p>JavaScript</p>
//                 </div>
//                 <div className={`flex flex-col justify-center p-4 m-1 items-center gap-2 border-2 rounded-md ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}>
//                     <img className='h-28' src={react} alt='react js'/>
//                     <p>React JS</p>
//                 </div>
//                 <div className={`flex flex-col justify-center p-4 m-1 items-center gap-2 border-2 rounded-md ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}>
//                     <img className='h-28' src={node} alt='node js'/>
//                     <p>Node JS</p>
//                 </div>
//                 <div className={`flex flex-col justify-center p-4 m-1 items-center gap-2 border-2 rounded-md ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}>
//                     <img className='h-28' src={express} alt='express js'/>
//                     <p>Express JS</p>
//                 </div>
//                 <div className={`flex flex-col justify-center p-4 m-1 items-center gap-2 border-2 rounded-md ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}>
//                     <img className='h-28' src={mongo} alt='Mongodb'/>
//                     <p>MongoDB</p>
//                 </div>
//                 <div className={`flex flex-col justify-center p-4 m-1 items-center gap-2 border-2 rounded-md ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}>
//                     <img className='h-28' src={tailwind} alt='tailwind css'/>
//                     <p>Tailwind CSS</p>
//                 </div>
//                 <div className={`flex flex-col justify-center p-4 m-1 items-center gap-2 border-2 rounded-md ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}>
//                     <img className='h-28' src={sql} alt='sql'/>
//                     <p>SQL</p>
//                 </div>
//                 <div className={`flex flex-col justify-center p-4 m-1 items-center gap-2 border-2 rounded-md ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}>
//                     <img className='h-28' src={github} alt='github'/>
//                     <p>Github</p>
//                 </div>
//                 <div className={`flex flex-col justify-center p-4 m-1 items-center gap-2 border-2 rounded-md ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}>
//                     <img className='h-28' src={postman} alt='postman'/>
//                     <p>Postman</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Skills


import React, { useContext } from 'react';
import html from '../assets/html.svg';
import css from "../assets/css.svg";
import js from '../assets/javascript.svg';
import react from '../assets/react.svg';
import node from '../assets/nodejs.svg';
import express from '../assets/express.svg';
import mongo from '../assets/mongodb.svg';
import tailwind from '../assets/tailwind.svg';
import sql from '../assets/sql.svg';
import github from '../assets/github.svg';
import postman from '../assets/postman.svg';
import { themeContext } from '../context/Context';

const Skills = () => {
    const { theme } = useContext(themeContext);

    return (
        <div className={`animate-slide-down h-screen font-gFont ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-yellow-50'}`}>
            <div className='flex justify-center pt-4'>
                <h1 className={`text-4xl font-gFont ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Skills</h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-4'>
                {[{ src: html, alt: "HTML", label: "HTML" },
                { src: css, alt: "CSS", label: "CSS" },
                { src: js, alt: "JavaScript", label: "JavaScript" },
                { src: react, alt: "React JS", label: "React JS" },
                { src: node, alt: "Node JS", label: "Node JS" },
                { src: express, alt: "Express JS", label: "Express JS" },
                { src: mongo, alt: "MongoDB", label: "MongoDB" },
                { src: tailwind, alt: "Tailwind CSS", label: "Tailwind CSS" },
                { src: sql, alt: "SQL", label: "SQL" },
                { src: github, alt: "GitHub", label: "GitHub" },
                { src: postman, alt: "Postman", label: "Postman" }].map((skill, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center p-2 gap-2 border-2 rounded-md  ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}
                    >
                        <img className='h-16 sm:h-20 lg:h-28 ' src={skill.src} alt={skill.label} />
                        <p className='text-center'>{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
/*
shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
import React, { useContext } from 'react'
import html from '../assets/html.svg'
import css from "../assets/css.svg"
import js from '../assets/Javascript.svg'
import react from '../assets/react.svg'
import node from '../assets/nodejs.svg'
import express from '../assets/express.svg'
import mongo from '../assets/mongodb.svg'
import tailwind from '../assets/tailwind.svg'
import sql from '../assets/sql.svg'
import github from '../assets/github.svg'
import postman from '../assets/postman.svg'
import { themeContext } from '../context/Context'

const Skills = () => {
    const { theme } = useContext(themeContext)
    return (
        <div className={`animate-slide-down font-gFont ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-yellow-50'}`}>
            <div className='flex justify-center pt-4'>
                <h1 className='text-white font-gFont text-4xl'>Skills</h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4'>
                {[ 
                    { img: html, label: 'HTML' },
                    { img: css, label: 'CSS' },
                    { img: js, label: 'JavaScript' },
                    { img: react, label: 'React JS' },
                    { img: node, label: 'Node JS' },
                    { img: express, label: 'Express JS' },
                    { img: mongo, label: 'MongoDB' },
                    { img: tailwind, label: 'Tailwind CSS' },
                    { img: sql, label: 'SQL' },
                    { img: github, label: 'Github' },
                    { img: postman, label: 'Postman' }
                ].map((skill, index) => (
                    <div
                        key={index}
                        className={`flex flex-col justify-center items-center gap-2 border-2 rounded-md p-4 ${theme === 'dark' ? 'border-fuchsia-600' : 'border-green-400'}`}
                    >
                        <img className='h-20 w-20' src={skill.img} alt={skill.label} />
                        <p>{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
*/

