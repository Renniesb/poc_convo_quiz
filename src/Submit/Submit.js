import React from 'react';

function Submit({isSubmitDisabled,submitAnswers,question}){
 return   <div className="submit">
            <button onClick={() => {
              submitAnswers(question)          
            }} disabled={isSubmitDisabled} id="submit-answer" className="myButton">Submit answer</button>
    </div>
}

export default Submit;