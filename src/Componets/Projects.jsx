import React from "react";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import Youtube from "../assets/youtbe.jpeg"; // just a demo, real images per project can be used
import Netfilx from '../assets/netfilix.jpeg'
import SocialMedia from '../assets/social-network.jpg'
import Ecommerce from '../assets/e-comerce.png'
import ImageFy from '../assets/imagefy.webp'
import Event from '../assets/event.jpg'


// 1. Project data
const projectData = [
  {
    title: "Social Media Application",
    description: "A MERN stack social media platform to connect with people, share posts and stories, like content, send messages, build connections, and interact with people globally.",
    image: SocialMedia,
    link: "https://ping-up-social-media-eight.vercel.app/",
  },
  {
    title: "Event Application",
    description:
      "A MERN stack platform where admins create events and users can explore, book, and attend events.",
    image: Event,
    link: "https://eventora-two-kohl.vercel.app/",
  },
  {
    title: "E-commerce Application",
    description:
      "A MERN stack e-commerce platform to browse products, manage carts, place orders, and shop online.",
    image: Ecommerce,
    link: "https://e-commerce-mern-rust-mu.vercel.app/",
  },
  {
    title: "AI-Imagefy",
    description:
      "An AI-powered image generation platform using Gemini API to create high-quality HD images from text prompts.",
    image: ImageFy,
    link: "https://ai-imagify-eight.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix UI clone built with React and styled using Tailwind. Includes video browsing features.",
    image: Netfilx,
    link: "https://netflix-clone-4suxj8p5h-manoj-ojhas-projects.vercel.app/",
  },
];


// 2. Projects component
const Projects = () => {
  return (
    <div className=' w-full md:py-30 md:pt-20 text-center  bg-gray-800 text-white py-10 px-4 sm:px-8 md:px-16 lg:px-24 min-h-70'>
      <h1 className="font-extrabold text-4xl py-10">
        My <span className="text-red-500 ">Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative group hover:scale-105 duration-500 w-full h-64 overflow-hidden rounded-lg shadow-lg"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full   object-cover transition-transform duration-300 group-hover:scale-111"
            />

            {/* Overlay content */}
            <div className="absolute inset-0  bg-[rgba(0,0,0,0.6)] flex flex-col items-center justify-center 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 text-center">
              <h2 className="text-xl font-bold text-pink-500">{project.title}</h2>
              <p className="text-sm mt-2 hover:skew-x-12 text-white">{project.description}</p>

              {/* View button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 flex py-1 bg-pink-500 rounded hover:bg-pink-600 transition 
                hover:-skew-x-12"
              >
                View
                <FaPlaneCircleCheck size={20} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <a href="#" target="blank"> see more </a>
    </div>
  );
};

export default Projects;
