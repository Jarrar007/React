import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import CharacterCard from '../components/characterCard'

const Characters = () => {

const [characters , setCharacters] = useState([])

useEffect(()=>{
  async function fetch () {
await axios.get("https://potterapi-fedeperin.vercel.app/en/characters").then((res)=>{
setCharacters(res.data)
  
})
  }
  fetch()
},[])

  return (
    <>
    <h1 className='text-center text-orange-600 font-bold text-3xl mb-6 cursor-pointer'>CHARACTERS</h1>
    <div className='flex flex-wrap gap-6 justify-center items-center mb-5 p-4'>
      {characters.map((character,index)=>{
        return(
          <div key={index}>
<CharacterCard img={character.image} name={character.fullName} hosue={character.hogwartsHouse} actor={character.interpretedBy}/>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Characters