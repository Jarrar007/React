import React, { useEffect } from 'react'
import { useState } from 'react'
import BookCard from '../components/bookCard'
import { book_data } from '../data/bookData'

const Books = () => {

  const [books,setBooks] = useState([])

useEffect (()=> {
setBooks(book_data)
}, [])

  return (
    <>
    <h1 className='text-center text-orange-600 font-bold text-3xl mb-6 cursor-pointer'>BOOKS</h1>
    <div className='flex flex-wrap gap-6 mb-7 p-4 justify-center items-center'>
{books.map((book,index)=>{
  return (
  <div key={index}>
    <BookCard img={book.cover} title={book.title} date={book.releaseDate} pages={book.pages} description={book.description} book_link={book.link}/>
  </div>
  )
})}
    </div>
    </>
  )
}

export default Books