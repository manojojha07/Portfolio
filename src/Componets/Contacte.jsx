import React from 'react';
import { motion } from 'framer-motion';

const Contacte = () => {
  return (
    <div className='w-full md:py-30 md:pt-20 bg-gray-900 text-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 min-h-70'>

      {/* Heading */}
      <motion.p
        className='font-bold text-3xl py-10 text-center'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Contact <span className='text-yellow-300'>Me</span>
      </motion.p>

      {/* Form */}
      <motion.div
        className="mt-10 px-4 max-w-screen-md mx-auto"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >

        {/* First Row */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            className="p-3 bg-gray-700 rounded-md outline-0 w-full sm:w-1/2"
            type="text"
            placeholder="Enter Name"
          />
          <input
            className="p-3 bg-gray-700 rounded-md outline-0 w-full sm:w-1/2"
            type="text"
            placeholder="Enter Your Mail Id"
          />
        </div>

        {/* Second Row */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-5">
          <input
            className="p-3 bg-gray-700 rounded-md outline-0 w-full sm:w-1/2"
            type="text"
            placeholder="Enter Your Mobile Number"
          />
          <input
            className="p-3 bg-gray-700 rounded-md outline-0 w-full sm:w-1/2"
            type="text"
            placeholder="Enter Subject Of The Mail"
          />
        </div>

        {/* Textarea */}
        <div className="mt-5">
          <textarea
            className="outline-0 p-3 bg-gray-700 w-full rounded-md"
            rows={11}
            placeholder="Enter Your Message Here"
          />
        </div>

        {/* Button */}
        <div className="mt-4 text-center">
          <button className="
            transition delay-150 duration-300 ease-in-out  hover:scale-103 
            px-10 hover:text-gray-300 
            hover:bg-transparent hover:shadow-2xs border-2 border-transparent hover:border-blue-500
            rounded-full py-2 bg-indigo-500 shadow-lg shadow-indigo-500/50 
          ">
            Submit
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default Contacte;
