import React from 'react'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { AppContext } from '../App'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"


const Nav = () => {

    const {setSideBarExpanded,sideBarExpanded} = useContext(AppContext)

    function ToggleSideBar () {
       setSideBarExpanded(!sideBarExpanded)
    }

  return (
    <div className='sticky top-0 text-white w-full h-[40px] bg-[#0e0d0d] flex flex-row items-center px-[20px]'>
     <TiThMenu className='text-[30px] font-extrabold mr-[30px] cursor-pointer' onClick={ToggleSideBar}/>
    <IoLogoGooglePlaystore className='mr-[3px]'/>
   <Link to='/'><motion.h1 initial={{x:20,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:0.5}} className='font-bold text-[20px] cursor-pointer'>MediaSphere</motion.h1></Link> 
    </div>
  )
}

export default Nav