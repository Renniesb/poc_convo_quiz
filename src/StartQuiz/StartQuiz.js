import './StartQuiz.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class StartQuiz extends Component {
    componentDidMount(){
        this.props.setQuizInfo(this.props.location.state.quiz)
        fetch(`http://localhost:8000/api/quiz/${this.props.location.state.quiz.id}/questions`)
            .then(response => response.json())
            .then(data =>{ 
                for(let i =0; i<data.length;i++){
                data[i].id = i+1;
                }
                this.props.setQuestions(data)});
    }
    render() {
        return (
            <section className="start-end-screen">
                <div className="background-img" style={{gridArea: 'header'}}>
                <div className="start-title">
                    <h2>{this.props.quizInfo.quizname}</h2>
                </div>
                <header className="start-end-info"></header>
                <div className="center-button"><Link id="start-quiz" className="myButton" to="/question/1">Start Quiz</Link></div>
                </div>
            </section>
        );
    }
}



export default StartQuiz;