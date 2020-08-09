import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const mockQuiz = {quizname: "Rennie quiz", quizdescription: "best quiz"}

    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><Quiz quiz={mockQuiz} /></BrowserRouter>, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
});
