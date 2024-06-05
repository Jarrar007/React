import { useEffect, useState } from "react"
import MovieCard from "../components/movieCard"
import { movie_data } from "../data/movieData"

const Movies = () => {

    const [movies, setMovies] = useState([])

useEffect (()=>{
    setMovies(movie_data)
},[])

  return (
    <>
    <h1 className='text-center text-orange-600 font-bold text-3xl mb-6 cursor-pointer'>MOVIES</h1>
    <div className='flex flex-wrap gap-6 mb-7 p-4 justify-center items-center'>
{movies.map((movie,index)=>{
    return (

        <div key={index}>
            <MovieCard title={movie.title} img={movie.img} link={movie.link}/>
        </div>
    )
})}
    </div>
    </>
  )
}

export default Movies