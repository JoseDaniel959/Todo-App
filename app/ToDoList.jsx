"use client"
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css'

const ToDoList = () =>{

    const [tasks,setTasks] = useState(["eat","take a shower"])
    const [newTask,setNewTask] = useState("")

    //The function above is for the text box
    const handleInputChange = (event) =>{
        setNewTask(event.target.value)

    }

    const addTask = () =>{
        setTasks([...tasks,newTask])
        setNewTask("")
    }

    const deleteTask = (indexElement) =>{
        let FilteredTasks = tasks.filter((element,index) => { return indexElement != index; });
        setTasks(FilteredTasks)

        
    }

    const editTask = (index) =>{
      
        
    }

    const moveTaskUp = (index) =>{ 

        if(index != 0){
            let aux = tasks[index-1]
            tasks[index - 1] = tasks[index]
            tasks[index] = aux
            setTasks([...tasks])
        
        }
        else{
            console.warn("Esta tarea está lo más alto posible")
        }
        
    }

    const moveTaskDown = (index) =>{
        if(index != tasks.length -1){
            let aux = tasks[index+1]
            tasks[index + 1] = tasks[index]
            tasks[index] = aux
            setTasks([...tasks])
           
        }
        else{
            console.warn("Esta tarea está lo más bajo posible")
        }
        
    }
    
    return(
        <div className="to-do-list">
            <h1>To Do App</h1>

            <div>
                <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}></input>
                <button
                type="button" className="btn btn-success btn-lg"
                onClick={addTask}
                >add new task</button>
            </div>

            <div className="ordered-list">
                <ol>
                    {tasks.map((task,index) =>
                   
                        <li className="tasks" key={index}> {task}
                            <button type="button" className="btn btn-danger btn-lg" onClick={ () => deleteTask(index)}> Delete</button>
                            <button  type="button" className="btn btn-light btn-lg" onClick={ () => moveTaskUp(index)}> up</button>
                            <button  type="button" className="btn btn-light btn-lg" onClick={ () => moveTaskDown(index)}> Down</button>
                            <button  type="button" className="btn btn-info btn-lg"    onClick={ () => editTask(index)}> Edit</button>
                            
                        </li>
               
                    
                    )}
                </ol>
            </div>
        </div>
        
    )

}

export default ToDoList