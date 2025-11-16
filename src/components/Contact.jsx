import React, { useContext } from 'react';
import { VscHome } from 'react-icons/vsc';
import { FiPhoneCall } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { themeContext } from '../context/Context';

const Contact = () => {
    const { theme } = useContext(themeContext);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     navigate("/");
    // }, [])

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
                    <form className="flex flex-col border border-gray-300 rounded-md w-full sm:w-96 p-6 gap-4 bg-white shadow-md">
                        <input
                            className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-fuchsia-600' : 'focus:ring-green-400'} `}
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-fuchsia-600' : 'focus:ring-green-400'} `}
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-fuchsia-600' : 'focus:ring-green-400'} `}
                            type="text"
                            placeholder="Phone"
                        />
                        <textarea
                            className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-fuchsia-600' : 'focus:ring-green-400'} `}
                            placeholder="Message"
                        />
                        <div className="flex justify-center">
                            <button
                                className={`bg-gradient-to-r ${theme === 'dark' ? 'from-fuchsia-600 to-yellow-700 text-white' : 'from-green-200 to-yellow-200'}  py-2 px-6 rounded-md hover:scale-105 transition-transform duration-200 hover:font-bold`}>
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
