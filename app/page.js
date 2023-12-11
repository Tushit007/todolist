"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [main, setmain] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
   setmain([...main,{task,desc}])
   console.log(main)
    settask("")
    setdesc("")
  }
  const deleteHandler=(i)=>{
    let copyTask=[...main]
    copyTask.splice(i,1)
    setmain(copyTask)
    console.log(main)
  }
let rendertask = <h2>No Task available</h2>
if(main.length>0)
  {
  rendertask = main.map((t,i)=>{
    return <li className='flex items-center justify-between mb-8' key={i}>
     <div className='flex justify-between  w-2/3'>
     <h5 className='text-2xl font-semibold '>{t.task}</h5>
     <h5 className='text-2xl font-medium '>{t.desc}</h5>
     <button onClick={()=>{
      deleteHandler(i)
     }}className='bg-red-500 px-4 py-2 font-bold rounded text-white'>Delete</button>
    </div>
    
    </li>
 })
}

  return (
   <>
   <h1 className='m-2 bg-black p-5 text-5xl text-center text-white font-bold'>To Do List</h1>
  <form onSubmit={submitHandler}>
    <input type="text"
     className=' border-2 m-5 px-4 py-2 rounded  border-zinc-800' 
      placeholder='Enter task here'
      value={task}
      onChange={(e)=>{
        settask(e.target.value)
      }}
      />

    <input type="text"
     className=' border-2 m-5 px-4 py-2 rounded  border-zinc-800'  
     placeholder='Enter desc here'
     value={desc}
     onChange={(e)=>{
      setdesc(e.target.value)
     }}
     />
    <button className='bg-black text-white text-2xl p-2 m-5 font-bold rounded' >Add Task</button>

  </form>
  <hr/>
  <div className='p-8 bg-slate-200'>
<ul>
  {rendertask}
 
</ul>

  </div>
   </>
  )
}

export default page