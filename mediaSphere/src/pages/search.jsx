import React from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import FeedVideoCard from '../components/FeedVideoCard'
import SideBar from '../components/SideBar'

const Search = () => {

  const {searchData,setSelectedVideo} = useContext(AppContext)

  function handlePlayHomeVideo (id) {
    setSelectedVideo(id)
    }

  return (

    <div className='w-full'>
<SideBar />

    <div className='flex flex-wrap justify-center items-center gap-[30px] pt-[80px] '>
        {searchData.map((video)=>{
        return (
      <Link to='/playvideo'>  <motion.div initial = {{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.5}} key={video.id.videoId} onClick={()=>handlePlayHomeVideo(video.id.videoId)} className='text-white mb-[10px]'>
 <FeedVideoCard channelTitle={video.snippet.channelTitle} title={video.snippet.title} thumbnail={video.snippet.thumbnails.high.url}/>
        </motion.div> </Link>
        )
    })}
    </div>
    </div>
  )
}

export default Search