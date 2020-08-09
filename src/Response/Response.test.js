import React from 'react';
import ReactDOM from 'react-dom';
import ResponseText from './ResponseText';
import { BrowserRouter,Route } from 'react-router-dom';

it('renders without crashing', () => {

    const div = document.createElement('div');

    const mockQuestions = [{id:1}]
  
    ReactDOM.render(
    <BrowserRouter>
        <Route
            path='/question/:questionId'
            render={({ 
            match=1,history,location 
        }) => (
            <ResponseText questions={mockQuestions}/>
        )} 
        />
    </BrowserRouter>, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
});
