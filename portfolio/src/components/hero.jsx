import { heroPara } from '../data/constants'
import { motion } from "framer-motion"

import React from 'react'


const Hero = () => {


  return (
    <div className='w-full mt-[100px]'>
        <div className='flex flex-col gap-4 items-center'>
            <motion.h1 initial ={{y : -50 , opacity : 0, scale:0.25}} animate = {{y : 0, opacity : 1, scale:1}} transition={{duration : 1.5, delay : 1}}   className='flex flex-wrap md:text-5xl text-4xl text-white text-center font-thin '>Muhammad Jarrar Ahmed</motion.h1>
            <motion.h2 initial = {{y : 50 , opacity : 0,scale:0.25}} animate = {{y : 0, opacity : 1,scale:1}} transition={{duration : 1.5, delay : 1.5}} className='flex flex-wrap mt-[10px] text-2xl text-center bg-gradient-to-r text-transparent from-yellow-500 via-green-400 to-red-500 bg-clip-text' >FullStack Develepor</motion.h2>
            <motion.p initial = {{x : -50, opacity : 0,scale:0.25}} animate = {{x:0 , opacity : 1,scale:1}} transition={{duration : 1.5, delay : 2}}  className='flex flex-wrap text-center md:w-[50vw] w-[80vw] md:text-[13px] text-[10px]'>{heroPara}</motion.p>
        </div>
    </div>
  )
}

export default Hero