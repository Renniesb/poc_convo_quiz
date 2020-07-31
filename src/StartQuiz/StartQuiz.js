import './StartQuiz.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class StartQuiz extends Component {
    componentDidMount(){
        let quiz = this.props.location.state.quiz
        this.props.setQuizInfo(quiz)
        this.props.setQuestions(quiz.id);
    }
    render() {
       
        return (
            <div className="quizbackground">
                <section className="start-end-screen">
                    <div className="background-img" style={{gridArea: 'header'}}>
                    <Link className="myButton" to="/">Take a different Quiz</Link>  
                    <div className="start-title">
                        <h2>{this.props.quizInfo.quizname}</h2>
                    </div>
                    <header className="start-end-info"></header>
                    <div className="center-button"><Link id="start-quiz" className="myButton" to="/question/1">Start Quiz</Link></div>
                    </div>
                </section>
            </div>
        );
    }
}



export default StartQuiz;