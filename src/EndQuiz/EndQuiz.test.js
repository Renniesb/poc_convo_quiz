import React from 'react';
import ReactDOM from 'react-dom';
import EndQuiz from './EndQuiz';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {

    const quizInfo = {quizname: "the first quiz"}

    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><EndQuiz quizInfo={quizInfo} /></BrowserRouter>, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
});