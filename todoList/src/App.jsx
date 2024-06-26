import { motion } from "framer-motion"
import Todo from "./components/Todo"

const App = () => {
  return (
    <div className='fixed overflow-y-auto w-full h-full text-white bg-gradient-to-t from-[#000000]  to-[#695070] selection:bg-cyan-400'>
      <motion.h1 initial={{y:-50,opacity:0,scale:0.25}} animate={{y:0,opacity:1,scale:1}} transition={{delay:0.5,duration:1.5}}  className='flex flex-wrap justify-center text-center text-[50px] font-extrabold mt-[60px]'>TASKFORGE</motion.h1>
      <motion.h2 initial={{opacity:0,scale:0.25,y:50}} animate={{opacity:1,y:0,scale:1}} transition={{duration:1.5,delay:1}}  className='flex flex-wrap justify-center text-center text-[20px] mt-[10px] bg-gradient-to-r from-[#f90000] to-[#faf600] text-transparent bg-clip-text font-extrabold mb-[100px]'>A Modern Todo List</motion.h2>

<div>
  <Todo />
</div>
</div>
  )
}

export default App
