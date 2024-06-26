import React from 'react'
import worker from '../Assests/worker.png'
import worker2 from '../Assests/worker2.jpg'
import quote from '../Assests/quote.png'
import square from '../Assests/square.png'
import square2 from '../Assests/square2.png'
import triangle from '../Assests/triangle.png'

const Welcome = () => {
    return (
        <div className='w-full mb-20 flex justify-center mt-10 lg:mt-0 border-t-2 pt-5 border-b-2 pb-20'>
            <div className='w-[1250px] md:grid md:grid-cols-2'>
                <h1 className=' md:hidden flex font-bold pr-3 text-2xl sm:text-3xl items-center justify-center mb-6 mx-2 dark:text-white'>TransMax Logistics Around the World</h1>
                <div className='flex'>
                    <img className=' xl:ml-[200px] lg:w-[245px] lg:h-[340px] lg:ml-[170px] xl:w-[270px] md:w-[230px] md:h-[300px] md:ml-[110px] w-[45%] h-[50%] mx-[2%] md:mx-0' src={worker} alt="" />
                    <img className='md:absolute xl:ml-[100px] md:mt-[200px] lg:w-[190px] lg:ml-[70px] md:w-[160px] md:h-[180px] md:ml-[40px] w-[45%] h-[50%] mx-[2%] md:mx-0' src={worker2} alt="" />
                    <img className='absolute w-[40px] xl:ml-[90px] mt-[380px] lg:ml-[60px] lg:mt-[360px] md:ml-[20px] md:mt-[330px] ml-[-100%]' src={triangle} alt="" />
                    <img className='absolute w-[40px] xl:ml-[90px] mt-[270px] lg:ml-[60px] lg:mt-[260px] md:ml-[20px] md:mt-[230px] ml-[-100%]' src={square} alt="" />
                    <img className='absolute w-[140px] sm:w-[165px] xl:ml-[410px] lg:ml-[320px] lg:w-[130px] lg:mt-[320px] md:ml-[250px] md:w-[110px] md:mt-[280px] ml-[40%] mt-[55%]' src={quote} alt="" />
                    <p className='absolute xl:ml-[450px] text-white lg:text-[20px] font-semibold lg:ml-[360px] lg:mt-[330px] md:ml-[285px] md:mt-[290px] md:text-[15px] ml-[49%] mt-[58%] text-[19px]'>15,350 +</p>
                    <p className='absolute xl:ml-[435px] text-white lg:text-[12px] lg:ml-[347px] lg:mt-[355px] md:ml-[278px] md:mt-[310px] md:text-[9px] ml-[46%] mt-[63%] text-[12px]' >Clients Worldwide</p>
                </div>
                <div>
                    <h1 className=' ml-5 hidden md:block md:absolute text-4xl font-bold md:mt-8 pr-3 xl:pr-0 dark:text-white'>TransMax Logistics <br/> Around <span className='text-[#F98C3E]'>the World</span></h1>
                    <img className='w-[40px] pr-3 xl:pr-0 ml-[-100%] md:ml-0' src={square2} alt="" />
                    <p className='md:mt-10 xl:mt-2 font-semibold text-black/90 text-lg ml-5 pr-3 xl:pr-0 dark:text-gray-300 font-poppins'>TransMax is the world’s driving worldwide coordinations supplier - we uphold industry and exchange the worldwide trade of merchandise through land transport.</p>
                    <p className='mt-3 font-semibold text-black/70 ml-5 pr-3 xl:pr-0 dark:text-gray-400 font-poppins'>Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.</p>
                    <button className='text-[#085566] bg-[#E3E3E3] ml-5 pr-3 xl:pr-0 w-[170px] h-[50px] font-bold text-sm mt-7 hover:scale-105 hover:drop-shadow-lg duration-300'>MORE ABOUT US</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
