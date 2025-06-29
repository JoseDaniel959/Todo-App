import { Accordion, Card, Col, Row, useAccordionButton } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ModalAddTask from "./ModalAddTask";
import AddTaskForm from "./AddTaskForm";

const Task = ({ tasks, moveTaskUp, moveTaskDown, deleteTask }) => {

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );

    return (
      <Button
        type="button"
        style={{ backgroundColor: 'rgb(35, 32, 179)' }}
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }

   const editTask = (index) => {
        console.log("soy el indice seleccionado",index)
  }

  return (


    <Accordion>
      <ol>

        {
          tasks.map((task, index) => {
            return (
              <li key={index}>
                <Card>
                  <Card.Header style={{ display: "flex", justifyContent: "center", }}>
                    <Row>
                      <Col>
                        <strong>{task.taskTitle}</strong>
                      </Col>
                      <Col>
                        <Button variant="danger" onClick={() => deleteTask(index)}> delete</Button >
                      </Col>
                      <Col>
                        <Button variant="light" onClick={() => moveTaskUp(index)}> up</Button >
                      </Col>
                      <Col>
                        <Button variant="light" onClick={() => moveTaskDown(index)}> Down</Button >
                      </Col>
                      <Col>
                        <ModalAddTask
                          buttonTitle={'edit'}
                          ModalTitle={'New task formulary'}
                          variantName={'primary'}
                        >
                          <AddTaskForm
                            FormData={task}
                            TaskFunction={() => editTask(index)}
                          />
                        </ModalAddTask>
                      </Col>
                      <Col>
                        <CustomToggle eventKey={`${index}`}>Detalles</CustomToggle>
                      </Col>
                    </Row>


                  </Card.Header>
                  <Accordion.Collapse eventKey={`${index}`}>
                    <Card.Body>{task.taskDescription}</Card.Body>
                  </Accordion.Collapse>
                </Card>

              </li>
            )

          })

        }

      </ol>
    </Accordion>


  );
}

export default Task