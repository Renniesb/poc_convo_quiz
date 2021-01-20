import React, { Component } from 'react';
import Quiz from './../Quiz/Quiz';
import styles from './AllQuizzes.module.css';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import slideImages from './../slideImages';
import { authpack } from '../index.js'





class AllQuizzes extends Component {
    
    componentDidMount(){
         this.unlisten = authpack.listen(state => {
            if(!state.user){
                this.props.changeUser(false)
            }
            if (state.ready && state.user && state.user.stripe_plan) {
                const userPlan = state.user.stripe_plan
                console.log(`Plan id: ${userPlan.id}`)
                console.log(`Plan name: ${userPlan.name}`)
                console.log(`Plan amount: ${userPlan.amount}`)
                this.props.changeUser(state.user)
            }
            if(state.user && !state.user.stripe_plan){
                authpack.open()
            }
        })
    }
    componentWillUnmount(){
        this.unlisten()
    }
    selectLevel = ()=>{
        return (
        <form style={{marginBottom: "20px"}}>
            <label htmlFor="level">Choose your language level:</label>
            <select name="level" id="level" onChange={e => {this.props.changeLevel(e)}} value={this.props.level}>
                <option value="All Levels">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>
        </form>
        )
    }

    filterQuizzes = (filtered)=> {
        console.log("filtered now", filtered)
        return filtered.map((quiz,i) => {
            return <Quiz user={this.props.user} key={`key${i}`} quiz={quiz}/>
        })
    }

    render() {
        const filteredQuizzes =  this.props.quizzes.filter((quiz)=>{
            if(this.props.level === "All Levels"){
                return quiz
            }
            return quiz.level === this.props.level
        })
        const userFilteredQuizzes =  this.props.quizzes.filter((quiz)=>{
            console.log("userFilteredQuizzes")
            console.log("stripe plan",this.props.user.stripe_plan)

            if(this.props.user){
                if(this.props.user.stripe_plan.id === "plan_IdvxvXuhcHgk39"){
                    if(this.props.level === "All Levels"){
                        return quiz
                    }
                    return quiz.level === this.props.level
                }
                if(this.props.user.stripe_plan.id === "plan_IdvrBZOlyTbjHD"){
                    return quiz.level === "Advanced"

                }
                if(this.props.user.stripe_plan.id === "plan_IdvqDF0c82Cbg3"){
                    return quiz.level === "Intermediate"
                }
                if(this.props.user.stripe_plan.id === "plan_IdvogKus1JPGXm"){
                    return quiz.level === "Beginner"
                }
            }
        })
        return (
            <div className={styles.gamebackground}>
                <nav>
                    {!this.props.user && <><a onClick={()=>authpack.open()}>Login</a><a onClick={()=>authpack.open()}>Sign-up</a></>}
                    {this.props.user && <><a onClick={()=>authpack.exit()}>Logout</a><a onClick={()=>authpack.open()}>Profile</a></>}
                    
                    <a href="#quizzes">Quizzes</a>
                </nav>
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

                    
                    <h1 id="quizzes" className={styles.whitetext}>Choose a Quiz Below</h1>
                    {!this.props.user || this.props.user.stripe_plan.id === "plan_IdvxvXuhcHgk39" ? this.selectLevel(): <></>}
                    {        
                        !this.props.user && this.filterQuizzes(filteredQuizzes)            
                    }
                    {
                        this.props.user && this.filterQuizzes(userFilteredQuizzes)
                    }
                </div>
            </div>
            
        );
    }
}

export default AllQuizzes;
