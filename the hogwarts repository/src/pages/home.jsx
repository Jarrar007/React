import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-3xl font-bold text-orange-600 ml-16 mt-4'> Welcome To</h1>
      <h1 className='text-center text-3xl font-bold text-orange-600 ml-16 mt-4'> Hogwarts Repository</h1>
      <img className='w-72 h-auto mt-10 ml-10' src="/grand-wizard.png" alt="wizard" />
    </div>
  )
}

export default Home
