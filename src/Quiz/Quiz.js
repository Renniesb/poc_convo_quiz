
import React from 'react';
import { Link } from 'react-router-dom';
const Quiz = ({quiz}) => {
    console.log(quiz)
    return ( 
    <div>
        <h1>{quiz.quizname}</h1>
        <p>{quiz.quizdescription}</p>
        <Link className="myButton" to={{
            pathname:'/StartQuiz',
            state:{ 
                quiz: quiz
            } 
        }}>Go to Quiz</Link>

    </div> );
}
 
export default Quiz;