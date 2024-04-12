import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../Assests/logo.png'
import DarkMode from './DarkMode'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const [nav, setNav] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setNav(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navRef]);

    const handleNav = () => {
        setNav(!nav);
    };

    const [dropdown1pen, setDropdown1pen] = useState(false);
    const [dropdown2pen, setDropdown2pen] = useState(false);
    const [dropdown3pen, setDropdown3pen] = useState(false);
    const [dropdown4pen, setDropdown4pen] = useState(false);

    const toggleDropdown1 = () => {
        setDropdown1pen(!dropdown1pen);
    };

    const toggleDropdown2 = () => {
        setDropdown2pen(!dropdown2pen);
    };
    const toggleDropdown3 = () => {
        setDropdown3pen(!dropdown3pen);
    };

    const toggleDropdown4 = () => {
        setDropdown4pen(!dropdown4pen);
    };

    return (
        <div className='w-full h-[70px]'>
            <div className='w-full h-full flex justify-between'>
                <img className='lg:w-[100px] w-[90px] lg:h-[50px] h-[40px] ml-10 mt-2 cursor-pointer rounded-lg' src={logo} alt="Cargo" />
                <div className='absolute left-[150px]'>
                    <DarkMode/>
                </div>

                <ul className='lg:flex items-center lg:gap-4 xl:gap-8 ml-[20%] xl:ml-[30%] font-semibold text-black/80 hidden'>
                    <NavLink to='/' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/') ? "border-l-4 border-yellow-500" : ""}`}>HOME<MdOutlineArrowDropDown onClick={toggleDropdown1} className='inline'/>
                    {dropdown1pen && (
                            <ul className="absolute mt-2 py-2 w-20 pl-2 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800">
                                <li><NavLink to="/">Item 1</NavLink></li>
                                <li><NavLink to="/">Item 2</NavLink></li>
                                <li><NavLink to="/">Item 3</NavLink></li>
                            </ul>
                        )}
                    </NavLink>
                    <NavLink to='/pages' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/pages') ? "border-l-4 border-yellow-500" : ""}`}>PAGES<MdOutlineArrowDropDown onClick={toggleDropdown2} className='inline'/>
                    {dropdown2pen && (
                            <ul className="absolute mt-2 py-2 w-20 pl-2 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800">
                                <li><NavLink to="/">Item 1</NavLink></li>
                                <li><NavLink to="/">Item 2</NavLink></li>
                                <li><NavLink to="/">Item 3</NavLink></li>
                            </ul>
                        )}
                    </NavLink>
                    <NavLink to='/tracking' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/tracking') ? "border-l-4 border-yellow-500" : ""}`}>TRACKING</NavLink>
                    <NavLink to='/services' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/services') ? "border-l-4 border-yellow-500" : ""}`}>SERVICES<MdOutlineArrowDropDown onClick={toggleDropdown3} className='inline'/>
                    {dropdown3pen && (
                            <ul className="absolute mt-2 py-2 w-20 pl-2 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800">
                                <li><NavLink to="/">Item 1</NavLink></li>
                                <li><NavLink to="/">Item 2</NavLink></li>
                                <li><NavLink to="/">Item 3</NavLink></li>
                            </ul>
                        )}
                    </NavLink>
                    <NavLink to='/blog' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/blog') ? "border-l-4 border-yellow-500" : ""}`}>BLOG<MdOutlineArrowDropDown onClick={toggleDropdown4} className='inline'/>
                    {dropdown4pen && (
                            <ul className="absolute mt-2 py-2 w-20 pl-2 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800">
                                <li><NavLink to="/">Item 1</NavLink></li>
                                <li><NavLink to="/">Item 2</NavLink></li>
                                <li><NavLink to="/">Item 3</NavLink></li>
                            </ul>
                        )}</NavLink>
                </ul>
                <div className='lg:flex justify-center gap-3 mr-10 my-auto hidden'>
                    <button className='w-[100px] h-[40px] text-xs text-white font-semibold bg-[#FFC700] hover:scale-105 duration-300 hover:drop-shadow-lg rounded-lg'>
                        GET A QUOTE
                    </button>
                    <button className='w-[90px] h-[40px] text-xs text-white font-semibold bg-[#161614] hover:scale-105 duration-300 hover:drop-shadow-lg rounded-lg'>
                        SUBSCRIBE
                    </button>
                </div>

                <div onClick={handleNav} className='block lg:hidden cursor-pointer pr-6 z-10 my-auto dark:text-white'> 
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                <div ref={navRef} className={nav ? ' lg:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-300 dark:bg-gray-700 ease-in-out duration-500  z-20' : 'fixed left-[-100%]'}>
                    <img src={logo} alt="grave" className='p-1 mt-5 ml-5 md:ml-10 cursor-pointer w-[120px] '/>
                    <ul className='lg:hidden flex flex-col gap-10 ml-[40px] md:ml-[100px] mt-[50px] font-semibold text-black/80 text-2xl'>
                        <NavLink to='/' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/') ? "border-l-4 border-yellow-500" : ""}`}>HOME</NavLink>
                        <NavLink to='/pages' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/pages') ? "border-l-4 border-yellow-500" : ""}`}>PAGES</NavLink>
                        <NavLink to='/tracking' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/tracking') ? "border-l-4 border-yellow-500" : ""}`}>TRACKING</NavLink>
                        <NavLink to='/services' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/services') ? "border-l-4 border-yellow-500" : ""}`}>SERVICES</NavLink>
                        <NavLink to='/blog' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/blog') ? "border-l-4 border-yellow-500" : ""}`}>BLOG</NavLink>
                    </ul>
                    <div className='lg:hidden ml-[40px] md:ml-[100px] mt-[50px] flex flex-col gap-10 mr-10 my-auto'>
                        <button className='w-[100px] h-[40px] text-xs text-white font-semibold bg-[#FFC700] hover:scale-105 duration-300 hover:drop-shadow-lg rounded-lg'>
                            GET A QUOTE
                        </button>
                        <button className='w-[90px] h-[40px] text-xs text-white font-semibold bg-[#161614] hover:scale-105 duration-300 hover:drop-shadow-lg rounded-lg'>
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
