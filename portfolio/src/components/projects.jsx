import React from 'react'
import { projects } from '../data/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

useGSAP(()=>{
    gsap.to('.proj',{
        x : 0,
        y : 0,
        opacity : 1,
        duration : 1.5,
        // delay : 0.5,
        stagger : {
            amount : 1
        },
        scrollTrigger : {
            trigger : '.proj',
            start : 'bottom 70%',
        }

    })
    gsap.to('.proj-head',{
        x : 0,
        opacity : 1,
        duration : 1.5,
        // delay : 0.5,
        stagger : {
            amount : 1
        },
        scrollTrigger : {
            trigger : '.proj-head',
            start : 'bottom 70%',
        }

    })
})

  return (
    <div className='lg:mt-[250px] mt-[150px]'>
        <h1 className='text-center text-4xl text-white mb-[50px] translate-x-[120px] opacity-0 proj-head'>Projects</h1>
        {projects.map((project,index)=>{
            return (
                <div key={index} className='flex flex-wrap items-center justify-center lg:gap-[50px] gap-[25px]'>
                    <div className='w-[200px] flex justify-center items-center'>
                       <a href={project.live_view} target='_blank'><img className='w-[150px] object-cover rounded-lg cursor-pointer duration-[1] shadow-gray-600 shadow-lg img mb-[50px] translate-x-[-120px] opacity-0 proj' src={project.img} alt={project.title} /></a> 
                    </div>

                    <div className='flex flex-col items-center justify-center w-[300px] mb-[50px]'>
                       <a href={project.live_view} target='_blank'> <h2 className='text-[25px] font-bold text-center cursor-pointer mb-[5px] translate-x-[120px] opacity-0 proj'>{project.title}</h2></a>
                        <h6 className='text-[13px] text-center mb-[10px] translate-x-[120px] opacity-0 proj'>{project.description}</h6>
                        <div className='flex items-center gap-4'>
                        {project.technology.map((tech,index)=>{
                            return (
                            
                             <h1 key={index} className='text-[13px] font-bold bg-slate-600 p-2 rounded-lg text-yellow-700 translate-y-[60px] opacity-0 proj'>{tech}</h1> 
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