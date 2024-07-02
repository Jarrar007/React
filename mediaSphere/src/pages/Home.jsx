import SideBar from '../components/SideBar'
import axios from 'axios'
import { useEffect } from 'react'
import FeedVideoCard from '../components/FeedVideoCard'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import { useContext } from 'react'


const Home = () => {

const {setSelectedVideo,homeData,setHomeData} = useContext(AppContext)



useEffect(()=>{
    async function fetchHomeData () {
        await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyA5ubWWWMe3eHb2_HbyPzQxWIIy4Zfx6Qo').then((res)=>{
            setHomeData(res.data.items)
    })
}
fetchHomeData()

},[])

function handlePlayHomeVideo (id) {
setSelectedVideo(id)
}

  return (
    <div className='w-full'>
<SideBar />
{/* <motion.h1 initial={{x:-50,opacity:0}} animate={{opacity:1,x:0}} transition={{duration:1.5,delay:0.5}}  className='text-center text-[40px] font-bold text-white ml-[100px]'>Home</motion.h1> */}
<div className='flex flex-wrap justify-center items-center gap-[30px] pt-[80px] pl-[70px]' >
    {homeData.map((video)=>{
        return (
      <Link to='/playvideo'>  <motion.div initial = {{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.5}} key={video.id} onClick={()=>handlePlayHomeVideo(video.id)} className='text-white mb-[10px]'>
 <FeedVideoCard channelTitle={video.snippet.channelTitle} title={video.snippet.title} thumbnail={video.snippet.thumbnails.high.url}/>
        </motion.div> </Link>
        )
    })}
</div>
    </div>
  )
}

export default Home