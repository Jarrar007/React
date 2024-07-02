import Nav from "./components/Nav";
import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Feed from "./pages/feed";
import PlayVideo from "./pages/PlayVideo";
import SearchBar from "./components/SearchBox";
import Search from "./pages/search";

export const AppContext = createContext()


const App = () => {

const [sideBarExpanded,setSideBarExpanded] = useState(false)
const [selectedCategory,setSelectedCategory] = useState(1)
const [selectedVideo,setSelectedVideo] = useState("")
const[homeData,setHomeData] = useState([])
const[searchData,setSearchData] = useState([])


  return (
 <div className="fixed w-full h-full overflow-y-auto bg-gradient-to-t from-[#000000] to-[#2942a2] selection:bg-cyan-300">

<AppContext.Provider value={{sideBarExpanded , setSideBarExpanded,selectedCategory,setSelectedCategory,selectedVideo,setSelectedVideo,homeData,setHomeData,searchData,setSearchData}}>
<Router>

<Nav />
<SearchBar/>
<Routes>

<Route path="/" element = {<Home />} />
<Route path={`/feed`} element = {<Feed />} />
<Route path={`/playvideo`} element = {<PlayVideo />} />
<Route path={`/search`} element = {<Search />} />

</Routes>
</Router>
</AppContext.Provider>
    </div>
  );
};

export default App;


//<iframe width="656" height="369" src="https://www.youtube.com/embed/MaH6M2fkxk8" title="DANA WHITE TALKS TO POATAN – UFC 303 Day 4 Backstage" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>