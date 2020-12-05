
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../AllQuizzes/AllQuizzes.module.css';
import './Quiz.css';

const Quiz = ({quiz}) => {

    if(quiz.locked){
        return (
        <div>
            <div className="lockedquiz">
                <div className="overlay">Subscribe to Access this Quiz</div>
                <img style={{ width: "250px", marginTop: "50px"}}alt="poc-icon"  src="https://i.imgur.com/riiO7TJ.png"/>           
                
                <h2>{quiz.quizname}</h2>                

                <p><b>Language Level:</b> {quiz.level}</p>
                
                <p><b>Description: </b>{quiz.quizdescription}</p>            
                
                <Link className="myButton" to={{
                pathname:'/StartQuiz',
                state:{ 
                    quiz: quiz
                } 
                }}>Go to Quiz</Link>
            </div>  
        </div>
        ) 
    } else {
       return ( 
        <div>
            <div className={styles.panel}>
                <img style={{ width: "250px", marginTop: "50px"}}alt="poc-icon"  src="https://i.imgur.com/riiO7TJ.png"/>           
                
                <h2>{quiz.quizname}</h2>                

                <p><b>Language Level:</b> {quiz.level}</p>
                
                <p><b>Description: </b>{quiz.quizdescription}</p>            
                
                <Link className="myButton" to={{
                pathname:'/StartQuiz',
                state:{ 
                    quiz: quiz
                } 
                }}>Go to Quiz</Link>
            </div>     

        </div> 
        ); 
    }
    
}
 
export default Quiz;