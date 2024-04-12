import React from 'react'
import pic from '../Assests/hero_pic.jpg'
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

const Hero = () => {
    return (
        <div className='w-full  flex justify-center mt-5 md:mb-44'>
            <div className='w-[90%]'>
                <div className='bg-white dark:bg-[#030637] w-full flex justify-end'>
                    <img src={pic} alt="" className=' lg:w-[890px] md:w-[750px] sm:w-[500px] w-[400px]  sm:h-[515px] h-[450px] object-cover'/>
                </div>
            </div>
            
            <div className='absolute z-10 left-[40px] md:left-[50px] md:top-[122px] sm:top-[110px] top-[105px] bg-white/75 sm:bg-white dark:bg-[#030637]/75 sm:dark:bg-[#030637] lg:w-[500px] lg:h-[450px] md:w-[410px] md:h-[450px] sm:w-[390px] sm:h-[470px] w-[260px] h-[380px]'>
                <p className='border-l-4 border-[#ffc117] pl-2 font-semibold mt-[30px] sm:mt-[60px] lg:mt-[60px] ml-[15px] lg:ml-[50px] dark:text-white'>L O G I S T I C</p>
                <h1 className='text-4xl sm:text-6xl mt-2 ml-[10px] lg:ml-[44px] font-semibold dark:text-white font-poppins'>Best Shipping <br/><span className='font-bold text-[#FFC117]'>Partner</span></h1>
                <p className='mt-4 lg:mt-8 ml-[10px] lg:ml-[45px] text-black/90 dark:text-white font-poppins'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis veniam labore nostrum sed omnis nulla neque magni, in consectetur?</p>
                <button className='w-[120px] h-[40px] ml-[10px] lg:ml-[45px] mt-6 text-xs text-white font-semibold bg-[#FFC117] hover:scale-105 duration-300 hover:drop-shadow-lg rounded-lg'>DISCOVER MORE</button>
            </div>
            <div className='z-10 absolute lg:top-[550px] xl:top-[660px] top-[500px] md:top-[650px] left-0 w-[120px] h-[40px] p-3 mt-6 text-xs text-white font-semibold bg-[#FFC117]'>
                <div className='grid grid-cols-2'>
                    <div className='items-center my-auto'>
                         2 / 2 
                    </div>
                    <div className='flex items-center my-auto text-xl'>
                        <HiArrowSmLeft className='cursor-pointer'/>
                        <HiArrowSmRight className='cursor-pointer'/>
                    </div>
                </div>
            </div>
            <p className='absolute transform rotate-90 top-[300px] right-0'>#CARGOTON LOGISTIC</p>
        </div>
    )
}

export default Hero
