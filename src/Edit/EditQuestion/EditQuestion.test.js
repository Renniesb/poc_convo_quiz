import React from 'react';
import ReactDOM from 'react-dom';
import EditQuestion from './EditQuestion';
import { BrowserRouter } from 'react-router-dom';


const mockprops = {
    location: {
        state:{
        question: {id: 12, name: "question1"}
    }},
    onNewQuestionText: function(){

    },
    setQuestionInfo: function(){

    }    
}


it('renders without crashing', () => {

    const div = document.createElement('div');
  
    ReactDOM.render(<BrowserRouter><EditQuestion {...mockprops}  /></BrowserRouter>, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
});
