import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './AddQuiz.module.css';
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'


class AddQuiz extends Component {
    render() {
        return (
            <div className={styles.addquizbackground}>
                <div className="panel">
                    <Link className="myButton" to="/EditQuizzes">Back</Link>
                    <h1>Add Quiz</h1>
                    <div>
                        <label htmlFor="label">Quiz Name</label>
                        <input onChange={e => {this.props.onNewQuestionText(e)}} value={this.props.newQuizName} id="newQuizName" name="newQuizName" />
                    </div>
                    <div>
                        <label htmlFor="quizDescription">Quiz Description</label>
                        <textarea onChange={e => {this.props.onNewQuestionText(e)}} value={this.props.newQuizDescription} id="newQuizDescription" name="newQuizDescription" />
                    </div>
                    <div>
                        <label htmlFor="quizDescription">Quiz Description</label>
                        <textarea onChange={e => {this.props.onNewQuestionText(e)}} value={this.props.newQuizDescription} id="newQuizDescription" name="newQuizDescription" />
                    </div>
                    <ToggleSwitch Name="locked"/>
                    <Link id="submitQuiz"  onClick={() => {this.props.addNewQuiz()}} className="myButton" to={{
                                        pathname:'/EditQuiz',
                                        state:{
                                            isNewQuiz: true
                                        } 
                                    }}>Submit</Link>
                </div>

            </div>
        );
    }
}

export default AddQuiz;
