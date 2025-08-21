"use client"
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css'
import Task from "./components/Task";
import ModalAddTask from "./components/ModalAddTask";
import AddTaskForm from "./components/AddTaskForm";
import { createTaskByID, deleteTaskById, getAllTasks, updateTaskByID } from "./services/task";
const ToDoList = () => {

    const [tasks, setTasks] = useState([])
    const [taskToFind, setTaskToFind] = useState('');
    console.log(tasks)
    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await getAllTasks()
            setTasks(tasks.data)
        }
        fetchTasks()
    }, [])

    const handleInputChange = (event) => {
        setTaskToFind(event.target.value)
    }

    const addTask = async (newTask) => {
        const createNewTask = await createTaskByID(newTask)
        setTasks([...tasks, createNewTask.data])

    }

    const deleteTask = async (taskID) => {
        await deleteTaskById(taskID)
        let FilteredTasks = tasks.filter((element, index) => { return element.id != taskID; });
        setTasks(FilteredTasks)

    }

    const editTask = async (editedTask,index) => {
        await updateTaskByID(editedTask)
        let arrayEditedTasks = tasks
        arrayEditedTasks[index] = editedTask
        setTasks([...arrayEditedTasks])
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
                editTask={editTask}
            />

        </div>

    )

}

export default ToDoList