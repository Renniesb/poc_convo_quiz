import React, {useEffect}  from 'react';
import { Link } from 'react-router-dom';
import './EditQuizzes.css'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router-dom';


const EditQuizzes = ({setQuizzes,quizzes,onDelete,})=>{

    let history = useHistory();
    const {  user } = useAuth0();
    useEffect(() =>{
        setQuizzes()
        if (user.sub !== "auth0|60a04609966070006aa00eb4") {
            history.push('/')
        }
    }, [user])
    
    return (
        <div className="editquizbackground">
            <div className="panel">
            <Link className="myButton" to="/">Take a Quiz</Link>
                <h1>Edit Quizzes</h1>
                <div>
                    {quizzes.map((quiz,i) => {
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
                            <button onClick={e => {onDelete(e, quiz.id)}} id="deleteQuiz" name="deleteQuiz">Delete</button>
                        </div>
                    )
                    })}
                </div>
                <Link className="myButton" to="/AddQuiz"> + Add Quiz</Link>
            </div>
        </div>
    );


}

export default withAuthenticationRequired(EditQuizzes, {
    onRedirecting: () => <ReactLoading/>,
});
