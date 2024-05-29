import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Homepage from './components/homepage'
import Nav from './components/nav'
import Lists from './components/lists'
import Discover from './components/discover'
import Highest from './components/highest'
import Manga from './components/manga'
import Watch from './components/watch'

function App() {

  return (
   <div>
    <Router>
      <Nav/>
      <Routes>
        <Route path = "/" element = {<Homepage text="Welcome!"/>}/>
        <Route path = "/my-favourite" element = {<Lists/>}/>
        <Route path = "/highest-rated" element = {<Highest/>}/>
        <Route path = "/watch" element = {<Watch/>}/>
        <Route path = "/manga" element = {<Manga/>}/>
        <Route path = "*" element = {<Homepage text="Page Not Found"/>} />
        <Route path = "/discover" element = {<Discover/>} />
      </Routes>
    </Router>
   </div>
  )
}

export default App;
