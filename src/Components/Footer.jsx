import React from 'react'
import {  FaArrowUp, FaFacebook, FaGreaterThan, FaHandPointRight, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { HiLocationMarker, HiXCircle } from 'react-icons/hi'
import room from '../Assests/room.png'
import buildings from '../Assests/buldings.jpg'
import businessman from '../Assests/businessman.jpg'
import heropic from '../Assests/hero_pic.jpg'
import ship from '../Assests/ship.jpg'
import truck from '../Assests/truck.jpeg'
import { RiTwitterXFill, RiTwitterXLine } from 'react-icons/ri'


const Footer = () => {
    return (
        <div className='w-full h-[1290px] sm:h-[1430px] md:h-[780px] lg:h-[600px] bg-[#686D81] dark:bg-gray-800'>
            <div className='w-full h-[160px] md:mt-[40px] lg:mt-0 md:flex items-center lg:mb-4 xl:mb-6'>
                <div className='mt-6 md:ml-9 lg:ml-14 xl:ml-16 ml-10'>
                    <h1 className='text-2xl xl:text-3xl font-bold text-white md:mt-0 pt-7 md:pt-0 font-poppins'>Weekly Newsletter</h1>
                    <p className='md:text-[10px] lg:text-[14px] xl:text-[16px] text-white text-[12px]'>There are many variations of passages of lorem ipsum available.</p>
                </div>
                <div>
                    <input type="text" placeholder='Enter Your Mail' className='md:w-[250px] sm:w-[300px] lg:w-[300px] w-[200px] h-6 sm:h-8 xl:w-[400px] xl:h-12 mt-6 rounded-sm md:rounded-lg ml-10 text-[10px] sm:text-[16px] md:ml-[90px] lg:ml-[170px] xl:ml-[300px] font-semibold pl-4' />
                    <button className='bg-[#E88C1F] xl:h-12 xl:w-[130px] sm:w-[100px] w-[80px] h-6 sm:h-8 md:w-[90px] lg:w-[100px] rounded-sm md:rounded-lg ml-2 lg:ml-2 font-semibold text-white text-[10px] sm:text-[16px]'>SUBSCRIBE</button>
                </div>
            </div>
            <div className='w-full md:grid md:grid-cols-3 lg:grid-cols-4 h-[400px]'>
                <div className='md:ml-7 lg:ml-14 xl:ml-16 ml-10'>
                    <h1 className='text-lg text-white font-bold mb-2 font-poppins'>About US</h1>
                    <hr />
                    <p className='text-[#B0B0B0] mt-9 lg:text-[13px] xl:text-[16px]' style={{ wordWrap: 'break-word' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='flex text-[#B0B0B0] mt-5 gap-2 items-center'>
                        <FaPhoneAlt/>
                        <p className='lg:text-[13px] xl:text-[16px]'>| (+94) 11 434 7575</p>
                    </div>
                    <div className='flex text-[#B0B0B0] mt-5 gap-1 items-center'>
                        <HiLocationMarker className='size-5'/>
                        <p className='lg:text-[13px] xl:text-[16px]'>| 42 Lily Ave, Colombo 00600</p>
                    </div>
                </div>
                <div className='md:ml-7 lg:ml-5 xl:ml-8 ml-10 md:mt-0 mt-8'>
                    <h1 className='text-lg text-white font-bold mb-2 font-poppins'>Latest News</h1>
                    <hr />
                    <div className='flex mt-9 gap-1'>
                        <FaGreaterThan className='mt-1 text-[#B0B0B0]'/>
                        <p className='text-[#B0B0B0] lg:text-[13px] xl:text-[16px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    </div>
                    <p className='ml-4 text-[#B0B0B0] mt-2 lg:text-[13px] xl:text-[16px]'>5 Minutes Ago</p>
                    <div className='flex mt-5 gap-1'>
                        <FaGreaterThan className='mt-1 text-[#B0B0B0]'/>
                        <p className='text-[#B0B0B0] lg:text-[13px] xl:text-[16px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    </div>
                    <p className='ml-4 text-[#B0B0B0] mt-2 lg:text-[13px] xl:text-[16px]'>5 Minutes Ago</p>
                </div>
                <div className='md:ml-7 lg:ml-5 xl:ml-8 ml-10 md:mt-0 mt-8'>
                    <h1 className='text-lg text-white font-bold mb-2 font-poppins'>Customer Service</h1>
                    <hr />
                    <div className='mt-9 ml-6'>
                        <ul>
                            <li className='flex text-[#B0B0B0] gap-2 items-center mb-2 lg:text-[13px] xl:text-[16px]'><FaHandPointRight/>Support Forums</li>
                            <li className='flex text-[#B0B0B0] gap-2 items-center mb-2 lg:text-[13px] xl:text-[16px]'><FaHandPointRight/>Communication</li>
                            <li className='flex text-[#B0B0B0] gap-2 items-center mb-2 lg:text-[13px] xl:text-[16px]'><FaHandPointRight/>FAQS</li>
                            <li className='flex text-[#B0B0B0] gap-2 items-center mb-2 lg:text-[13px] xl:text-[16px]'><FaHandPointRight/>Privacy Policy</li>
                            <li className='flex text-[#B0B0B0] gap-2 items-center mb-2 lg:text-[13px] xl:text-[16px]'><FaHandPointRight/>Rules & Condition</li>
                            <li className='flex text-[#B0B0B0] gap-2 items-center mb-2 lg:text-[13px] xl:text-[16px]'><FaHandPointRight/>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='md:mt-10 lg:mt-0 lg:ml-5 xl:ml-8 md:ml-7 ml-10 mt-8'>
                    <h1 className='text-lg text-white font-bold mb-2 font-poppins'>Customer Service</h1>
                    <hr />
                    <div className='grid grid-cols-3 mt-9 gap-3 mr-16'>
                        <img className=' lg:w-[100px] lg:h-[50px] xl:h-[90px] md:h-[65px] object-cover' src={truck} alt="" />
                        <img className=' lg:w-[100px] lg:h-[50px] xl:h-[90px] md:h-[65px] object-cover' src={heropic} alt="" />
                        <img className=' lg:w-[100px] lg:h-[50px] xl:h-[90px] md:h-[65px] object-cover' src={businessman} alt="" />
                        <img className=' lg:w-[100px] lg:h-[50px] xl:h-[90px] md:h-[65px] object-cover' src={buildings} alt="" />
                        <img className=' lg:w-[100px] lg:h-[50px] xl:h-[90px] md:h-[65px] object-cover' src={ship} alt="" />
                        <img className=' lg:w-[100px] lg:h-[50px] xl:h-[90px] md:h-[65px] object-cover' src={room} alt="" />
                    </div>
                </div>
                <div className='lg:flex hidden w-screen items-center '>
                    <p className='text-white lg:ml-14 xl:ml-16 text-sm'>Copyright © 2021 All Rights Reserved. Site by Xiteb®</p>
                    <div className='flex lg:ml-[300px] xl:ml-[700px] gap-3'>
                        <FaFacebook className='lg:size-5 xl:size-6 text-white cursor-pointer'/>
                        <RiTwitterXFill className='lg:size-5 xl:size-6 text-white cursor-pointer'/>
                        <FaInstagram className='lg:size-5 xl:size-6 text-white cursor-pointer'/>
                    </div>
                    <div className='xl:w-[50px] lg:w-[40px] lg:h-[40px] xl:h-[50px] bg-[#E88C1F] rounded-lg flex lg:ml-[160px] xl:ml-[200px] cursor-pointer'>
                         <FaArrowUp className='mx-auto lg:my-3 xl:my-4'/>
                    </div>
                </div>
            </div>
                <div className='flex lg:hidden w-screen items-center mt-[650px] sm:mt-[790px] md:mt-[160px]'>
                    <p className='text-white ml-9 text-[10px] sm:text-sm'>Copyright © 2021 All Rights Reserved. Site by Xiteb®</p>
                    <div className='flex gap-3 ml-[3%] sm:ml-[100px] md:ml-[250px] '>
                        <FaFacebook className='size-4 sm:size-5 text-white cursor-pointer'/>
                        <RiTwitterXFill className='size-4 sm:size-5 text-white cursor-pointer'/>
                        <FaInstagram className='size-4 sm:size-5 text-white cursor-pointer'/>
                    </div>
                    <div className='sm:w-[30px] sm:h-[30px] w-[50px] h-[35px] bg-[#E88C1F] rounded-lg flex ml-[20px] md:ml-[40px] cursor-pointer md:mr-0 mr-[3%]'>
                         <FaArrowUp className='mx-auto my-2'/>
                    </div>
                </div>
        </div>
    )
}

export default Footer
