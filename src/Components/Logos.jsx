import React from 'react'
import logo1 from '../Assests/greylogo.png'
import logo2 from '../Assests/greylogo2.png'
import logo3 from '../Assests/greylogo3.png'
import logo4 from '../Assests/greylogo4.png'
import logo5 from '../Assests/greylogo5.png'

const Logos = () => {
    return (
        <div className='w-full h-[300px] xl:h-[250px] mt-[360px] sm:mt-[420px] md:mt-8 border-t-2 border-b-2'>
            <h1 className='flex justify-center font-bold text-2xl sm:text-3xl mt-6 dark:text-white font-poppins'>Client Logos</h1>
            <div className='md:flex grid grid-cols-3 justify-between items-center mt-5 mx-4 sm:mx-2 lg:mx-2 md:mx-2 xl:mx-10'>
                <img className='w-[100px] md:w-[140px] lg:w-[160px] xl:w-[200px]' src={logo1} alt="" />
                <img className='w-[180px] md:w-[200px] lg:w-[220px] xl:w-[250px]' src={logo2} alt="" />
                <img className='w-[280px] md:w-[290px] lg:w-[310px] xl:w-[350px]' src={logo3} alt="" />
                <img className='w-[100px] md:w-[120px] lg:w-[140px] xl:w-[170px]' src={logo4} alt="" />
                <img className='w-[90px] md:w-[100px] lg:w-[120px] xl:w-[160px]' src={logo5} alt="" />
            </div>
        </div>
    )
}

export default Logos
