import React from 'react'
import ship from '../Assests/ship.jpg'
import plane from '../Assests/plane.jpg'
import { FaArrowAltCircleRight } from "react-icons/fa";
import {RxDotFilled} from 'react-icons/rx'

const Services = () => {

    const services = [
        {
            id: 1,
            name: 'Air Freight Services',
            details: 'At our Auto Services garage, we are fully appreciate how difficult occur it for people to find.',
            pic: ship
        },
        {
            id: 2,
            name: 'Drone Services',
            details: 'These are unique and offen they differ from one industry to the other. Our logistics expertise.',
            pic: plane
        }
        
    ];

    
    return (
        <div className='w-full h-[600px] md:h-[500px] lg:h-[600px] '>
            <h2 className='flex justify-center text-[#54B508] font-bold font-poppins'>Real Solution, Real Fast !</h2>
            <h1 className='flex justify-center font-bold pt-2 text-2xl sm:text-3xl mb-8 dark:text-white font-saira'>Best Global Logistics Solutions.</h1>
            <div className='flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 md:gap-5 sm:gap-4 md:mx-[50px] lg:gap-8 lg:mx-36 xl:mx-40 sm:mx-10  items-center dark:text-white '>
            {services.map((services, index) => (
                <div className='xl:w-[500px] xl:h-[250px] lg:w-[400px] lg:h-[200px] md:w-[100%] md:h-[200px] sm:w-[100%] sm:h-[160px] w-[90%] grid grid-cols-2 border mt-4 shadow-xl hover:scale-105 duration-300'>
                    <div className='w-[100%] xl:h-full lg:h-[200px]'>
                        <img className='object-cover w-[240px] xl:h-[248px] md:h-[199px] sm:h-[159px] h-[100%]' src={services.pic} alt="" />
                    </div>
                    <div className='p-3 sm:p-0'>
                        <h1 className='font-bold text-[17px] sm:text-[12px] md:text-[15px] xl:text-lg sm:mt-3 md:mt-6 ml-3 mt-3'>{services.name}</h1>
                        <p className='text-gray-800 sm:mt-3 md:mt-1 lg:mt-2 ml-3 md:text-sm xl:text-[16px] sm:text-[10px] text-[15px] dark:text-gray-300'>{services.details}</p>
                        <FaArrowAltCircleRight className='inline ml-3 sm:size-4 md:size-5 xl:size-6 cursor-pointer ' />
                        <p className='inline-block ml-3 mt-4 sm:mt-3 md:mt-5 font-bold text-gray-900 sm:text-[12px] md:text-[15px] xl:text-[16px] cursor-pointer dark:text-white'>Read More </p>
                    </div>
                </div>
            ))}
            </div>
            <div className='mt-10 flex justify-evenly lg:justify-between'>
                <div className='inline'> 
                    <h2 className='text-gray-800 lg:ml-40 sm:text-sm sm:inline md:ml-0 sm:ml-3 ml-5 text-[12px] dark:text-white'>Logistics and Transport Solutions Saves Your Time.<span className='sm:inline hidden text-black font-semibold dark:text-gray-300'> Finds Your Solutions</span> </h2>
                    <FaArrowAltCircleRight className='sm:inline ml-3 size-6 cursor-pointer hidden dark:text-white' />
                    <h2 className='inline sm:hidden text-black font-semibold ml-4 dark:text-gray-300'> Finds Your Solutions</h2>
                    <FaArrowAltCircleRight className=' ml-3 size-6 cursor-pointer inline sm:hidden dark:text-white' />
                </div>
                <div className='flex items-center mr-3 sm:mr-10'>
                <RxDotFilled className='md:size-6 sm:size-5 lg:size-8 text-green-500 cursor-pointer '/>
                <RxDotFilled className='md:size-6 sm:size-5 lg:size-8 text-gray-500 cursor-pointer'/>
                <RxDotFilled className='md:size-6 sm:size-5 lg:size-8 text-gray-500 cursor-pointer'/>
                <RxDotFilled className='md:size-6 sm:size-5 lg:size-8 text-gray-500 cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}

export default Services
