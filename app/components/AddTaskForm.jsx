import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
const AddTaskForm = ({ TaskFunction, FormData }) => {
    const [formularyState, setFormularyState] = useState({ taskTitle: '', taskEndDate: '', taskDescription: '' })

    useEffect(() => {
        if(FormData) setFormularyState(FormData)
        
    }, [])
    return (
        <Form onSubmit={() => {
            event.preventDefault();
            TaskFunction(formularyState)
            setFormularyState({ taskTitle: '', taskEndDate: '', taskDescription: '' })
        }} >
            <Form.Group className="mb-3">
                <Form.Label >Task Tittle</Form.Label>
                <Form.Control value={formularyState ? formularyState.taskTitle : ''} onChange={(event) => setFormularyState({ ...formularyState, taskTitle: event.target.value })} type="text" placeholder="Enter the task title"/>
            </Form.Group>


            <Form.Group className="mb-3" >
                <Form.Label>Task end date</Form.Label>
                <Form.Control value={formularyState ? formularyState.taskEndDate : ''} onChange={(event) => setFormularyState({ ...formularyState, taskEndDate: event.target.value })} type="date" placeholder="Enter the task title" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Task Description</Form.Label>
                <Form.Control  value={formularyState ? formularyState.taskDescription : ''} onChange={(event) => setFormularyState({ ...formularyState, taskDescription: event.target.value })} type="textarea" as="textarea" placeholder="Enter the task description" />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>

    )
}

export default AddTaskForm;