import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='w-full md:py-30 md:pt-20 bg-gray-800 text-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 min-h-70'>

      <motion.h1
        className='text-center font-extrabold py-10 text-4xl'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About <span className='text-blue-500'>me</span>
      </motion.h1>

      <motion.p
        className='py-2 pb-20 font-semibold'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
      >
        I’m a Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, Tailwind, MongoDB, Node.js, Express.js, ReactJS, and Figma. I’m passionate about using these skills to develop innovative web applications that are user-friendly. I’m always eager to learn more about web development and marketing. I enjoy the challenge of coding and solving real-world problems. Currently, I’m looking for opportunities to join a team that values innovation and shares my enthusiasm for technology.
      </motion.p>

    </div>
  )
}

export default About
