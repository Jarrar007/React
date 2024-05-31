import { useState } from 'react'
import './App.css'
import MovieCard from './components/movieCard'
import axios from 'axios'
import { default_data } from './data/default data'

function App() {

const [movies,setMovies] = useState(default_data)
const [movieTitle,setMovieTitle] = useState("")

async function handleSearch () {
await axios.get(`http://omdbapi.com/?apikey=49ee2b77&s=${movieTitle}`).then((res)=>{
  setMovies(res.data.Search || [])
})
}

function handleMovieTitle (event) {
setMovieTitle(event.target.value)

}

function handleEnter (event) {
if (event.keyCode == 13) {
  handleSearch()
}
}

function handleDefault () {
  setMovies (default_data)
  setMovieTitle("")
}


  return (
    <div className='flex-col justify-center items-center' >
   <h1 className='text-5xl text-center font-bold text-orange-600 cursor-pointer mt-2' onClick={handleDefault}>Film Fusion</h1>
   <div className='flex justify-center items-center gap-4'>
   <input type="text" placeholder='Search Here'  className=' mt-10 w-64 h-10 bg-transparent  text-white text-base font-bold p-3 border-2 border-gray-500 rounded-3xl ' value={movieTitle} onChange={handleMovieTitle} onKeyDown={handleEnter}/>
  <img className='w-6 h-auto mt-10 cursor-pointer' src="/search.png" alt="logo" onClick={handleSearch} /> 
   </div>
     
   {movies.length > 0 ?
   (<div className='flex flex-wrap justify-center items-center'>
   {movies.map((movie,index)=>{
    return (
      <div key={index}>
        <MovieCard title={movie.Title} year={movie.Year} type={movie.Type} img= {movie.Poster}/>
      </div>
    )
   })}
</div>) : (<div className='flex flex-col items-center'>
  <h1 className='text-center text-white text-3xl mt-24 font-bold sm:text-2xl'>No Movies Found</h1>
  <img className=' w-64 h-auto mt-4 sm:w36 sm:h-auto' src="/confused.png" alt="confused pic" />
</div>) }
    </div>
  )
}

export default App
