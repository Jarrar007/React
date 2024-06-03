import { useState } from "react"

const BookCard = ({img,title,date,pages,description}) => {

 const [readMore,setReadMore] = useState(false)

 function toggleOn () {
    setReadMore(true)
 }

 function toggleOff () {
    setReadMore(false)
 }
    
  return (
    <div className="w-48 h-auto p-2 bg-gray-600 rounded-lg shadow-black shadow-lg ml-10 cursor hover:scale-105">
<div className="w-42 h-36 bg-slate-400 mb-2" style={{backgroundImage:`url("${img}")`}}></div>
<h1 className="text-center font-extrabold text-orange-500 mb-3">{title}</h1>
<h2 className="text-center font-bold text-white">{date}</h2>
<h2 className="text-center font-bold text-white">{pages}</h2>
{readMore ?
<>
 <h4 className="text-center text-white mt-2">{description}</h4> 
 <button className="text-center rounded-lg bg-green-600 w-24 h-8 mt-2 text-white font-bold hover:bg-green-800" onClick={toggleOff}>Hide</button>
 </>
: <button className="text-center rounded-lg bg-green-600 w-24 h-8 mt-2 text-white font-bold hover:bg-green-800" onClick={toggleOn}>Read More</button> }
    </div>
  )
}

export default BookCard