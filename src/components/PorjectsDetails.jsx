import React, { useState } from "react";
import Input from "../ui/Input";
import {FaTrashAlt} from 'react-icons/fa'

const ProjectDetails = ({ project,onDelete}) => {
  const [inputVal, setInputVal] = useState('');
const [tasks, setTasks] = useState([]);
function handleAddTask(){
  setTasks(prev=>[...prev,inputVal])
  setInputVal('')
}
function handleChange(e){
  setInputVal(e.target.value)
}
function handleDelete(index){
  const updatedTasks=tasks.filter((task,ind)=>ind!==index)
  setTasks(updatedTasks)

}
  return (
    <section className="p-14 w-full border-solid border-black border-2">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl">{project.title}</h1>
        <button onClick={onDelete}>{<FaTrashAlt height='70' width='70' />}</button>
      </div>
      <h4 className="text-2xl">{project.date}</h4>
      <p>{project.description}</p>
      <Input value={inputVal} onChange={handleChange}/>
      
      <button
        className="mt-16 p-3 text-stone-100 rounded-sm bg-green-400"
        onClick={handleAddTask}
      >
        add Task
      </button>
      {tasks && (
        <ul className=" mt-4 bg-stone-100 border-stone-400 border-solid border-2 p-5 w-1/2">
         {tasks.map((task,index) =><li className=" my-4 flex justify-between" key={index}><span>{index+1}-{task}</span> <button className="bg-red-500 p-2" onClick={()=>handleDelete(index)}>{<FaTrashAlt color="white"/>}</button></li>)}
        </ul>
      )}
    </section>
  );
};

export default ProjectDetails;
