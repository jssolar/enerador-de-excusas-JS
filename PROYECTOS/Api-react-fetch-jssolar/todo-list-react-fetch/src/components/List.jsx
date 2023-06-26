import "./estilos/list.css";
import { useState } from "react";
const List = () => {
  
  
    // const [inputValue, setInputValue] = useState("")
   
    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState("")

     function addNewTask() {
     setTask([...newTask, task])
     }


  return (

    <div className="container d-block text-center border rounded my-5"> 
    <h1>Lista-React {task}</h1>
    <div className="lista-principal center my-5">
      <form className="">
        <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
        <ul>
        <button className="btn btn-info rounded d-flex" onClick={()=> setNewTask}>hola</button>
        
        </ul>
        {

        }
        <li >hola mundo</li>

      </form>
    </div>
    </div>
  );
};

export default List;
