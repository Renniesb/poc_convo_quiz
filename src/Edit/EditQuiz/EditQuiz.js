import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditQuiz.css';
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'

class EditQuiz extends Component {
    componentDidMount(){
        if(!this.props.location.state.isNewQuiz){
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
                    <label htmlFor="toggleSwitch">Locked:</label> 
                    <ToggleSwitch id="toggleSwitch" addedLevel={this.props.addedLevel} locked={this.props.locked} onChange={this.props.onChange} Name="editlocked"/>
                    <label style={{marginTop: "10px", marginBottom: "20px"}} htmlFor="addedLevel">
                        Edit the quiz level 
                        <select onChange={e => {this.props.onNewQuestionText(e)}} name="addedLevel"      id="addedLevel" value={this.props.addedLevel}>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>

                        </select>
                    </label>
                    <button className="myButton" onClick={this.props.onEditQuiz}>Update Quiz Info</button>
                    <h3>Questions</h3>
                    {this.props.questions.map((question, i ) => {
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
                    <Link className="myButton" to="/SelectQuestionType"> + Add Question</Link>
                </div>    
                   
            </div>
        );
    }
}

export default EditQuiz;
