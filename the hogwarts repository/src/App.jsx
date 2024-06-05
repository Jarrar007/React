import axios from "axios"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from "./components/nav"
import Home from "./pages/home"
import Spells from "./pages/spells"
import Characters from "./pages/characters"
import Books from "./pages/books"
import Movies from "./pages/movies"


function App() {


  return (
    <div>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/books" element={<Books />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/characters" element={<Characters />}/>
          <Route path="/spells" element={<Spells />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
