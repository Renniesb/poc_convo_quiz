import React from 'react';
import questions from './questions.js';
import parse from 'html-react-parser';
import './ResponseText.css';



export default function ResponseText(props) {

    const question = questions.find(q =>
      q.id === props.match.params.questionId
    )
    return (
    
      <section class="question-screen">  
      <div style={{gridArea: 'header', border: '1px solid #ddd', padding: '30px'}}>
        <h4>POC Conversational Quiz</h4>
        <header class="question-info">
          <h3>Question 1 of 5</h3>
          <h5 class="score">0 correct, 0 incorrect</h5>
          <hr/>
        <p>
        {
          parse(question.responseText, {
            replace: domNode => {
              if (domNode.name === 'input') {
                return (
                  <input {...domNode.attribs} onChange={props.change}/>
                );
              }   
            }   
          })
        }
        </p>
        </header>
        <div style={{marginTop: "10px"}}
         className="feedback"></div>
        <div className="correct-answer"></div>
        <button id="submit-answer" className="myButton">Submit answer</button>
        <button id="next" className="myButton">Next</button>
      </div>
      
    </section> );
}