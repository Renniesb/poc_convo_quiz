import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EditQuiz extends Component {
    componentDidMount(){
        let quiz = this.props.location.state.quiz;
        this.props.setQuizInfo(quiz);
        this.props.setQuestions(quiz.id, true);
        

    }
    render() {
        let quiz = this.props.location.state.quiz;
        return (
            <div>
                <h3>Edit Quiz</h3>
                <div>
                    <label  htmlFor="label">Quiz Name</label>
                    <input id="quizName" value={this.props.quizName} onChange={e => {this.props.onNewQuestionText(e)}} name="quizName"  />
                </div>
                
                <div>
                    <label htmlFor="description">Quiz Description</label>
                    <textarea onChange={e => {this.props.onNewQuestionText(e)}} value={this.props.quizDescription} id="quizDescription" name="quizDescription" />
                </div> 
                <button className="myButton" onClick={this.props.onEditQuiz}>Submit Changes</button>
                {this.props.questions.map((question, i ) => {
                    console.log("responsetext", question.responsetext)
                    return <div key={`key${i}`}>
                                <Link to={{
                                    pathname:'/EditQuestion',
                                    state:{ 
                                        question: question
                                    } 
                                    }}>question {i + 1}
                                </Link>
                                <button onClick={e => {this.props.onDelete(e,question.id, quiz.id)}} id="deleteQuestion" name="deleteQuestion">Delete</button>                        
                            </div>
                       
                    })}
                <Link className="myButton" to="/AddQuestion"> + Add Question</Link>
            </div>
        );
    }
}

export default EditQuiz;
