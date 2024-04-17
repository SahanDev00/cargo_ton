import React from 'react'
import ship from '../Assests/ship.jpg'
import plane from '../Assests/plane.jpg'
import { FaArrowAltCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        },
        {
            id: 3,
            name: 'Air Freight Services',
            details: 'At our Auto Services garage, we are fully appreciate how difficult occur it for people to find.',
            pic: ship
        },
        {
            id: 4,
            name: 'Drone Services',
            details: 'These are unique and offen they differ from one industry to the other. Our logistics expertise.',
            pic: plane
        },
        {
            id: 5,
            name: 'Air Freight Services',
            details: 'At our Auto Services garage, we are fully appreciate how difficult occur it for people to find.',
            pic: ship
        },
        {
            id: 6,
            name: 'Drone Services',
            details: 'These are unique and offen they differ from one industry to the other. Our logistics expertise.',
            pic: plane
        }
        
    ];

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 2000,
        cssEase: 'Linear',
        pauseOnHover: true,
        pauseOnFocus: true, 
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
      };

    
    return (
        <div className='w-full h-[400px] md:h-[500px] lg:h-[600px] '>
            <h2 className='flex justify-center text-[#54B508] font-bold font-poppins'>Real Solution, Real Fast !</h2>
            <h1 className='flex justify-center font-bold pt-2 text-2xl sm:text-3xl mb-8 dark:text-white font-saira'>Best Global Logistics Solutions.</h1>
            <div className='w-[350px] sm:w-[800px] lg:w-[1000px] xl:w-[1300px] mx-auto  sm:p-10'>
            <Slider {...settings}>
                {services.map((services, index) => (
                    <div>
                        <div className='xl:w-[500px] xl:h-[250px] lg:w-[400px] lg:h-[200px] md:w-[100%] md:h-[200px] sm:w-[100%] sm:h-[160px] w-[100%] h-[200px] grid grid-cols-2 border mt-4 shadow-xl hover:scale-105 duration-300'>
                                <div className='w-[100%] xl:h-full lg:h-[200px]'>
                                    <img className='object-cover w-[240px] xl:h-[248px] md:h-[199px] sm:h-[159px] h-[199px]' src={services.pic} alt="" />
                                </div>
                                <div className='p-3 sm:p-0 '>
                                    <h1 className='font-bold text-[14px] sm:text-[12px] md:text-[15px] xl:text-lg sm:mt-3 md:mt-6 ml-0.5 sm:ml-3 mt-3 dark:text-white'>{services.name}</h1>
                                    <p className='text-gray-800 mt-3 sm:mt-3 md:mt-1 lg:mt-2 ml-0.5 sm:ml-3 md:text-sm xl:text-[16px] sm:text-[10px] text-[12px] dark:text-gray-300'>{services.details}</p>
                                    <FaArrowAltCircleRight className='inline ml-0.5 size-4 sm:ml-3 sm:size-4 md:size-5 xl:size-6 cursor-pointer dark:text-white' />
                                    <p className='inline-block ml-1 sm:ml-3 mt-2 sm:mt-3 md:mt-5 font-bold text-gray-900 text-[13px] sm:text-[15px] md:text-[15px] xl:text-[16px] cursor-pointer dark:text-white'>Read More </p>
                                </div>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
            <div className='mt-10 flex '>
                <div className='inline'> 
                    <h2 className='text-gray-800 lg:ml-40 sm:text-sm block md:inline  ml-10 text-[12px] dark:text-white'>Logistics and Transport Solutions Saves Your Time.<span className='sm:inline hidden text-black font-semibold dark:text-gray-300'> Finds Your Solutions</span> </h2>
                    <FaArrowAltCircleRight className='md:inline hidden ml-3 size-6 cursor-pointer dark:text-white' />
                    <h2 className='inline md:hidden text-[12px] ml-10 text-black font-semibold dark:text-gray-300'> Finds Your Solutions</h2>
                    <FaArrowAltCircleRight className='inline md:hidden ml-3 size-4 cursor-pointer dark:text-white' />
                </div> 
            </div>
        </div>
    )
}

export default Services
