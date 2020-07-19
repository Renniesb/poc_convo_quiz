import React from 'react';
import './EndQuiz.css';
import { Link } from 'react-router-dom';

function EndQuiz({correct,questionTotal,OnNewQuiz, quizInfo}){
    return <section className="start-end-screen">
                <div className="background-img" style={{gridArea: 'header'}}>
                <h2>{quizInfo.quizname}</h2>
<header className="start-end-info"><div>{correct} of {questionTotal} correct</div> <div>&nbsp;&nbsp;{Math.floor(correct/questionTotal *100)}%&nbsp;&nbsp;</div>
                <div>Thanks for playing.</div></header>
                <div className="center-button"><Link id="start-new-quiz" className="myButton" onClick={() => {
                    OnNewQuiz()
                }} to={{
                    pathname:'/StartQuiz',
                    state:{ 
                        quiz: quizInfo
                    } 
                }}>Take the quiz again</Link></div>
                </div>
            </section>
}

export default EndQuiz;