import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditQuizzes extends Component {
    componentDidMount(){
        this.props.setQuizzes()
    }
    render() {
        return (
            <div>
                <h1>Edit Quizzes</h1>
                <div>
                    {this.props.quizzes.map((quiz,i) => {
                    return (
                        <div key={`key${i}`}>
                            
                            <Link to={{
                                pathname:'/EditQuiz',
                                state:{ 
                                    quiz: quiz
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
        );
    }
}

export default EditQuizzes;
