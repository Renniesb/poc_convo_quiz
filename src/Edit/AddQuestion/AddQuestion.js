import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AddQuestion extends Component {
    componentDidMount(){
        this.props.onNewQuestion()
    }
    render() {
        return (
            <div>
                <h1>Add Question</h1>
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
                    file
                    </label>
                    <input onChange={e => {this.props.onNewQuestionText(e)}} id="linktext" name="linktext" value={this.props.linktext}/>
                </div>
                { !this.props.submitDisabled ? <Link id="submitQuestion" onClick={(e) => {
                        this.props.onInfoSubmit(e)                    
                    }}  className="myButton" to={{
                                    pathname:'/EditQuiz',
                                    state:{
                                        quiz: this.props.quizInfo
                                    } 
                                }}>
                                    Submit
                    </Link> : <button className="myButton" disabled={this.props.submitDisabled}>Submit</button>
                    
                }
                
                
            </div>
        );
    }
}

export default AddQuestion;
