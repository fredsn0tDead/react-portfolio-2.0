import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
export const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] '>
        {/*? Container ?*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-pink-600'> Hi, my name is</p>
            <h1 className='text-4xl smLtext-7x1 font-bond text-[#ccd6f6]'>Frederick Tetteh </h1>
            <h2 className='text-4xl smLtext-7x1 font-bond text-[#8892b0]'>I'm a Fullstack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700]' >I'm a Full-Stack developer specializing in builing and designing fullscale applications. I specialize in 
                database management (Relational and Non-Relational), API development, and Frontend development. Currently I'm focused on designing and building
                scalable applications using React, Node, and MongoDB.
            </p>
            <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
            <span className='hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3
            '/>
            </span>
            </button>


            </div>
        </div>


    </div>
  )
}
