import React, { Component } from 'react';
import Quiz from './../Quiz/Quiz';


class AllQuizzes extends Component {
    componentDidMount(){
        this.props.onNewQuiz()
        
    }
    render() {
        return (
            <div>
                {this.props.quizzes.map((quiz) => {
                   return <Quiz quiz={quiz}/>
                })}
            </div>
        );
    }
}

export default AllQuizzes;
