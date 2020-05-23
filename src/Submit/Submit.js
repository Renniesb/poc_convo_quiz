import React from 'react';

function Submit({isDisabled,submitAnswers,question}){
 return   <div className="submit">
            <button onClick={() => {
              submitAnswers(question)          
            }} disabled={isDisabled} id="submit-answer" className="myButton">Submit answer</button>
    </div>
}

export default Submit;