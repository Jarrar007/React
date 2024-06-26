import { MdAddTask } from "react-icons/md";
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";


const Todo = () => {

  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState()
  const [showFinished,setShowFinished] = useState(false)

useEffect(()=>{
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || []
  setTodos(storedTodos)
},[])

function setToLocalStorage (todoList) {
  localStorage.setItem('todos',JSON.stringify(todoList))
}

  function handleTodo (event) {
setTodo(event.target.value)
  }

  function handleAdd () {
    if (todo.length>=3){
      const newTodo = [...todos,{task:todo,isCompleted:false,id: uuidv4()}]
setTodos(newTodo)
setToLocalStorage(newTodo)
setTodo('')
    }
  }
  

  function handleEnter (event) {
    if(event.keyCode == 13) {
      handleAdd()
    } 
  }


  function handleIsCompleted (id) {
    let itemId = id
    let index = todos.findIndex(item=>{
      return (
        item.id === itemId
      )
    })

    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    setToLocalStorage(newTodos)
  }



  function handleDelete (id) {
    let newTodos = todos.filter(item=>{
      return (
      item.id != id
      )
    })
    
    setTodos(newTodos)
    setToLocalStorage(newTodos)
      }

      function handleEdit (id) {
      
        let index = todos.findIndex(item=>{
          return (
            item.id === id
          )
        })

        let newTodos = [...todos]
        setTodo(newTodos[index].task)

       let todoAfterEdit = todos.filter(item=>{
        return (
          item.id != id
        )
       })        
      
setTodos(todoAfterEdit)
setToLocalStorage(todoAfterEdit)
      }
  

function handleShowFinished () {
  setShowFinished(!showFinished)
  localStorage.setItem('showFinished', !showFinished);
}




  return (
    <div className="flex flex-col justify-center items-center mb-[40px]">
        <div className="flex flex-wrap justify-center items-center gap-[20px] mb-[30px]">
            <motion.input initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1.5,delay:1.5}} onChange={handleTodo} onKeyDown={handleEnter} value={todo}  className="md:w-[400px] w-[250px] h-[40px] bg-transparent border-[2px] border-red-400 focus:outline-none text-white font-semibold text-[15px] p-[8px] py-[8px] rounded-xl placeholder:text-white" type="text" placeholder="Enter a Task..." />
            <motion.button initial={{y:50,opacity:0}} animate={{opacity:1,y:0}} transition={{duration:1.5,delay:1.75}} onClick={handleAdd}   className="flex justify-center items-center bg-blue-500 w-[70px] h-[35px] border-none rounded-lg cursor-pointer text-[25px] font-bold p-4 hover:bg-blue-400"><MdAddTask/></motion.button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-[8px]">
            <motion.label initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.5,delay:1.75}}  className="font-semibold" htmlFor="finished">Show Finished</motion.label>
            <motion.input initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.5,delay:1.75}}  className="mt-[4px] cursor-pointer"  type="checkbox" name="finished" onChange={handleShowFinished}/>
        </div>

       <div className="flex w-full flex-col justify-center items-center lg:mt-[100px] mt-[70px]">

{todos.length == 0 && (
  <div>
    <motion.h1 initial={{y:50, opacity:0}}  animate={{y:0 , opacity:1}} transition={{duration:1.5,delay:2}} className="flex flex-wrap justify-center items-center text-center text-[20px] font-sembold text-[#ffffff]">No Tasks Added</motion.h1>
  </div>
) }

        {todos.map((item)=>{

 if (item.isCompleted==false || showFinished) {

  return(
    <div key={item.id} className="flex justify-between gap-[30px] items-center md:w-[60vw] w-[80vw] mb-[20px]">

     <div className="flex justify-center items-center gap-[8px]">
      <motion.input initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}  className="cursor-pointer mt-[4px]" type='checkbox' onChange={()=> handleIsCompleted(item.id)}/>
      <motion.h1 initial={{x:20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className={`flex flex-wrap justify-center items-center font-semibold text-[18px] ${item.isCompleted ? 'line-through':''}`} >{item.task}</motion.h1>
      
     </div>

     <div className="flex justify-center items-center gap-[10px]">
      <motion.button initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:0.25}} onClick={()=>handleEdit(item.id)} className="flex justify-center items-center text-[18px]"><FiEdit />
      </motion.button>
      <motion.button initial={{x:20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} onClick={()=>handleDelete(item.id)}  className="flex justify-center items-center text-[18px]"><MdDelete /></motion.button>
     </div>
    </div>
    )
}

        })}
       </div>
        
    </div>
  )
}

export default Todo