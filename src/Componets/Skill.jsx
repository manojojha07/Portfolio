import React from 'react'
import { IoLogoHtml5 , IoLogoCss3} from "react-icons/io";
import { RiJavascriptFill, RiTailwindCssLine  } from "react-icons/ri";
import { FaBootstrap, FaReact ,FaNodeJs  } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoFigma } from "react-icons/io5";
import { FaInternetExplorer } from "react-icons/fa";
import { motion } from 'framer-motion';


const skills = [
  { icon: IoLogoHtml5, name: "HTML", color: "text-orange-400" },
  { icon: IoLogoCss3, name: "CSS", color: "text-blue-400" },
  { icon: RiJavascriptFill, name: "JavaScript", color: "text-yellow-300" },
  { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-400" },
  { icon: FaReact, name: "React", color: "text-cyan-400" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-400" },
  { icon: DiMongodb, name: "MongoDB", color: "text-green-600" },
  { icon: FaInternetExplorer, name: "Express", color: "text-white" },
  { icon: IoLogoFigma, name: "Figma", color: "text-pink-400" },
];

const Skill = () => {
  return (
    <div className='w-full  bg-gray-900 text-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 min-h-70'>
      <motion.h1
        className='text-center text-4xl py-10 font-extrabold'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Technical <span className='text-pink-500'>Skills</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-5">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={i}
              className="bg-transparent shadow-[0_0_5px_5px_rgba(255,255,255,0.3)] py-5 rounded-2xl
              hover:bg-blue-400 hover:shadow-[0_0_10px_5px_rgba(37,99,235,0.6)] transition duration-500 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Icon size={90} className={`mx-auto ${skill.color}`} />
              <h1 className="py-3 text-xl font-sans text-white">{skill.name}</h1>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;