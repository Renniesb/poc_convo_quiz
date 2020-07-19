import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AddQuiz extends Component {
    render() {
        return (
            <div>
                <h1>Add Quiz</h1>
                <h3>Quiz Name</h3>
                <div>
                    <label htmlFor="label">Quiz Name</label>
                    <input name="quiz name" />
                </div>
                <div>
                    <label htmlFor="description">Quiz Description</label>
                    <textarea name="quizDescription" />
                </div> 
            </div>
        );
    }
}

export default AddQuiz;
