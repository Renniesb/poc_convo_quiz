import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditQuizzes.css'

class EditQuizzes extends Component {
    componentDidMount(){
        this.props.setQuizzes()
    }
    render() {
        return (
            <div className="editquizbackground">
                <div className="panel">
                <Link className="myButton" to="/">Take a Quiz</Link>
                    <h1>Edit Quizzes</h1>
                    <div>
                        {this.props.quizzes.map((quiz,i) => {
                        return (
                            <div key={`key${i}`}>
                                
                                <Link className="quizlink" to={{
                                    pathname:'/EditQuiz',
                                    state:{ 
                                        quiz: quiz,
                                        isNewQuiz: false
                                    } 
                                }}>
                                    {quiz.quizname}
                                </Link>
                                <button onClick={e => {this.props.onDelete(e, quiz.id)}} id="deleteQuiz" name="deleteQuiz">Delete</button>
                            </div>
                        )
                        })}
                    </div>
                    <Link className="myButton" to="/AddQuiz"> + Add Quiz</Link>
                </div>
            </div>
        );
    }
}

export default EditQuizzes;
