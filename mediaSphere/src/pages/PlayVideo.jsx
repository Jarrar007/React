import React from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'

const PlayVideo = () => {

    const{selectedVideo} = useContext(AppContext)

    

  return (
    <div className='flex justify-center items-center mt-[80px] pl-[50px]'>
       <iframe className='md:w-[550px] md:h-[350px] w-[300px] h-[200px]' src={`https://www.youtube.com/embed/${selectedVideo}`} frameborder="0" allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
      
      <div>
        
      </div>
    </div>
  )
}

export default PlayVideo