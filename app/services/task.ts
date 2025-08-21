import axios from 'axios';
const url = "http://localhost:3000/tasks"
export const getAllTasks = async() => {
    const result = await axios.get(url)
    return result
}

export const createTaskByID = async(task)=>{
    return await axios.post(url,task)
    
}
export const deleteTaskById = async(id) =>{
    const taskById = await axios.delete(`${url}/${id}`);
    return taskById;
}

export const  updateTaskByID = async(editedTask) => {
    const editedTaskById = await axios.put(`${url}/${editedTask.id}`,editedTask);
    return editedTaskById
}

