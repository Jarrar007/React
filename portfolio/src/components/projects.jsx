import React from 'react'
import { projects } from '../data/constants'
import { motion } from "framer-motion"



const Projects = () => {



  return (
    <div className='lg:mt-[250px] mt-[150px]'>
        <motion.h1 initial = {{opacity : 0, x : -100}} whileInView={{opacity : 1, x : 0}} transition={{duration : 1.5}} className='text-center text-4xl text-white mb-[50px]'>Projects</motion.h1>
        {projects.map((project,index)=>{
            return (
                <div key={index} className='flex flex-wrap items-center justify-center lg:gap-[50px] gap-[25px]'>
                    <div className='w-[200px] flex justify-center items-center'>
                       <a href={project.live_view} target='_blank'><motion.img initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:1.5}} whileHover={{scale : 1.2,transition:0.5}}  className='w-[150px] object-cover rounded-lg cursor-pointer duration-[1] shadow-gray-600 shadow-lg img mb-[50px] ' src={project.img} alt={project.title} /></a> 
                    </div>

                    <div className='flex flex-col items-center justify-center w-[300px] mb-[50px]'>
                       <a href={project.live_view} target='_blank'> <motion.h2 initial={{opacity:0,y:-100}} whileInView={{opacity : 1, y: 0}} transition={{duration:1.5}}  className='text-[25px] font-bold text-center cursor-pointer mb-[5px] '>{project.title}</motion.h2></a>
                        <motion.h6 initial = {{y:100, opacity : 0}} whileInView={{y:0, opacity:1}} transition={{duration:1.5,delay:0.25}} className='text-[13px] text-center mb-[10px]'>{project.description}</motion.h6>
                        <div className='flex items-center gap-4'>
                        {project.technology.map((tech,index)=>{
                            return (
                            <motion.div initial = {{y:100, opacity : 0}} whileInView={{y:0, opacity:1}} transition={{duration:1.5,delay:0.5}} key={index}  className='flex justify-center items-center w-auto bg-slate-600 p-2 rounded-lg text-yellow-700 mb-[30px] '>
                             <h1  className=' text-[13px] font-bold text-center'>{tech}</h1> 
                             </motion.div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Projects