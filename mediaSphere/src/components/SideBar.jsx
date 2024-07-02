import React from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'
import { GiFilmProjector } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { MdSportsFootball } from "react-icons/md";
import { FaCat } from "react-icons/fa6";
import { IoGameControllerSharp } from "react-icons/io5";
import { FaLaughBeam } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { MdScience } from "react-icons/md";

import { Link } from 'react-router-dom';

const SideBar = () => {

    const {sideBarExpanded,setSelectedCategory} = useContext(AppContext)

function handleSelectedCategory (category) {
  setSelectedCategory(category)
}


  return (
    <div className= {`fixed h-full ${sideBarExpanded ? 'w-[200px]' : 'w-[70px]' } bg-[#d91f1f] transition-width duration-700 ease-in-out  py-[20px]`}>


<div className='sidebarContent flex flex-col justify-center items-center gap-[10px] px-[4px] font-semibold'>

      {sideBarExpanded ? (
        <>
              <Link to='/feed'><h1 className=' hover:bg-black hover:text-white p-[4px] cursor-pointer rounded-full ' onClick={()=>handleSelectedCategory(1)}>Film & Animation</h1></Link>
            <Link to='/feed'><h1 className='hover:bg-black hover:text-white p-[4px] cursor-pointer rounded-full'  onClick={()=>handleSelectedCategory(2)}>Automobiles</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-black hover:text-white p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(10)}>Music</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-black hover:text-white p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(17)}>Sports</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-black hover:text-white p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(15)}>Pets</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-black hover:text-white p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(20)}>Gaming</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-black hover:text-white p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(23)}>Comedy</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-black hover:text-white p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(25)}>News</h1></Link>
            
           <Link to='/feed'> <h1 className='hover:bg-black hover:text-white p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(28)}>Science</h1></Link>
          
          </>
        ) : (
          <>
           <Link to='/feed'> <GiFilmProjector onClick={()=>handleSelectedCategory(1)} className='text-bold text-center text-[40px] cursor-pointer p-[4px] hover:bg-black hover:text-white rounded-full'/></Link>
           <Link to='/feed'> <FaCarSide onClick={()=>handleSelectedCategory(2)} className='text-bold text-center text-[35px]  cursor-pointer p-[4px] hover:bg-black hover:text-white rounded-full' /></Link>
            <Link to='/feed'><FaMusic onClick={()=>handleSelectedCategory(10)} className='text-bold text-center text-[35px] cursor-pointer p-[4px] hover:bg-black hover:text-white rounded-full p-[4px] hover:bg-black hover:text-white rounded-full'/></Link>
            <Link to='/feed'><MdSportsFootball onClick={()=>handleSelectedCategory(17)} className='text-bold text-center text-[35px]  onClick={()=>handleSelectedCategory(2)}cursor-pointer p-[4px] hover:bg-black hover:text-white rounded-full'/></Link>
           <Link to='/feed'> <FaCat onClick={()=>handleSelectedCategory(15)} className='text-bold text-center text-[35px] cursor-pointer p-[4px] hover:bg-black hover:text-white rounded-full'/></Link>
           <Link to='/feed'> <IoGameControllerSharp onClick={()=>handleSelectedCategory(20)} className='text-bold text-center text-[35px] cursor-pointer p-[4px] hover:bg-black hover:text-white rounded-full'/></Link>
           <Link to='/feed'> <FaLaughBeam onClick={()=>handleSelectedCategory(23)} className='text-bold text-center text-[35px] cursor-pointer p-[4px] hover:bg-black hover:text-white rounded-full'/></Link>
           <Link to='/feed'> <GiNewspaper onClick={()=>handleSelectedCategory(25)} className='text-bold text-center text-[35px] cursor-pointer p-[4px] hover:bg-black hover:text-white rounded-full'/></Link>
           
           <Link to='/feed'> <MdScience onClick={()=>handleSelectedCategory(28)} className='text-bold text-center text-[35px] cursor-pointer p-[4px] hover:bg-black hover:text-white rounded-full'/></Link>
         
          </>
        )}
</div>


    </div>
  )
}

export default SideBar