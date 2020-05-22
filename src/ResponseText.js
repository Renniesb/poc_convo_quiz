import React from 'react';
import questions from './questions.js';
import parse from 'html-react-parser';
import './ResponseText.css';



export default function ResponseText(props) {

    const question = questions.find(q =>
      q.id === props.match.params.questionId
    )
    return (
    
      <section className="question-screen">  
      <div style={{gridArea: 'header', border: '1px solid #ddd', padding: '30px'}}>
        <h4>POC Conversational Quiz</h4>
        <header className="question-info">
          <h3>Question 1 of 5</h3>
          <h5 className="score">0 correct, 0 incorrect</h5>
          <hr/>
          
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
          
        </header>
        <div style={{marginTop: "10px"}}
         className="feedback"></div>
        <div className="correct-answer"></div>
        <button onClick={() => {
          props.submitAnswers(question)          
        }} id="submit-answer" className="myButton">Submit answer</button>
        <button id="next" className="myButton" onClick={()=>{props.nextQuestion(props.history)}}>Next</button>
      </div>
    </section> );
}