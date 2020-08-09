import React from 'react';
import ReactDOM from 'react-dom';
import AddQuiz from './AddQuiz';
import { BrowserRouter } from 'react-router-dom';

const mockprops = {
    
    onNewQuestionText: function(){

    },
    addNewQuiz: function(){

    }    
}


it('renders without crashing', () => {


    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><AddQuiz {...mockprops} /></BrowserRouter>, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
});
