import React from 'react'
import { FaCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion, useMotionValue, useTransform } from "framer-motion"


const Services = () => {

   const x = useMotionValue(0)
  const y = useMotionValue(0)

  // mouse position ko rotation me convert
  const rotateX = useTransform(y, [-100, 100], [20, -20])
  const rotateY = useTransform(x, [-100, 100], [-20, 20])

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    x.set(e.clientX - rect.left - centerX)
    y.set(e.clientY - rect.top - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div className='w-full md:py-30 s md:pt-20 text-center
    p  bg-gray-900 text-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 min-h-80'>
        <div className='text-center'>
            <h1 className='text-2xl py-10 font-extrabold'>My <span className='text-purple-500'>Sevices</span></h1>
        </div>
        {/* services boxes here */}
        <div className='grid grid-cols-1 sm:grid-cols-2 pb-20 text-white md:grid-cols-3 gap-10 mt-10'>
            {/* this is fiest box */}
         <div   className='py-5  bg-gray-700 rounded-3xl hover:scale-[1.03] duration-500 border-transparent
         hover:border-blue-500 border-2'>
          <FaCode size={70} className='mx-auto text-center'/>
          <h2 className='text-3xl md:text-2xl pb-2'>Web Development</h2>
          <p className='px-4'>As a web developer, I create dynamic and functional websites using a combination of front-end and back-end technologies. I specialize in building responsive, user-friendly interfaces that enhance the user experience. Whether it’s an e-commerce site, a blog, or a custom web application, I bring ideas to life through code. </p>
         </div>
          {/* secound box */}
         <motion.div className='py-5  bg-gray-700 rounded-3xl hover:scale-[1.03] duration-500 border-transparent
         hover:border-blue-500 border-2'>
          <FaCode size={70} className='mx-auto text-center'/>
          <p className='text-3xl md:text-2xl pb-2'>UI Development</p>
          <p className='px-4'>UI (User Interface) development focuses on creating the visual elements of a website or application. I specialize in turning design mockups into interactive interfaces using HTML, CSS, and JavaScript. My goal is to ensure that users have a seamless and enjoyable experience while interacting with your product. </p>
         </motion.div>
         {/* third box  */}
         <div className='py-5  bg-gray-700 rounded-3xl hover:scale-[1.03] duration-500 border-2 border-transparent hover:border-blue-500'>
        <MdOutlineDesignServices  size={70} className='mx-auto text-center'/>
        <p className='text-3xl'>UI Designing</p>
        <p className='px-4'>UI design is all about aesthetics and usability. As a UI designer, I craft visually appealing layouts, choose color schemes, and create intuitive navigation. I pay attention to details like typography, spacing, and consistency. My designs aim to enhance the overall look and feel of your digital product. </p>
         </div>
        </div>
    </div>
  )
}

export default Services