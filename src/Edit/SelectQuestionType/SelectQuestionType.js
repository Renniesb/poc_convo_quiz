import React from 'react';
import { Link } from 'react-router-dom';

function SelectQuestionType(props) {
    

    return (
        <>
                    <section className="select-videos">
                        <div className="btn-group">
                            <h2>Select the type of quiz you want to create</h2>
                            <button className="select">Fill in the blank quiz</button>
                            <button className="select">Multiple choice quiz</button>
                        </div>
                    </section>  
        </>
    )
}

export default SelectQuestionType
