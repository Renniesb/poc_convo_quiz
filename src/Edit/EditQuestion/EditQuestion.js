import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EditQuestion extends Component {
    componentDidMount(){
        console.log(this.props.location.state.question)
        this.props.setQuestionInfo(this.props.location.state.question)
    }
    render() {
        return (
            <div>
                {/* <Link className="myButton" to="/">Edit Quiz</Link> */}
                <h1>Edit Question</h1>
                <div>
                    <label htmlFor="topictext">Type the question topic text</label>
                    <input id="topictext" onChange={e => {this.props.onNewQuestionText(e)}} name="topictext" value={this.props.topictext} />
                </div>
                <div>
                    <label htmlFor="responsetext">Type in the response text with an underscore before and after each word that the user must fill in as a blank</label>
                    <textarea id="responsetext" onChange={e => {this.props.onNewQuestionText(e)}} name="responsetext" value={this.props.responsetext} />
                </div>
                <div>
                    <label htmlFor="linktext">
                    Type in the link to your
                    <select value={this.props.linktype} onChange={e => {this.props.onNewQuestionText(e)}}name="linktype" id="linktype" value={this.props.linktype}>
                        <option value="audio">audio</option>
                        <option value="video">video</option>
                    </select>
                    file
                    </label>
                    <input onChange={e => {this.props.onNewQuestionText(e)}} id="linktext" name="linktext" value={this.props.linktext}/>
                </div>
                <Link id="editQuestion" onClick={() => {
                        this.props.onEditQuestion(this.props.questionId)                    
                    }}  className="myButton" to={{
                                    pathname:'/EditQuiz',
                                    state:{
                                        quiz: this.props.quizInfo
                                    } 
                                }}>
                                    Submit
                </Link>
                    
            </div>
        );
    }
}

export default EditQuestion;
