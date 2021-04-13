import React, { Component } from 'react';
import Quiz from './../Quiz/Quiz';
import styles from './AllQuizzes.module.css';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import slideImages from './../slideImages';
import LoginButton from './../LoginButton';
import LogoutButton from './../LogoutButton';



class AllQuizzes extends Component {

    render() {
        const filteredQuizzes =  this.props.quizzes.filter((quiz)=>{
            if(this.props.level === "All Levels"){
                return quiz
            }
            return quiz.level === this.props.level
        })
        return (
            <div className={styles.gamebackground}>
                <div className={styles.hero}>
                    <img alt="statue-of-liberty-hero-img" src="https://user-images.githubusercontent.com/7147957/88594242-de027f00-d02e-11ea-9e89-625a083b38e8.jpg"/>
                </div>
                <div style={{backgroundColor: "black", padding: "15px", display: "flex", justifyContent: "center"}}>
                
                <Slide className={styles.slideshow}>                   

                    {slideImages.map((image,ind) => {
                       return( <div key={`slide${ind}`} className="each-slide">
                        <div>
                            <img alt={`slide ${ind}`} className={styles.slideshow} src={image}></img>
                        </div>
                    </div>)
                    })}
                </Slide>
                
                </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                <LoginButton />
                <LogoutButton />
                    {/* <Link style={{marginRight: "5px"}} className="myButton"  to="/EditQuizzes">Admin</Link> */}
                </div>
                

                

                <div style={{display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div className={styles.infoPanel}>
                            <h2 className={styles.infoText}>Quiz Instructions</h2>
                            <ol>
                                <li className={styles.infoItem}>Choose a listening comprehension quiz</li>
                                <li className={styles.infoItem}>Fill in the blanks after listening to each question</li>
                                <li className={styles.infoItem}>Press submit</li>
                                <li className={styles.infoItem}>You will recieve feedback about your answer</li>
                                <li className={styles.infoItem}>Press Next to go to the next question</li>
                                <li className={styles.infoItem}>At the end of each quiz you will recieve a score</li>
                            </ol>
                    </div>
                    <form>
                        <label htmlFor="level">Choose your language level:</label>
                        <select name="level" id="level" onChange={e => {this.props.changeLevel(e)}} value={this.props.level}>
                            <option value="All Levels">All Levels</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </form>
                    
                    <h1 className={styles.whitetext}>Choose a Quiz Below</h1>
                    {                    
                    filteredQuizzes.map((quiz,i) => {
                    return <Quiz key={`key${i}`} quiz={quiz}/>
                    })}
                </div>
            </div>
            
        );
    }
}

export default AllQuizzes;
