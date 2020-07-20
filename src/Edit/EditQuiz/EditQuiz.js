import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EditQuiz extends Component {
    componentDidMount(){
        let quiz = this.props.location.state.quiz;
        this.props.setQuizInfo(quiz);
        this.props.setQuestions(quiz.id);

    }
    render() {

        return (
            <div>
                {/* <Link className="myButton" to="/">Edit Quiz</Link> */}
                <h3>Edit Quiz</h3>
                <div>
                    <label htmlFor="label">Quiz Name</label>
                    <input name="quiz name" value={this.props.quizInfo.quizname} />
                    <button className="myButton" onClick={this.props.onEditQuiz}></button>
                </div>
                <div>
                    <label htmlFor="description">Quiz Description</label>
                    <textarea name="quizDescription" value={this.props.quizInfo.quizdescription} />
                </div> 
                {this.props.questions.map((question, i ) => {
                    return <div key={`key${i}`}>
                                <Link to={{
                                    pathname:'/EditQuestion',
                                    state:{ 
                                        question: question
                                    } 
                                    }}>question {i + 1}
                                </Link>                        
                            </div>
                       
                    })}
                <Link className="myButton" to="/AddQuestion"> + Add Question</Link>
            </div>
        );
    }
}

export default EditQuiz;
