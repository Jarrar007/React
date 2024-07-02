import React from 'react'
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { AppContext } from '../App'
import { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"




const SearchBar = () => {

  const navigate = useNavigate()

  const {setSearchData} = useContext(AppContext)
  const [searchQuery,setSearchQuery] = useState("")

  function handleSearch (event) {
setSearchQuery(event.target.value)
  }

  function getSearchData () {
  if(searchQuery.length>=1) {
   axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=AIzaSyA5ubWWWMe3eHb2_HbyPzQxWIIy4Zfx6Qo`).then((res)=>{
    setSearchData(res.data.items)
 
    navigate('/search') 
    setSearchQuery('')

   })
  }
 }

 function handleEnter (event) {
if(event.keyCode==13) {
  getSearchData()
}
 }

  return (

    <div className='absolute flex flex-row justify-center items-center mt-[20px] ml-[40vw] gap-[10px]'>
        <motion.input initial={{x:-30,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.5,delay:1}}  className=' md:w-[250px] w-[180px] h-[30px] py-[4px] px-[4px] outline-none rounded-lg bg-slate-400 placeholder:text-orange-600 text-orange-700 font-bold' type="text" placeholder='Search...' onChange={handleSearch} value={searchQuery} onKeyDown={handleEnter}/>
        <motion.button initial={{x:30,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.5,delay:1}} >
        <FaSearch className='text-[15px] mt-[2px] text-white cursor-pointer'  onClick={getSearchData}/>
        </motion.button>
       
    </div>
    
  )
}

export default SearchBar;