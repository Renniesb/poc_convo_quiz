import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EditQuestion extends Component {
    componentDidMount(){
        this.props.setQuestionInfo(this.props.location.state.question.id)
    }
    render() {
        return (
            <div className="editquizbackground">
                <div className="panel">
                    <Link id="backToEditQuiz" className="myButton" to={{
                                        pathname:'/EditQuiz',
                                        state:{
                                            quiz: this.props.quizInfo,
                                            isNewQuiz: false
                                        } 
                                    }}>
                                        Back
                    </Link> 
                    <h1>Edit Question</h1>
                   <div>
                   <select onChange={e => {this.props.onNewQuestionText(e)}} name="questiontype" id="questiontype" value={this.props.questiontype}>
                    <option value="fill in the blank">Fill in the blank</option>
                    <option value="multiple choice">Multiple choice</option>
                   </select>

                   </div>                 

                    <div>
                        <label htmlFor="topictext">Type the question topic text</label>
                        <input id="topictext" onChange={e => {this.props.onNewQuestionText(e)}} name="topictext" value={this.props.topictext} />
                    </div>
                    <div>
                        {this.props.location.state.question.questiontype === "fill in the blank" ? <label htmlFor="responsetext">Type in the response text with an underscore before and after each word that the user must fill in as a blank</label> : <label htmlFor="responsetext">Type in the choices as a comma separated list with a dash in front of the correct option</label>}
                        
                        <textarea id="responsetext" onChange={e => {this.props.onNewQuestionText(e)}} name="responsetext" value={this.props.responsetext} />
                    </div>
                    <div>
                        <label htmlFor="linktext">
                        Type in the link to your
                        <select onChange={e => {this.props.onNewQuestionText(e)}}name="linktype" id="linktype" value={this.props.linktype}>
                            <option value="audio">audio</option>
                            <option value="video">video</option>
                        </select>
                        file
                        </label>
                        <input onChange={e => {this.props.onNewQuestionText(e)}} id="linktext" name="linktext" value={this.props.linktext}/>
                    </div>
                
                    { !this.props.submitDisabled ? <Link id="editQuestion" onClick={() => {
                            this.props.onEditQuestion(this.props.location.state.question.id, this.props.location.state.question.questiontype)                    
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
                    
            </div>
        );
    }
}

export default EditQuestion;
