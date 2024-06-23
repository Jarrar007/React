import React from 'react'
import Nav from './components/nav'
import Hero from './components/hero'
import Technologies from './components/technologies'
import Projects from './components/projects'

const App = () => {
  return (
<div className='text-neutral-300 selection:bg-cyan-500 bg-gradient-to-t from-slate-700 via-black to-gray-700'>

<Nav />
<Hero />
<Technologies />
<Projects />
 
</div>

  )
}

export default App