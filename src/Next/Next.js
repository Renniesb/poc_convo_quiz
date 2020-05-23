import React from 'react';

function Next({history,nextQuestion}) {
    return <div className="next">
                <button id="next" className="myButton" onClick={()=>{nextQuestion(history)}}>Next</button>
           </div>
}

export default Next;