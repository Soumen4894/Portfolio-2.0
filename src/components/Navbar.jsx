import React, { useContext, useState } from 'react';
import soumen from "../assets/Soumen.png";
import { Link } from 'react-router-dom';
import { themeContext } from "../context/Context";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(themeContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav
            className={`flex items-center justify-between bg-gradient-to-r ${
                theme === 'dark'
                    ? 'text-white from-fuchsia-600 to-yellow-700'
                    : 'from-green-200 to-yellow-200'
            } px-8 py-4`}>
            {/* Logo */}
            <div className="flex items-center">
                <img src={soumen} alt="logo" className="h-10 w-10" />
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <HiX className="text-4xl text-slate-700 cursor-pointer" />
                    ) : (
                        <HiOutlineMenu className="text-4xl text-slate-700 cursor-pointer" />
                    )}
                </button>
            </div>

            {/* Links (Responsive) */}
            <div
                className={`absolute inset-x-0 top-16 bg-gradient-to-r ${
                    theme === 'dark'
                        ? 'text-white from-yellow-700 to-fuchsia-600'
                        : 'from-yellow-200 to-green-200'
                } md:relative md:top-0 md:flex md:gap-10 md:items-center md:bg-transparent ${
                    menuOpen ? 'flex flex-col gap-6 py-4 px-8' : 'hidden'
                }`}>
                <div className="cursor-pointer">
                    <Link
                        className="hover:scale-100 transition-transform duration-100 hover:font-bold"
                        to="/">
                        Home
                    </Link>
                </div>
                <div className="cursor-pointer">
                    <Link
                        className="hover:scale-100 transition-transform duration-100 hover:font-bold"
                        to="/about">
                        About
                    </Link>
                </div>
                <div className="cursor-pointer">
                    <Link
                        className="hover:scale-100 transition-transform duration-100 hover:font-bold"
                        to="/skills">
                        Skills
                    </Link>
                </div>
                <div className="cursor-pointer">
                    <Link
                        className="hover:scale-100 transition-transform duration-100 hover:font-bold"
                        to="/projects">
                        Projects
                    </Link>
                </div>
                <div className="cursor-pointer">
                    <Link
                        className="hover:scale-100 transition-transform duration-100 hover:font-bold"
                        to="/contact">
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* Theme Toggle */}
            <div className="hidden md:block">
                <span onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <MdDarkMode className="text-slate-700 text-4xl m-3 cursor-pointer" />
                    ) : (
                        <FiSun className="text-yellow-200 text-4xl m-3 cursor-pointer" />
                    )}
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
