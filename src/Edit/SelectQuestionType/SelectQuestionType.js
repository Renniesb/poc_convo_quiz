import React from 'react';
import { Link } from 'react-router-dom';
import { findByLabelText } from '@testing-library/react';

function SelectQuestionType(props) {
    

    return (
        <div className="addquestionbackground">
            <div className="panel" style={{display: "flex", alignItems: "center"}}>
                <section className="select-videos">
                    <div className="btn-group" style={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <h2>Select the type of quiz you want to create</h2>
                        <Link className="select myButton" to="/AddQuestion">Fill in the blank quiz</Link>  
                        <Link className="select myButton" to="/AddMultipleChoiceQuestion">Multiple choice quiz</Link> 
                    </div>
                </section>  
            </div>
                    
        </div>
    )
}

export default SelectQuestionType
