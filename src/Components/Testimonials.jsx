import React, { useRef } from 'react'
import quote from '../Assests/quote2.png'
import testimonial from '../Assests/testimonial.png'
import { LuArrowLeftSquare } from "react-icons/lu";
import { LuArrowRightSquare } from "react-icons/lu";
import { RiAddBoxFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: 'JOHN DEO',
            post: 'Managing Director',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis voluptates, vel possimus incidunt sed laboriosam sit minima maxime rem quo.'
        },
        {
            id: 2,
            name: 'JOHN DEO',
            post: 'Managing Director',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis voluptates, vel possimus incidunt sed laboriosam sit minima maxime rem quo.'
        },
        {
            id: 3,
            name: 'JOHN DEO',
            post: 'Managing Director',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis voluptates, vel possimus incidunt sed laboriosam sit minima maxime rem quo.'
        },
    ];

    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <LuArrowLeftSquare className="custom-arrow" onClick={() => sliderRef.current && sliderRef.current.slickPrev()} />,
        nextArrow: <LuArrowRightSquare className="custom-arrow" onClick={() => sliderRef.current && sliderRef.current.slickNext()} />
      };


    return (
        <div className='w-full h-[550px]'>
            <h1 className='flex justify-center mt-10 text-xl sm:text-2xl md:text-3xl font-bold dark:text-white font-poppins'><span className='mr-2 text-[#54B508]'>Testimonials</span> and Why Choose <span className='ml-2 text-[#54B508]'>Us</span></h1>
            <div className='md:grid md:grid-cols-2 block w-[90%] h-[500px] md:mx-[5%] lg:gap-0 md:gap-4 lg:mx-auto mt-16'>
                <div>
                    <h1 className='sm:text-xl lg:text-2xl font-bold md:ml-0 ml-8 dark:text-white'><span className='text-[#54B508]'>TRUSTED</span> CLIENTS</h1>
                    <h2 className='sm:text-[14px] xl:text-[16px] uppercase font-semibold text-gray-800 mt-2 md:ml-0 ml-8 dark:text-gray-300 font-saira'>Lorem ipsum dolor sit amet consectetur.</h2>
                    <Slider {...settings} ref={sliderRef}>
                        {reviews.map((review, index) => (
                            <div>
                                <div className='relative'>
                                    <img className='md:w-[350px] lg:w-[430px] xl:w-[550px] mt-8 md:ml-2 lg:ml-3 xl:ml-5 sm:w-[600px] w-[400px] ml-8' src={testimonial} alt="" />
                                    <img className='absolute md:size-16 lg:size-20 xl:size-28 md:top-10 lg:top-16 sm:size-28 size-20 top-9 ml-5 md:ml-0' src={quote} alt="" />
                                    <p className='max-w-[300px] text-[14px] sm:max-w-[400px] ml-24 sm:ml-32 top-4 sm:top-9 sm:text-[20px] md:max-w-[300px] absolute  md:text-[13px] md:top-6 md:ml-12 lg:top-10 xl:top-16 lg:ml-16 xl:ml-24 xl:text-[16px] lg:text-[14px] text-gray-700'>{review.review}</p>
                                </div>
                                <div className='flex items-center dark:text-white'>
                                    <div className='flex ml-7 md:ml-5'>
                                        <LuArrowLeftSquare className='size-6 cursor-pointer' onClick={() => sliderRef.current && sliderRef.current.slickPrev()}/>
                                        <LuArrowRightSquare className='size-6 cursor-pointer' onClick={() => sliderRef.current && sliderRef.current.slickNext()}/>
                                    </div>
                                    <div className='sm:ml-80 md:ml-36 lg:ml-56 xl:ml-72 ml-40'>
                                        <h1 className='font-bold'>{review.name}</h1>
                                        <p className='text-xs'>{review.post}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div>
                    <h1 className='sm:text-xl lg:text-2xl font-bold  md:ml-0 ml-8 md:mt-0 mt-14 dark:text-white'>WHY CHOOSE <span className=' text-[#54B508]'>US</span></h1>
                    <h2 className='sm:text-[14px] xl:text-[16px] uppercase font-semibold text-gray-800 mt-2 md:ml-0 ml-8 dark:text-gray-300 font-saira'>Lorem ipsum dolor sit amet consectetur.</h2>
                    <div className=' mt-7 md:ml-0 ml-9 dark:text-white'>
                        <hr />
                        <div className='flex items-center justify-between py-3'>
                            <p className='font-semibold md:text-[14px] lg:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <RiAddBoxFill className='md:size-5 lg:size-7 size-7 '/>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between py-3'>
                            <p className='font-semibold md:text-[14px] lg:text-[16px]'>Lorem ipsum dolor sit amet.</p>
                            <RiAddBoxFill className='md:size-5 lg:size-7 size-5 sm:size-7 '/>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between py-3'>
                            <p className='font-semibold md:text-[14px] lg:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <RiAddBoxFill className='md:size-5 lg:size-7 size-7 '/>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between py-3'>
                            <p className='font-semibold md:text-[14px] lg:text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <RiAddBoxFill className='md:size-5 lg:size-7 size-7 '/>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
