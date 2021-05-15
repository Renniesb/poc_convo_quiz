import React,{useState} from "react";
import StudentButtons   from './StudentButtons';
import NonStudentButtons from './NonStudentButtons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SignUp = () => {
    let textInput = React.createRef();   
    const [show, setShow] = useState(true);  
    const handleClose = () => setShow(false);
    const [student,studentState] = useState(false);
    const discount = "POC20";
    const [error,setError]= useState("");
    const handleCode = ()=>{
      
      if(textInput.current.value===discount){ 
        
        studentState(true) 
        handleClose()  
      }
      else{ 
        setError("Invalid POC Code");
      }
          
    }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>POC Student Discount</Modal.Title>
            </Modal.Header>
            <Modal.Body>If you are a POC student enter in your POC student code
                <br/><input ref={textInput} style={{marginTop:"2em"}}/><Button style={{marginLeft:".5em"}} variant="primary" onClick={event=>handleCode()}>
                    Submit Code
                </Button>
                <div style={{marginTop: "10px", color:"red"}}>{error}</div>
            </Modal.Body>
            <Modal.Footer style={{marginTop:"1em"}}>
                <Button variant="secondary" onClick={handleClose}>
                    I'm not a POC student
                </Button>
            </Modal.Footer>
        </Modal>
    
    {student?<StudentButtons/>:<NonStudentButtons/>}
    </>
  )
};

export default SignUp;