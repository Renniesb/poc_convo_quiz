import React from 'react';
import questions from '../questions.js';
import parse from 'html-react-parser';
import './ResponseText.css';
import Submit from './../Submit/Submit';
import Next from './../Next/Next'



export default function ResponseText(props) {

    const question = questions.find(q =>
      q.id === props.match.params.questionId
    )
    return (
    
    <section className="question-screen">  
      <div className="background-img" style={{gridArea: 'header', border: '1px solid #ddd', padding: '30px'}}>
        <h4>POC Conversational Quiz</h4>
        <header className="question-info">
          <h3>Question 1 of 5</h3>
          <h5 className="score">0 correct, 0 incorrect</h5>
          <hr/>
          
          
        </header>
          
        <section className="response-area">
          <p>
          {
              parse(question.responseText, {
                replace: domNode => {
                  if (domNode.name === 'input') {
                    return (
                      <input {...domNode.attribs} onChange={(event)=>{
                        props.change(event,question.blanks)
                      }}/>
                    );
                  }   
                }   
              })
            }
          </p>
          <div style={{marginTop: "10px"}}
          className="feedback"></div>

          <div className="correct-answer"></div>
          <Submit question={question}submitAnswers={props.submitAnswers} isDisabled = {props.isDisabled}/>
          <Next history={props.history} nextQuestion={props.nextQuestion}/>
        </section>
      </div>
    </section> );
}