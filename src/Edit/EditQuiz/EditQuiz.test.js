import React from 'react';
import ReactDOM from 'react-dom';
import EditQuiz from './EditQuiz';
import { BrowserRouter } from 'react-router-dom';

const mockprops = {
    questions: ["question1","question2"],
    location: {
        state:{
        quiz: {id: 12, name: "question1"}
    }},
    onNewQuestionText: function(){

    },
    setQuizInfo: function(quiz){

    },
    setQuestionInfo: function(id){

    },
    onDelete: function(event,id){

    },
    setQuestions: function(quizNum, editingMode = false){

    }
}

it('renders without crashing', () => {

    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><EditQuiz {...mockprops}/></BrowserRouter>, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
});
