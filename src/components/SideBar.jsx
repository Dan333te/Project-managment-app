import React from 'react'
import Button from '../ui/button'
const SideBar = ({handleClick,projects,showProjectDetails}) => {
  return (
    <nav className=' p-12 flex flex-col w-3/12 bg-gray-900 h-screen rounded-lg'>
        <h2 className='text-4xl text-white uppercase '>Your projects</h2>
        <Button clickEvent={handleClick}>+ Add Project</Button>
        <ul className='p-6'>
        {projects &&projects.map((project,index)=>( <li key={index} className='text-xl text-stone-200 opacity-95  py-3 px-4 w-auto mt-8 text-center rounded-md bg-stone-600'>
       <button onClick={()=>showProjectDetails(project.title)}>{project.title}</button>   
        </li>))}
        </ul>
    </nav>
  )
}

export default SideBar