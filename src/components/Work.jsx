import React from 'react'
import Project1 from '../assets/box-office4.jpg'
import Project2 from '../assets/Tic-Tac-Toe.jpg'
import Project3 from '../assets/File_conversion.png'
import Project4 from '../assets/cir.jpg'
import Project5 from '../assets/skillspotter.jpg'
import Project6 from '../assets/fitness.jpeg'
import Project7 from '../assets/login.jpg'
export const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                    Work
                    <p className='py-6'>Check out my most recent work</p>
                </p>
            </div>
            {/*Grid Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${Project1})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Box-Office-Express
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://fredsn0tdead.github.io/box-office/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/fredsn0tDead/box-office'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                        </div>

                    </div>

                </div>
                <div style={{backgroundImage: `url(${Project7})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Password Manager
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/fredsn0tDead/Password_Manager'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/fredsn0tDead/Password_Manager'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                        </div>

                    </div>

                </div>
                <div style={{backgroundImage: `url(${Project3})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        DataFlexConvert    
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/fredsn0tDead/File-Converter-Completed'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/fredsn0tDead/File-Converter-Completed'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                        </div>

                    </div>

                </div>
                <div style={{backgroundImage: `url(${Project4})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Content Image Retrieval
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://drive.google.com/drive/u/1/folders/1LUXmhf6lELbv4SWMq9pdDNvtQSw9L-uR'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/fredsn0tDead/Content-Image-Retrieval'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                        </div>

                    </div>

                </div>
                <div style={{backgroundImage: `url(${Project5})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Skill Spotter
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://www.youtube.com/watch?v=omqBcaMNSy4 '>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/aiden5221/capstone-frontend'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                        </div>

                    </div>

                </div>
                <div style={{backgroundImage: `url(${Project6})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            FormFit
                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/fredsn0tDead/frontend-fitness-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/fredsn0tDead/frontend-fitness-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
            {/*Grid Item*/}
            

        </div>    



    </div>
  )
}
