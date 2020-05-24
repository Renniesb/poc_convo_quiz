import React from 'react';
import './EndQuiz.css';

function EndQuiz(){
    return <section className="start-end-screen">
                <div className="background-img" style={{gridArea: 'header'}}>
                <h2>Conversational Quiz</h2>
                <header className="start-end-info"><div>0 of 5 correct</div> <div>&nbsp;&nbsp;0%&nbsp;&nbsp;</div>
                <div>Thanks for playing.</div></header>
                <div className="center-button"><button id="start-new-quiz" className="myButton">Start a new Quiz</button></div>
                </div>
            </section>
}

export default EndQuiz;