import React, { Component } from 'react';
import Quiz from './../Quiz/Quiz';
import styles from './AllQuizzes.module.css';
import { Link } from 'react-router-dom';

class AllQuizzes extends Component {
    componentDidMount(){
        this.props.onNewQuiz()
        
    }
    render() {
        return (
            <div className={styles.gamebackground}>
                <div className={styles.hero}>
                    <img src="https://user-images.githubusercontent.com/7147957/88594242-de027f00-d02e-11ea-9e89-625a083b38e8.jpg"/>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <Link style={{marginRight: "5px"}} className="myButton"  to="/EditQuizzes">Admin</Link>
                </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <h1 className={styles.whitetext}>Choose a Quiz Below</h1>
                    {this.props.quizzes.map((quiz,i) => {
                    return <Quiz key={`key${i}`} quiz={quiz}/>
                    })}
                </div>
            </div>
            
        );
    }
}

export default AllQuizzes;
