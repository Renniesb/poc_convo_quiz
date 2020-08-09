import React from 'react';
import ReactDOM from 'react-dom';
import StartQuiz from './StartQuiz';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    
    const mockQuizInfo = {quizname: "best quiz"}
    const mockLocation={state:{
        quiz: {id: 12, name: "quiz1"}
    }} 
    function setQuizInfo(quiz){

    }
    function setQuestions(id){
        
    }
    

    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><StartQuiz quizInfo={mockQuizInfo} location={mockLocation} setQuizInfo={setQuizInfo} setQuestions={setQuestions} /></BrowserRouter>, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
});
