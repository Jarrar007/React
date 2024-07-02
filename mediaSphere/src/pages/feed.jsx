import SideBar from "../components/SideBar"
import { useContext, useState } from "react"
import { AppContext } from "../App"
import { useEffect } from "react"
import axios from "axios"
import FeedVideoCard from "../components/FeedVideoCard"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


const Feed = () => {

const {selectedCategory,setSelectedVideo} = useContext(AppContext)


  const [feedData,setFeedData] = useState([])

  useEffect (()=>{
    
    async function fetchFeedData () {
      await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=${selectedCategory}&key=AIzaSyA5ubWWWMe3eHb2_HbyPzQxWIIy4Zfx6Qo`).then((res)=>{
        setFeedData(res.data.items)
      })
    }
fetchFeedData ()
  },[selectedCategory])

function handlePlayVideo (id) {
setSelectedVideo(id)

}

  return (
    <div>
<SideBar />
<div className='flex flex-wrap justify-center items-center gap-[30px] pt-[80px]' >
    {feedData.map((video)=>{
        return (
      <Link to='/playvideo'>  <motion.div initial = {{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.5}} key={video.id} onClick={()=>handlePlayVideo(video.id)}  className='text-white mb-[10px]'>
 <FeedVideoCard  channelTitle={video.snippet.channelTitle} title={video.snippet.title} thumbnail={video.snippet.thumbnails.high.url}/>
        </motion.div></Link>
        )
    })}
</div>
    </div>
  )
}

export default Feed;