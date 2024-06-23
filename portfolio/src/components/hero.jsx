import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { heroPara } from '../data/constants'

import React from 'react'


const Hero = () => {


    useGSAP(()=>{
        gsap.to('.hero', {
            y : 0,
            x : 0,
            duration : 1.5,
            opacity : 1,
            delay : 1,
            stagger : {
                amount : 1
            }

        })

        gsap.to('.img', {
            y:20,
            repeat : -1,
            yoyo : true,
            delay : 1,
            duration : 1.5,
            stagger : {
                amount : 1,
                from : 'center'
            }
        })
    })

  return (
    <div className='w-full mt-[100px]'>
        <div className='flex flex-col gap-4 items-center'>
            <h1  className='flex flex-wrap md:text-5xl text-4xl text-white text-center font-thin translate-y-[-60px] opacity-[0] hero'>Muhammad Jarrar Ahmed</h1>
            <h2 className='flex flex-wrap mt-[10px] text-2xl text-center bg-gradient-to-r text-transparent from-yellow-500 via-green-400 to-red-500 bg-clip-text translate-x-[60px] opacity-[0] hero' >FullStack Develepor</h2>
            <p className='flex flex-wrap text-center md:w-[50vw] w-[80vw] md:text-[13px] text-[10px] translate-y-[60px] opacity-[0] hero'>{heroPara}</p>
        </div>
    </div>
  )
}

export default Hero