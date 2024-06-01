import './styles/App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import Nav from './components/nav'
import Footer from './components/footer'

function App() {

  return (
    <div>


<Router>
<Nav />
  <Routes>
    <Route path='/' element = {<Home />}> </Route>
    <Route path='/projects' element = {<Projects />}> </Route>
  </Routes>
  <Footer />
</Router>
    </div>
  )
}

export default App
