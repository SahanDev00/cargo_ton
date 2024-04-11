import React from 'react'

const Stats = () => {
    return (
        <div className='w-full h-[400px] mt-[150px] md:mt-0 border-b-2 border-t-2 pt-6 relative'>
            <h1 className='text-3xl font-bold flex justify-center dark:text-white font-poppins'>Our <span className='text-[#0A326D] pl-2 dark:text-[#67a1f8]'> Stats</span></h1>
            <div className='w-full h-full flex gap-[4%] sm:gap-[5%] md:gap-[5%] lg:gap-20 xl:gap-44 justify-center mt-4 sm:mt-6'>
                <p className='text-[43px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-bold text-white drop-shadow-lg dark:text-blue-950'>890</p>
                <p className='text-[43px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-bold text-white drop-shadow-lg dark:text-blue-950'>137</p>
                <p className='text-[43px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-bold text-white drop-shadow-lg dark:text-blue-950'>740</p>
                <p className='text-[43px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-bold text-white drop-shadow-lg dark:text-blue-950'>600</p>
            </div>
            <div className='grid grid-cols-4 absolute top-24 gap-6 mx-[2%] sm:top-28 sm:mx-12 md:top-32 md:gap-16 md:mx-16 lg:top-32 xl:top-36 lg:gap-44 xl:gap-44 lg:mx-24 xl:mx-28  items-center'>
                <div className='flex'>
                    <h1 className='sm:text-2xl md:text-3xl font-bold text-[#0A326D] my-auto dark:text-white'>890</h1>
                    <p className='font-semibold text-[10px] ml-1 sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-xl sm:ml-2 md:ml-3 text-[#0A326D] dark:text-white font-poppins'>Delivered Packages</p>
                </div>
                <div className='flex'>
                    <h1 className='sm:text-2xl md:text-3xl font-bold text-[#0A326D] my-auto dark:text-white'>137</h1>
                    <p className='font-semibold text-[10px] ml-1 sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-xl sm:ml-2 md:ml-3 text-[#0A326D] dark:text-white font-poppins'>Countries Covered</p>
                </div>
                <div className='flex'>
                    <h1 className='sm:text-2xl md:text-3xl font-bold text-[#0A326D] my-auto dark:text-white'>740</h1>
                    <p className='font-semibold text-[10px] ml-1 sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-xl sm:ml-2 md:ml-3 text-[#0A326D] dark:text-white font-poppins'>Tons of Goods</p>
                </div>
                <div className='flex'>
                    <h1 className='sm:text-2xl md:text-3xl font-bold text-[#0A326D] my-auto dark:text-white'>600</h1>
                    <p className='font-semibold text-[10px] ml-1 sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-xl sm:ml-2 md:ml-3 text-[#0A326D] dark:text-white font-poppins'>Satisfied Clients</p>
                </div>
            </div>
            
        </div>
    )
}

export default Stats
