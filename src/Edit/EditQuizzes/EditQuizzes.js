import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditQuizzes.css'
import { authpack } from '../../index.js'

class EditQuizzes extends Component {
    componentDidMount(){
        this.props.setQuizzes()
        this.unlisten = authpack.listen(state => {
            
            if (!state.user) {
                authpack.open()
            }
            if(state.user){
                if(state.user.email!="pocconversational@gmail.com"){
                    authpack.exit()
                }
            }
            
            
        })

    }
    componentWillUnmount(){
        this.unlisten()
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
