import React from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'


import { Link } from 'react-router-dom';

const SideBar = () => {

    const {sideBarExpanded,setSelectedCategory} = useContext(AppContext)

function handleSelectedCategory (category) {
  setSelectedCategory(category)
}


  return (
    <div className= {`absolute top-[40px] ${sideBarExpanded ? 'w-[200px]' : 'w-[0px]' } bg-[#2a2929] transition-width duration-700 ease-in-out text-white py-[20px]`}>


<div className='sidebarContent flex flex-col justify-center items-center gap-[10px] px-[4px] font-semibold'>

      {sideBarExpanded ? (
        <>
              <Link to='/feed'><h1 className=' hover:bg-white hover:text-black p-[4px] cursor-pointer rounded-full ' onClick={()=>handleSelectedCategory(1)}>Film & Animation</h1></Link>
            <Link to='/feed'><h1 className='hover:bg-white hover:text-black p-[4px] cursor-pointer rounded-full'  onClick={()=>handleSelectedCategory(2)}>Automobiles</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-white hover:text-black p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(10)}>Music</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-white hover:text-black p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(17)}>Sports</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-white hover:text-black p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(15)}>Pets</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-white hover:text-black p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(20)}>Gaming</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-white hover:text-black p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(23)}>Comedy</h1></Link>
           <Link to='/feed'> <h1 className='hover:bg-white hover:text-black p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(25)}>News</h1></Link>
            
           <Link to='/feed'> <h1 className='hover:bg-white hover:text-black p-[4px] cursor-pointer rounded-full' onClick={()=>handleSelectedCategory(28)}>Science</h1></Link>
          
          </>
        ) : (
          <>
          </>
        )}
</div>


    </div>
  )
}

export default SideBar