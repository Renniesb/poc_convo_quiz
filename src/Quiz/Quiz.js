
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../AllQuizzes/AllQuizzes.module.css';
import './Quiz.css';
import { useState, useEffect } from 'react';
import env from '../config.js';


const Quiz = ({quiz,planInfo,user}) => {

    const [quizId,setQuizId]= useState(null);
    useEffect(()=>{
        fetch(`${env.FlashCards}decks/${quiz.id}/`)
        .then(response => response.json())
        .then((data) => {
            setQuizId(data[0]?.quizid)
        })
        .catch(err => console.error(err));

    },[])

    const flashCardsButton = ()=> {
        return (<Link className="myButton" to={{
            pathname:'/FlashCards',
            state:{ 
                quiz: quiz
            } 
            }}>Go To Flash Cards</Link>)
    }

    if(quiz.locked && !planInfo?.id && planInfo?.status !== "ACTIVE" && user?.sub !== "auth0|60a04609966070006aa00eb4"){
        return (
        <div>
            <div className="lockedquiz">
                <div className="overlay">Subscribe to Access this Quiz</div>
                <img style={{ width: "250px", marginTop: "50px"}}alt="poc-icon"  src="https://i.imgur.com/riiO7TJ.png"/>           
                
                <h2>{quiz.quizname}</h2>                

                <p><b>Language Level:</b> {quiz.level}</p>
                
                <p><b>Description: </b>{quiz.quizdescription}</p>  

                {quizId === quiz.id && flashCardsButton()}   
                
                <Link className="myButton" to={{
                pathname:'/StartQuiz',
                state:{ 
                    quiz: quiz
                } 
                }}>Go to Quiz</Link>
                
            </div>  
        </div>
        ) 
    } 
    else {
       return ( 
        <div>
            <div className={styles.panel}>
                <img style={{ width: "250px", marginTop: "50px"}}alt="poc-icon"  src="https://i.imgur.com/riiO7TJ.png"/>           
                
                <h2>{quiz.quizname}</h2>                

                <p><b>Language Level:</b> {quiz.level}</p>
                
                <p><b>Description: </b>{quiz.quizdescription}</p>            
                
                {quizId === quiz.id && flashCardsButton()}   

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