import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AddQuiz extends Component {
    componentDidMount(){
        this.props.handleAddNewQuiz()
    }
    render() {
        return (
            <div>
                <h1>Add Quiz</h1>
                <h3>Quiz Name</h3>
                <div>
                    <label htmlFor="label">Quiz Name</label>
                    <input onChange={e => {this.props.onNewQuestionText(e)}} value={this.props.quizName} id="quizName" name="quizName" />
                </div>
                <div>
                    <label htmlFor="quizDescription">Quiz Description</label>
                    <textarea onChange={e => {this.props.onNewQuestionText(e)}} value={this.props.quizDescription} id="quizDescription" name="quizDescription" />
                </div>
                <button className="myButton" onClick={this.props.addNewQuiz}>Submit</button>
            </div>
        );
    }
}

export default AddQuiz;
