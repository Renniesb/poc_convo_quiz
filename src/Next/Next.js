import React from 'react';

function Next({history,nextQuestion,isNextDisabled,totalQuestions}) {
    return <div className="next">
                <button disabled={isNextDisabled} id="next" className="myButton" onClick={()=>{nextQuestion(history,totalQuestions)}}>Next</button>
           </div>
}

export default Next;