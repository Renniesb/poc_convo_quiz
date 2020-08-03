
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../AllQuizzes/AllQuizzes.module.css';

const Quiz = ({quiz}) => {
    return ( 
    <div>
        <div className={styles.panel}>
            <img src="https://i.imgur.com/3Lijaw0.png"/>
            <h2>{quiz.quizname}</h2>
            <p>{quiz.quizdescription}</p>
            <Link className="myButton" to={{
            pathname:'/StartQuiz',
            state:{ 
                quiz: quiz
            } 
            }}>Go to Quiz</Link>
        </div>

        

    </div> );
}
 
export default Quiz;