import React from 'react'
import HTML from '../assets/html.png'
import JS from '../assets/javascript.png'
import REACT from '../assets/react.png'
import MONGO from '../assets/mongo.png'
import PYTHON from '../assets/Python.png'
import SQL from '../assets/sql.png'
import Firebase from '../assets/firebase.png'
import  GOOGLE from '../assets/google.png'

export const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'> These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid:cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GOOGLE} alt='java' />
                    <p className='my-4'>Google Cloud Platform</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACT} alt='React' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Firebase} alt='Firebase' />
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MONGO} alt='Mongo' />
                    <p className='my-4'>MONGODB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PYTHON} alt='python' />
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt='Javascript' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SQL} alt='Postgres' />
                    <p className='my-4'>POSTGRES</p>
                </div>
            </div>

        </div>

    </div>
  )
}
