import React, { useContext, useState } from 'react';
import { VscHome } from 'react-icons/vsc';
import { FiPhoneCall } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { useForm } from '@formspree/react';
import { themeContext } from '../context/Context';

const Contact = () => {
    const { theme } = useContext(themeContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    const [state, handleSubmit] = useForm("mwpanpjl");
    if (state.succeeded) {
        return (
            <div
                className={`flex flex-col items-center justify-center text-center min-h-screen p-10 
    ${theme === "dark" ? "bg-slate-900 text-white" : "bg-green-100 text-black"}
    animate-fade-in`}
            >

                <h2 className="text-4xl font-bold mb-4">🎉 Thank You!</h2>

                <p className="text-lg max-w-md mb-8">
                    Your message has been successfully sent.
                    I will get back to you as soon as possible.
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className={`bg-gradient-to-r ${theme === "dark"
                            ? "from-fuchsia-600 to-yellow-700 text-white"
                            : "from-green-300 to-yellow-300 text-black"
                        } py-2 px-8 rounded-md hover:scale-105 transition-transform duration-200`}
                >
                    Go Back
                </button>
            </div>
        )
    }

    return (
        <div
            className={`${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-yellow-50 text-black'
                } animate-slide-down min-h-screen font-gFont`}>
            <div className="flex justify-center pt-8">
                <h1 className="text-3xl sm:text-4xl font-bold">Contact Me</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-8 gap-12">
                {/* Contact Information */}
                <div className="flex flex-col gap-8 w-full md:w-1/2 px-4">
                    {/* Location */}
                    <div className="flex items-center gap-4">
                        <div className="rounded">
                            <a
                                href="https://www.google.com/maps/place/Ranibandh,+West+Bengal/@22.8659931,86.7840528,16z/data=!3m1!4b1!4m6!3m5!1s0x39f631299248f481:0xdb675a86d135a233!8m2!3d22.8660646!4d86.7831085!16s%2Fg%2F11c59_qvhw?entry=ttu"
                                target="_blank"
                                rel="noreferrer">
                                <VscHome size={48} />
                            </a>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Location</h2>
                            <p>Bankura, 722148, West Bengal</p>
                        </div>
                    </div>

                    {/* Telephone */}
                    <div className="flex items-center gap-4">
                        <div>
                            <a href="tel:8391854894" target="_blank" rel="noreferrer">
                                <FiPhoneCall size={48} />
                            </a>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Telephone</h2>
                            <p>+91 8391854894</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <div>
                            <a
                                href="mailto:soumenmandal0008@gmail.com"
                                target="_blank"
                                rel="noreferrer">
                                <TfiEmail size={48} />
                            </a>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Email</h2>
                            <p>soumenmandal0008@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex justify-center w-full md:w-1/2">
                    <form className="flex flex-col border border-gray-300 rounded-md w-full sm:w-96 p-6 gap-4 bg-white shadow-md"
                        onSubmit={handleSubmit}>
                        <input
                            className={`text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-fuchsia-600' : 'focus:ring-green-400'} `}
                            // value={name} type="text" onChange={(e => setName(e.target.value))}
                            placeholder="Name"
                            name='name'
                        />
                        <input
                            className={`text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-fuchsia-600' : 'focus:ring-green-400'} `}
                            id='email' type="email" name='email'
                            placeholder="Email"
                        />
                        <input
                            className={`text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-fuchsia-600' : 'focus:ring-green-400'} `}
                            type="text"
                            placeholder="Phone"
                            name='Mobile Number'
                        />
                        <textarea
                            className={`text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-fuchsia-600' : 'focus:ring-green-400'} `}
                            id='message' name='message' placeholder="Message"
                        />
                        <div className="flex justify-center">
                            <button
                                type='submit' className={`bg-gradient-to-r ${theme === 'dark' ? 'from-fuchsia-600 to-yellow-700 text-white' : 'from-green-200 to-yellow-200'}  py-2 px-6 rounded-md hover:scale-105 transition-transform duration-200 hover:font-bold`}
                                disabled={state.submitting}>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
