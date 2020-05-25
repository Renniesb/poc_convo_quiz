import React from 'react';
import './StartQuiz.css';
import { Link } from 'react-router-dom';

function StartQuiz(){
    return <section className="start-end-screen">
                <div className="background-img" style={{gridArea: 'header'}}>
                <div className="start-title">
                    <h2>Conversational Quiz</h2>
                </div>
                <header className="start-end-info"></header>
                <div className="center-button"><Link id="start-quiz" className="myButton" to="/question/1">Start Quiz</Link></div>
                </div>
            </section>
}

export default StartQuiz;