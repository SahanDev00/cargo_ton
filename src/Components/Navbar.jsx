import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../Assests/logo.png'
import DarkMode from './DarkMode'

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className='w-full h-[70px]'>
            <div className='w-full h-full flex justify-between'>
                <img className='w-[100px] h-[50px] ml-10 mt-2 cursor-pointer' src={logo} alt="Cargo" />
                <DarkMode/>
                <ul className='flex items-center gap-10 ml-[30%] font-semibold text-black/80'>
                    <NavLink to='/' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/') ? "border-l-4 border-yellow-500" : ""}`}>HOME</NavLink>
                    <NavLink to='/pages' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/pages') ? "border-l-4 border-yellow-500" : ""}`}>PAGES</NavLink>
                    <NavLink to='/tracking' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/tracking') ? "border-l-4 border-yellow-500" : ""}`}>TRACKING</NavLink>
                    <NavLink to='/services' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/services') ? "border-l-4 border-yellow-500" : ""}`}>SERVICES</NavLink>
                    <NavLink to='/blog' className={`hover:text-yellow-600 cursor-pointer pl-2 dark:text-white ${isActive('/blog') ? "border-l-4 border-yellow-500" : ""}`}>BLOG</NavLink>
                </ul>
                <div className='flex justify-center gap-3 mr-10 my-auto'>
                    <button className='w-[100px] h-[40px] text-xs text-white font-semibold bg-[#FFC700] hover:scale-105 duration-300 hover:drop-shadow-lg rounded-lg'>
                        GET A QUOTE
                    </button>
                    <button className='w-[90px] h-[40px] text-xs text-white font-semibold bg-[#161614] hover:scale-105 duration-300 hover:drop-shadow-lg rounded-lg'>
                        SUBSCRIBE
                    </button>
                    </div>
            </div>
        </div>
    )
}

export default Navbar
