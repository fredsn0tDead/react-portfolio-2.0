import React from 'react'
import LOGO from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
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
      <div className='hidden'> </div>

    </div>
  )
}

export default Navbar