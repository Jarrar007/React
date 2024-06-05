import React from 'react'

const MovieCard = ({img,title,link}) => {
  return (
    <a href={link} target='_blank'> <div className="w-48 h-auto bg-gray-700 p-2 rounded-md cursor-pointer hover:scale-105 transition-transform shadow-black shadow-lg">
<div className="w-42 h-36 bg-slate-400 mb-2 cursor-pointer bg-center bg-cover" style={{backgroundImage:`url("${img}")`}}></div>
<h1 className="text-center font-extrabold text-orange-500 mb-3">{title}</h1>
   </div></a>
  )
}

export default MovieCard;