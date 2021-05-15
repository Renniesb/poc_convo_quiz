import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentModal() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const discount = "P0C20";
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>POC Student Discount</Modal.Title>
            </Modal.Header>
            <Modal.Body>If you are a POC student enter in your POC student {discount} code
                <br/><input/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    I'm not a POC student
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Submit Code
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default StudentModal;