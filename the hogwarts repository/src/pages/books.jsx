import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import BookCard from '../components/bookCard'

const Books = () => {

  const [books,setBooks] = useState([])

  useEffect(()=>{
    async function fetch () {
 await axios.get("https://potterapi-fedeperin.vercel.app/en/books").then((res)=>{
  setBooks(res.data)
    
})
    }
    fetch()
  },[])

  return (
    <>
    <h1 className='text-center text-orange-600 font-bold text-3xl mb-6 cursor-pointer'>BOOKS</h1>
    <div className='flex flex-wrap gap-6 mb-7 p-4 justify-center items-center'>
{books.map((book,index)=>{
  return (
  <div key={index}>
    <BookCard img={book.cover} title={book.title} date={book.releaseDate} pages={book.pages} description={book.description}/>
  </div>
  )
})}
    </div>
    </>
  )
}

export default Books