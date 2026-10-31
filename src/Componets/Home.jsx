import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Image from "../assets/image.png";
import { motion, useMotionValue, useTransform } from "framer-motion"


const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100); // Trigger entrance animation
  }, []);

  const splitWords = (text) =>
    text.split(" ").map((word, i) => (
      <span
        key={i}
        className="relative inline-block group overflow-hidden mx-1"
      >
        <span className="transition-all duration-300 group-hover:-translate-y-full">
          {word}
        </span>
        <span className="absolute top-full left-0 transition-all duration-300 group-hover:top-0 text-yellow-400">
          {word}
        </span>
      </span>
    ));



  // 3d roted image all function to created chatGPT
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
    <div className="w-full md:py-30 md:pt-20 md:mt-14 bg-gray-900 text-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen flex flex-col-reverse md:flex-row items-center  justify-between gap-10">
      {/* Left Section */}
      <div
        className={`flex-1 transition-all duration-300 ${showContent ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
      >
        <h1 className="text-3xl md:text-5xl font-semibold">
          {splitWords("Hello, I am")}
        </h1>
        <p className="text-5xl  md:text-6xl font-bold mt-4">
          {splitWords("Manoj Ojha")}

          <br />
          <span className="text-3xl md:text-6xl font-bold mt-4">  I'Am</span>

          <span className="text-yellow-400">  Full Stack Developer</span>
        </p>
        <p className="py-4 text-lg leading-relaxed">
          Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality
        </p>


        {/* Social Media Icons */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/manoj-ojha-a58153428?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-500 p-3 rounded-full text-blue-500
    hover:bg-blue-500 hover:text-black
    hover:shadow-[0_0_20px_9px_rgba(37,99,235,0.6)]
    transition duration-700 shadow"
          >
            <FaLinkedinIn size={23} />
          </a>

          <a
            href="https://github.com/manojojha07"
            target="blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-500 p-3 rounded-full text-blue-500
    hover:bg-blue-500 hover:text-black
    hover:shadow-[0_0_20px_9px_rgba(37,99,235,0.6)]
    transition duration-700 shadow"
          >
            <FaGithub size={23} />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manojojha154@gmail.com"
            target="_blank"
            className="border-2 border-blue-500 p-3 rounded-full text-blue-500
    hover:bg-blue-500 hover:text-black
    hover:shadow-[0_0_20px_9px_rgba(37,99,235,0.6)]
    transition duration-700 shadow"
          >
            <IoMdMail size={23} />
          </a>
        </div>

        {/* Download Button */}
        <div className="mt-8">
          <a
            href="/Resume.pdf"
            download="Manoj_Ojha_Resume.pdf"
            className="group flex items-center shadow-[0_0_20px_4px_rgba(37,99,235,0.6)]
             gap-3 px-6 w-[250px] py-3 bg-blue-600 hover:bg-transparent border-2 border-transparent
             hover:border-blue-500 hover:shadow-none
              transition duration-300 rounded-full font-semibold text-white"
          >
            Download Resume
            <FaDownload className="group-hover:animate-bounce" />
          </a>
        </div>
      </div>

      {/* Right Section - Image */}
      <div
        className={`relative flex-1 flex justify-center items-center transition-all duration-1000 ${showContent ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
      >
        {/* img */}
        <div className="relative group rounded-full overflow-hidden perspective-1000">
          <motion.img
            src={Image}
            alt="Profile"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
            }}
            className="
          w-64 h-64 md:w-96 md:h-96
          rounded-full
          object-cover
          cursor-pointer
          transition-transform duration-140
          shadow-2xl
        "
          />
          {/* Unblurred center on hover */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-24 h-24 rounded-full bg-transparent backdrop-blur-none group-hover:backdrop-blur-0"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
