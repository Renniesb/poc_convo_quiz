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
                    <ToggleSwitch id="toggleSwitch" addedLevel={this.props.addedLevel} locked={this.props.locked} onChange={this.props.onChange} Name="locked"/>
                    <label style={{marginTop: "10px"}} htmlFor="addedLevel">
                        Choose your quiz level 
                        <select onChange={e => {this.props.onNewQuestionText(e)}} name="addedLevel"      id="addedLevel" value={this.props.addedLevel}>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>

                        </select>
                    </label>
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
