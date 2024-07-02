import React from 'react'
import { MdVerified } from "react-icons/md";


const FeedVideoCard = ({title,channelTitle,thumbnail}) => {
  return (
    <div className='flex flex-col w-[250px] h-auto rounded-md '>
        <div className='w-[250px] h-[150px] bg-cover bg-center rounded-md cursor-pointer' style={{backgroundImage : `url('${thumbnail}')`}} >    
        </div>
        <h2 className='mt-[4px] pl-[4px] font-semibold'>{title}</h2>
        <h3 className='flex flex-row text-[10px] mt-[4px] pl-[4px] font-bold' >{channelTitle}<MdVerified className='pl-[2px] text-[15px]' /></h3>
    </div>
  )
}

export default FeedVideoCard