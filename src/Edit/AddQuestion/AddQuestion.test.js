import React from 'react';
import ReactDOM from 'react-dom';
import AddQuestion from './AddQuestion';
import { BrowserRouter } from 'react-router-dom';

const mockprops = {
    topictext: "",
    responsetext: "",   
    quizInfo: [],   
    submitDisabled: true,
    onNewQuestion: function(){

    },
    addNewQuestion: function(){

    }    
}


it('renders without crashing', () => {

    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><AddQuestion {...mockprops} /></BrowserRouter>, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
});
