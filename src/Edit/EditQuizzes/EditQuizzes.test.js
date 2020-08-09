import React from 'react';
import ReactDOM from 'react-dom';
import EditQuizzes from './EditQuizzes';
import { BrowserRouter } from 'react-router-dom';

const mockprops = {
    quizzes: [{id: 1 , quizName: "quiz1"}, {id: 2 , quizName: "quiz2"}],
    
    setQuizzes: function(){

    },
    onDelete: function(event,id){

    }
}

it('renders without crashing', () => {

    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><EditQuizzes {...mockprops} /></BrowserRouter>, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
});
