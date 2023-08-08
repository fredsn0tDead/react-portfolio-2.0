import React from 'react'
import LOGO from '../assets/logo.png'
import { FaBars, FaTimes,FaGithub,FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleclick = () => setNav(!nav) // toggle nav if nav is true set to false and vice versa
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
        <img src={LOGO} alt="logo" style={{width: '175px'}} />

        </div>
        {/*? menu button ?*/}
       
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      
      {/*? Hamburger button ?*/}
      <div onClick={handleclick} className='md:hidden z-10'> 
      {!nav ? <FaBars /> : <FaTimes />}
    
      </div>

      {/*? Mobile Menu ?*/}
     
      <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-scree bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li> 
        </ul>


      {/*Social Icons*/}
      <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'> 
      <ul>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
        <a className='flex justify-between items center w-full text-gray-300' href="/">
          Linkedin <FaLinkedin size={30} />
        </a>

      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]' >
        <a className='flex justify-between items center w-full text-gray-300' href="/">
          Github <FaGithub size={30} />
        </a>

      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#6fc2b0]' >
        <a className='flex justify-between items center w-full text-gray-300' href="/">
          Email <HiOutlineMail size={30} />
        </a>

      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]' >
        <a className='flex justify-between items center w-full text-gray-300' href="/">
          Resume <BsFillPersonLinesFill size={30} />
        </a>

      </li>
      <li></li>
      <li></li>

    </ul>
      
      </div>
    
    </div>
  )
}

export default Navbar