/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalAddTask = forwardRef(({children,buttonTitle,ModalTitle,variantName},ref) => {
    const [show, setShow] = useState(false);
    const modalRef = useRef(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useImperativeHandle(ref, ()=>{
        return{
            closeModal(){
                setShow(false)   
            }
        }
    })

    
    return (
        <div ref={modalRef}>
            <Button variant={`${variantName}`} onClick={handleShow}>
                {buttonTitle}
            </Button>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{ModalTitle}</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                       {children}
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
})

export default ModalAddTask;