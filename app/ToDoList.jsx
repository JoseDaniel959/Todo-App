"use client"
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css'
import Task from "./components/Task";
import ModalAddTask from "./components/ModalAddTask";
import AddTaskForm from "./components/AddTaskForm";

const ToDoList = () => {

    const [tasks, setTasks] = useState([{ taskTitle: "desayunar", taskDescription: "i have to eat", taskEndDate: '2024-02-12'}, { taskTitle: "comer", taskDescription: "i have to eat", taskEndDate: '2024-10-12' }, { taskTitle: "ir al gym", taskDescription: "i have to eat", taskEndDate: '2024-09-01'}])
    const [taskToFind, setTaskToFind] = useState('');
    console.log(tasks)
    const handleInputChange = (event) => {
        setTaskToFind(event.target.value)
    }

    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const deleteTask = (indexElement) => {
        let FilteredTasks = tasks.filter((element, index) => { return indexElement != index; });
        setTasks(FilteredTasks)

    }

   

    const moveTaskUp = (index) => {

        if (index != 0) {
            let aux = tasks[index - 1]
            tasks[index - 1] = tasks[index]
            tasks[index] = aux
            setTasks([...tasks])

        }
        else {
            console.warn("Esta tarea está lo más alto posible")
        }

    }

    const moveTaskDown = (index) => {
        if (index != tasks.length - 1) {
            let aux = tasks[index + 1]
            tasks[index + 1] = tasks[index]
            tasks[index] = aux
            setTasks([...tasks])

        }
        else {
            console.warn("Esta tarea está lo más bajo posible")
        }

    }

    return (
        <div className="to-do-list">
            <h1>To Do App</h1>

            <div>
                <input type="text" placeholder="find a task" onChange={handleInputChange}></input>
                <ModalAddTask
                    buttonTitle={'add newtask'}
                    ModalTitle={'New task formulary'}
                    variantName={'primary'}
                >
                    <AddTaskForm
                        TaskFunction={addTask}
                    />
                </ModalAddTask>
            </div>


            <Task
                tasks={tasks.filter((task) => task.taskTitle.includes(taskToFind))}
                moveTaskUp={moveTaskUp}
                moveTaskDown={moveTaskDown}
                deleteTask={deleteTask}
            />

        </div>

    )

}

export default ToDoList