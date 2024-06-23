import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMongoose } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { motion } from "framer-motion";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)


const Technologies = () => {
 
    useGSAP(()=>{
        gsap.to('.technology', {
            y:20,
            repeat : -1,
            yoyo : true,
            duration : 1,
            opacity : 1,
            // delay : 0.5,
            stagger : {
                amount : 2,
                from : 'center'
            },
            scrollTrigger : {
                 trigger: '.technology',
                start : 'bottom 70%',
            }
        })
    })

  return (
    <div className="flex flex-col items-center lg:mt-[250px] mt-[150px]">
      <motion.h1
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.25 }}
        className="text-white text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <div className='flex flex-wrap justify-center items-center mt-[30px] gap-7 px-[40px] mb-[30px]'>
        <FaHtml5 className='text-[50px] text-orange-500 cursor-pointer technology opacity-0' />
        <IoLogoCss3  className='text-[50px] text-blue-500 cursor-pointer technology opacity-0'/>
        <RiTailwindCssFill  className='text-[50px] text-blue-300 cursor-pointer technology opacity-0'/>
        <IoLogoJavascript  className='text-[50px] text-yellow-400 cursor-pointer technology opacity-0'/>
        <FaReact  className='text-[50px] text-cyan-500 cursor-pointer technology opacity-0'/>
        <RiNextjsFill  className='text-[50px] text-white cursor-pointer technology opacity-0'/>
        <TbBrandFramerMotion  className='text-[50px] text-pink-500 cursor-pointer technology opacity-0'/>
        <SiMongoose  className='text-[50px] text-yellow-700 cursor-pointer technology opacity-0'/>
        <SiGreensock  className='text-[50px] text-green-600 cursor-pointer technology opacity-0'/>

        </div>
    </div>
  );
};

export default Technologies;
