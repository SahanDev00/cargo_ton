import React, { useEffect, useState } from 'react'
import dark from '../Assests/dark-mode-button.png'
import light from '../Assests/light-mode-button.png'

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    const element = document.documentElement;

    useEffect(() => {
        if(theme === 'dark'){
            element.classList.add('dark');
            localStorage.setItem('theme','dark');
        }else{
            element.classList.remove('dark');
            localStorage.setItem('theme','light');
        }
    },[theme]);

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <>
            <div className='relative top-6'>
                <img src={dark} alt="" onClick={changeTheme} className={`w-10 md:w-12 absolute cursor-pointer z-10 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme !== 'dark'? 'opacity-0' : 'opacity-100'}`} />
                <img src={light} alt="" onClick={changeTheme} className='w-10 md:w-12  z-10 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' />
            </div>
        </>
    )
}

export default DarkMode
