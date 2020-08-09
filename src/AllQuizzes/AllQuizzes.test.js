import React from 'react';
import ReactDOM from 'react-dom';
import AllQuizzes from './AllQuizzes';
import { BrowserRouter } from 'react-router-dom';

const mockQuizzes = [{quizname: "Quiz 1", quizdescription: "the best quiz"},
{quizname: "Quiz 2", quizdescription: "another great quiz"}]

it('renders without crashing', () => {

    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><AllQuizzes quizzes={mockQuizzes}/></BrowserRouter>, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
});