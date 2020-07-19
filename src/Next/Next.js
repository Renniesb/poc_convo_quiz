import React from 'react';

function Next({history,nextQuestion,isNextDisabled,totalQuestions,question}) {
    return <div className="next">
                <button disabled={isNextDisabled} id="next" className="myButton" onClick={()=>{nextQuestion(history,question,totalQuestions)}}>Next</button>
           </div>
}

export default Next;