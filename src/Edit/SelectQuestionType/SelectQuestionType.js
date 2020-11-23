import React from 'react';
import { Link } from 'react-router-dom';

function SelectQuestionType(props) {
    

    return (
        <>
                    <section className="select-videos">
                        <div className="btn-group">
                            <h2>Select the type of quiz you want to create</h2>
                        <Link className="select myButton" to="/AddQuestion">Fill in the blank quiz</Link>  
                        <Link className="select myButton" to="/AddMultipleChoiceQuestion">Multiple choice quiz</Link> 
                        </div>
                    </section>  
        </>
    )
}

export default SelectQuestionType
