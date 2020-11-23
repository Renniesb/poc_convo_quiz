import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './AddQuestion.css'


class AddQuestion extends Component {
    componentDidMount(){
        this.props.onNewQuestion()
    }
    componentWillUnmount(){
        
    }
    render() {
        return (
            <div className="addquestionbackground">
                <div className="panel">
                    <Link id="backToEditQuiz" className="myButton" to={{
                                        pathname:'/EditQuiz',
                                        state:{
                                            quiz: this.props.quizInfo
                                        } 
                                    }}>
                                        Back
                    </Link> 
                    <h1>Add Fill in the blank Question</h1>
                    <div>
                        <label htmlFor="topictext">Type the question topic text</label>
                        <input value={this.props.topictext} id="topictext" onChange={e => {this.props.onNewQuestionText(e)}} name="topictext" />
                    </div>
                    <div>
                        <label htmlFor="responsetext">Type in the response text with an underscore before and after each word that the user must fill in as a blank</label>
                        <textarea value={this.props.responsetext} id="responsetext" onChange={e => {this.props.onNewQuestionText(e)}} name="responsetext" />
                    </div>
                    <div>
                        <label htmlFor="linktext">
                        Type in the link to your
                        <select value={this.props.linktype} onChange={e => {this.props.onNewQuestionText(e)}} name="linktype" id="linktype">
                            <option value="audio">audio</option>
                            <option value="video">video</option>
                        </select>
                        file (for video type in the youtube video id, for audio only direct links allowed)
                        </label>
                        <input onChange={e => {this.props.onNewQuestionText(e)}} id="linktext" name="linktext" value={this.props.linktext}/>
                    </div>
                    { !this.props.submitDisabled ? <Link id="submitQuestion" onClick={() => {
                            this.props.addNewQuestion()                    
                        }}  className="myButton" to={{
                                        pathname:'/EditQuiz',
                                        state:{
                                            quiz: this.props.quizInfo,
                                            isNewQuiz: false
                                        } 
                                    }}>
                                        Submit
                        </Link> : <button className="myButton" disabled={this.props.submitDisabled}>Submit</button>
                        
                    }
                </div>
                
                
                
            </div>
        );
    }
}

export default AddQuestion;
