import { useState } from "react"
import { Link } from "react-router-dom"

const Nav = () => {

const [sideBar,setSideBar] = useState(false)

function sideBarOn () {
  setSideBar (true)
}

function sideBarOff () {
  setSideBar(false)
}

  return (
<span>
  <div className={` bg-red-300 ${sideBar ? 'w-56' : ' w-16'} h-full fixed mt-0 ml-0 transition-transform duration-700 ease-in`}>
    
    <ul className="flex flex-col items-center gap-7 mt-4">
      <li className="cursor-pointer"><img className="w-10 h-auto hover:scale-110" src="/menu-bar.png" onClick={sideBarOn}/></li>
      <li className={`text-2xl font-bold text-orange-600 p-2 rounded-full cursor-pointer ${sideBar && 'hover:text-black hover:bg-white'}`}><Link to='/'>{sideBar ? 'Home' : <img className="w-10 h-auto hover:scale-110" src="/home.png"/>}</Link></li>
      <li className={`text-2xl font-bold text-orange-600 p-2 rounded-full cursor-pointer ${sideBar && 'hover:text-black hover:bg-white'}`}><Link to='/books'>{sideBar ? 'Books' : <img className="w-10 h-auto hover:scale-110" src="/book.png"/>}</Link></li>
      <li className={`text-2xl font-bold text-orange-600 p-2 rounded-full cursor-pointer ${sideBar && 'hover:text-black hover:bg-white'}`}><Link to='/movies'>{sideBar ? 'Movies' : <img className="w-10 h-auto hover:scale-110" src="/movie.png"/>}</Link></li>
      <li className={`text-2xl p-2 rounded-full font-bold text-orange-600 cursor-pointer ${sideBar && 'hover:text-black hover:bg-white'}`}><Link to='/characters'>{sideBar ? 'Characters' : <img className="w-10 h-auto hover:scale-110" src="/wizard.png"/> }</Link></li>
      <li className={`text-2xl p-2 rounded-full font-bold text-orange-600 cursor-pointer ${sideBar && 'hover:text-black hover:bg-white'}`}><Link to='/spells'>{sideBar ? 'Spells' : <img className="w-10 h-auto hover:scale-110" src="/magic-wand.png"/>}</Link></li>
      {sideBar && <li className="cursor-pointer"><img className="w-10 h-auto hover:scale-110" src="/cancel.png" onClick={sideBarOff} /></li>}
    </ul>
   
    </div>
    </span>
  )
}

export default Nav