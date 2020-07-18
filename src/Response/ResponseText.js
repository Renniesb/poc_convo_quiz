import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import parse from 'html-react-parser';
import './ResponseText.css';
import Submit from './../Submit/Submit';
import Next from './../Next/Next';



class ResponseText extends React.Component {
  componentDidMount(){
    this.props.getBlanks()
  }
  render(){
    const {submitted,isSubmitDisabled,isNextDisabled,submitAnswers,change,match,history,nextQuestion,isIncorrect,correct, incorrect,questions,formRef} = this.props;
    
    const question = questions.find(q =>
      q.id == match.params.questionId
      
    );
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
            src="https://www.bluecircle.foundation/s3/uploads/fad8beb5-3374-4e7b-8efb-4c4157771e7c_family1.mp3"
            autoPlay
            controls
            />
          </div>            
           
          <div className="response-box"  onChange={(event)=>{change(event,question.blanks)}}>
            <form ref={formRef} autoComplete="off">
          {
            parse(question.responsetext)
            }
            </form>
          </div>
            
          
          <div style={{marginTop: "10px"}}
          className="feedback">
            {
              isIncorrect=== true && parse(question.correcttext)
            }
            {
              isIncorrect=== false && <span className="correct">Correct</span>
            }
          </div>

          
          {!submitted && <Submit question={question} submitAnswers={submitAnswers} isSubmitDisabled = {isSubmitDisabled}/>}
          <Next history={history} nextQuestion={nextQuestion} isNextDisabled = {isNextDisabled} totalQuestions={questions.length} question={question}/>
          
          
        </section>
      </div>
    </section>
    )
    
  }
}

export default ResponseText;

