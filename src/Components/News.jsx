import React from 'react'
import truck from '../Assests/truck.jpeg'
import plane from '../Assests/planeshipping.jpg'
import ship from '../Assests/shippingship.jpg'
import rail from '../Assests/rail.png'
import { IoChatbubblesSharp } from "react-icons/io5";

const News = () => {
    const items = [
        {
            id: 1,
            name: 'CURABITUR LOREM UISM QUIS',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sequi voluptates aliquid nihil minus quidem, maiores similique!.',
            no: 15,
            pic: truck,
            month: 'May',
            date: 26
        },
        
        {
            id: 2,
            name: 'CURABITUR LOREM UISM QUIS',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sequi voluptates aliquid nihil minus quidem, maiores similique!.',
            no: 15,
            pic: rail,
            month: 'May',
            date: 22
        },
        
        {
            id: 3,
            name: 'CURABITUR LOREM UISM QUIS',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sequi voluptates aliquid nihil minus quidem, maiores similique!.',
            no: 15,
            pic: plane,
            month: 'May',
            date: 20
        },
        
        {
            id: 4,
            name: 'CURABITUR LOREM UISM QUIS',
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sequi voluptates aliquid nihil minus quidem, maiores similique!.',
            no: 15,
            pic: ship,
            month: 'May',
            date: 15

        },
        
    ];

    return (
        <div className='w-full xl:h-[700px] lg:h-[600px] '>
            <h1 className='flex justify-center font-bold pt-2 text-2xl sm:text-3xl dark:text-white font-poppins'>Latest News.</h1>
            <div className='flex justify-center mb-6 items-center gap-3'>
                <div className='w-[10px] h-[10px] bg-[#2FC4F4]'/>
                <p className='text-xs font-semibold dark:text-white'>INTEGER CONGUE ELIT</p>
            </div>
            <div className='flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 md:gap-5 sm:gap-4 md:mx-[50px] lg:gap-8 lg:mx-36 xl:mx-40 sm:mx-10  items-center dark:text-white '>
                {items.map((items, index) => (
                    <div className='xl:w-[500px] xl:h-[250px] lg:w-[380px] lg:h-[200px] md:w-[100%] md:h-[200px] sm:w-[100%] sm:h-[160px] w-[90%] grid grid-cols-2 border mt-4 shadow-xl hover:scale-105 duration-300 hover:text-white hover:bg-[#2FC4F4]'>
                        <div className='xl:w-[100%] xl:h-full lg:h-[600px]'>
                            <img className='object-cover w-[400px] xl:h-[248px] md:h-[199px] sm:h-[159px] h-[100%]' src={items.pic} alt="" />
                        </div>
                        <div className='p-3 sm:p-0 hover:text-white'>
                            <h1 className='font-semibold text-[17px] sm:text-[9px] md:text-[10px] xl:text-sm ml-1  sm:ml-3 xl:mt-8 sm:mt-5 md:mb-0 lg:mb-3'>{items.name}</h1>
                            <p className='inline text-[9px] md:text-xs ml-1  sm:ml-3 '>Admin</p>
                            <IoChatbubblesSharp className='size-3 inline ml-1  sm:ml-3' />
                            <p className='inline text-[9px] md:text-xs ml-1  sm:ml-3'>{items.no}</p>
                            <p className='text-gray-800 sm:mt-3 md:mt-1 lg:mt-4 ml-1  sm:ml-3 md:text-xs lg:text-[13px] xl:text-[15px] sm:text-[10px] text-[10px] dark:text-gray-300 pr-2' style={{ wordWrap: 'break-word'}}>{items.details}</p>
                        </div>
                        <div className='absolute w-[40px] h-[40px] bg-[#2FC4F4] text-white'>
                            <p className='font-semibold text-sm flex justify-center'>{items.date}</p>
                            <p className='text-xs flex justify-center'>{items.month}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default News
