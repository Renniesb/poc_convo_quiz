import React from 'react';
import './EndQuiz.css';

function EndQuiz({correct,questionTotal,history,OnNewQuiz}){
    return <section className="start-end-screen">
                <div className="background-img" style={{gridArea: 'header'}}>
                <h2>Conversational Quiz</h2>
<header className="start-end-info"><div>{correct} of {questionTotal} correct</div> <div>&nbsp;&nbsp;{Math.floor(correct/2 *100)}%&nbsp;&nbsp;</div>
                <div>Thanks for playing.</div></header>
                <div className="center-button"><button id="start-new-quiz" className="myButton" onClick={() => {
                    OnNewQuiz(history)
                }}>Take the quiz again</button></div>
                </div>
            </section>
}

export default EndQuiz;