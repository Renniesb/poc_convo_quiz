import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import parse from 'html-react-parser';
import './ResponseText.css';
import Submit from './../Submit/Submit';
import Next from './../Next/Next';






export default function ResponseText({submitted,isSubmitDisabled,isNextDisabled,submitAnswers,change,match,history,nextQuestion,isIncorrect,correct, incorrect,questions,formRef}) {

    const question = questions.find(q =>
      q.id === match.params.questionId
    )
        
    return (
    
    <section className="question-screen">  
      <div className="background-img" style={{gridArea: 'header', border: '1px solid #ddd', padding: '30px'}}>
        <h3 className="poc-convo-title">POC Conversational Quiz</h3>
        <header className="question-info">
          <h3><span>Question {question.id} of {questions.length}</span></h3>
          <h5 className="score"><span>{correct} correct, {incorrect} incorrect</span></h5>
          <hr/>
        </header>
        <section className="response-area">

          <div className="question-text"> 
            <h3>{question.questionText}</h3>
          </div>
          <div className="audio-player">
            <ReactAudioPlayer
            src={question.audioLink}
            autoPlay
            controls
            />
          </div>            
           
          <div className="response-box"  onChange={(event)=>{change(event,question.blanks)}}>
            <form ref={formRef} autoComplete="off">
          {
            parse(question.responseText)
            }
            </form>
          </div>
            
          
          <div style={{marginTop: "10px"}}
          className="feedback">
            {
              isIncorrect=== true && parse(question.incorrectText)
            }
            {
              isIncorrect=== false && <span className="correct">Correct</span>
            }
          </div>

          
          {!submitted && <Submit question={question} submitAnswers={submitAnswers} isSubmitDisabled = {isSubmitDisabled}/>}
          <Next history={history} nextQuestion={nextQuestion} isNextDisabled = {isNextDisabled} totalQuestions={questions.length} question={question}/>
          
          
        </section>
      </div>
    </section> );
}