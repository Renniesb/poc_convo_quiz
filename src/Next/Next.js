import React from 'react';

function Next({history,nextQuestion,isNextDisabled}) {
    return <div className="next">
                <button disabled={isNextDisabled} id="next" className="myButton" onClick={()=>{nextQuestion(history)}}>Next</button>
           </div>
}

export default Next;