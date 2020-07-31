import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import parse from 'html-react-parser';
import './ResponseText.css';
import Submit from './../Submit/Submit';
import Next from './../Next/Next';
import { Link } from 'react-router-dom';



class ResponseText extends React.Component {

  makeResponseHtml = (responseString) => {
    let responseText = responseString
    
    let words = responseText.split(' ');
    let counter = 0;

    for(let i=0; i<words.length;i++){
      
      if(words[i][0] == "_"){

        counter++
        words[i] = `<input id="blank${counter}">`; 
      }
      
    }
    
    let responsehtml = words.join(' ')
    return responsehtml
  }  
  render(){
    const {submitted,isSubmitDisabled,isNextDisabled,submitAnswers,change,match,history,nextQuestion,isIncorrect,correct, incorrect,questions,formRef, quizInfo} = this.props;
    
    const question = questions.find(q =>
      q.id == match.params.questionId
      
    );
    

    return (
      <div className="quizbackground">
            <section className="question-screen">  
              <div className="background-img" style={{gridArea: 'header', border: '1px solid #ddd', paddingLeft: '30px', paddingRight: '30px'}}>
                <Link className="myButton" to="/">Take a different Quiz</Link>
                <h3 className="poc-convo-title">{quizInfo.quizname}</h3>
              <header className="question-info">
                <h3><span>Question {question.id} of {questions.length}</span></h3>
                <h5 className="score"><span>{correct} correct, {incorrect} incorrect</span></h5>
                <hr/>
              </header>
              <section className="response-area" style={{textAlign: 'center'}}>

                <div className="question-text"> 
                  <h3>{question.questiontext}</h3>
                </div>
                {
                  question.video === null ?
                      <div className="audio-player">
                      <ReactAudioPlayer
                      src={question.audio}
                      autoPlay
                      controls
                      />
                    </div> : <iframe width="420" height="315"
                src={'https://www.youtube.com/embed/'+ question.video} controls>
                </iframe>
                }
                
                <div className="response-box"  onChange={(event)=>{change(event,question.blanks)}}>
                  <form ref={formRef} autoComplete="off">
                {
                  parse(this.makeResponseHtml(question.responsetext))
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

              
                {!submitted ? <Submit question={question} submitAnswers={submitAnswers} isSubmitDisabled = {isSubmitDisabled}/> : <Next history={history} nextQuestion={nextQuestion} isNextDisabled = {isNextDisabled} totalQuestions={questions.length} question={question}/>}
              
              
              
            </section>
          </div>
        </section>
      </div>
      
    )
    
  }
}

export default ResponseText;

