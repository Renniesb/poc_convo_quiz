import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditQuiz.css';


class EditQuiz extends Component {
    componentDidMount(){
        if(this.props.location.state.isNewQuiz){
            console.log("new quiz")
        }else{
            let quiz = this.props.location.state.quiz;
            this.props.setQuizInfo(quiz);
            this.props.setQuestions(quiz.id, true);
        }
    }
    
    render() {
        
        return (
            <div className="editquizbackground">
                <div className="panel {
" >
                    <Link className="myButton" to="/EditQuizzes">Back</Link>
                    <h1>Edit Quiz</h1>
                    <div>
                        <label  htmlFor="label">Quiz Name</label>
                    </div>
                    <div>
                        <input id="quizName" value={this.props.quizName} onChange={e => {this.props.onNewQuestionText(e)}} name="quizName"  />
                    </div>
                    
                    <div>
                        <label htmlFor="description">Quiz Description</label>
                    </div>
                    <div>
                        <textarea onChange={e => {this.props.onNewQuestionText(e)}} value={this.props.quizDescription} id="quizDescription" name="quizDescription" />
                    </div> 
                    <button className="myButton" onClick={this.props.onEditQuiz}>Submit Changes</button>
                    <h3>Questions</h3>
                    {this.props.questions.map((question, i ) => {
                        console.log("responsetext", question.responsetext)
                        return <div key={`key${i}`}>
                                    <Link className="questionlink" to={{
                                        pathname:'/EditQuestion',
                                        state:{ 
                                            question: question
                                        } 
                                        }}>question {i + 1}
                                    </Link>
                                    <button onClick={e => {this.props.onDelete(e,question.id)}} id="deleteQuestion" name="deleteQuestion">Delete</button>                        
                                </div>
                        
                        })}
                    <Link className="myButton" to="/AddQuestion"> + Add Question</Link>
                </div>    
                   
            </div>
        );
    }
}

export default EditQuiz;
