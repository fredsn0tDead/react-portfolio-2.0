import React from 'react'
import {Link} from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { useState,useEffect } from 'react'
import ReactTyped from "react-typed";
export const Home = () => {
  return (



    <div name='home' className='w-full h-screen bg-[#0a192f] '>
        {/*? Container ?*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-pink-600'> Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bond text-[#ccd6f6]'>Frederick Tetteh </h1>
            <h2 className='text-4xl sm:text-7xl font-bond text-[#8892b0]'>{'<'}
            <ReactTyped strings={["I'm a Fullstack Developer."]} typeSpeed={100} loop />{'/>'}
             
              </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]' >I'm a Full-Stack developer specializing in builing and designing fullscale applications. I specialize in 
                database management (Relational and Non-Relational), API development, and Frontend development. Currently I'm focused on designing and building
                scalable applications using React, Node, and MongoDB.
            </p>
            <div>
            <button  className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> <Link  to="work"  smooth={true}  duration={500} >
          View Work
        </Link>
            
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
