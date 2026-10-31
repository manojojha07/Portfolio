import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';


const Footer = () => {
  return (
    <div className='px-4 md:px-20 flex justify-between p-5 bg-black text-white'>
      <p className='hidden md:block'>Copyrights © 2025</p>
     <p className='xs '>Need a Portfolio Website Like This | Contact <span className='text-yellow-300 font-bold'> Manoj Ojha</span>  </p>
     <Link smooth to="/#home" >  < FaArrowCircleUp size={30}/> </Link>
    
    </div>
  )
}

export default Footer