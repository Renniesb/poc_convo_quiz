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
      const startIndex = words[i].indexOf("_")
      let endIndex = 0
      let beforeBlank = ''
      let endOfStringIndex = words[i].length - 1
      let afterBlank = ''
      
      
      if(startIndex > -1){
        endIndex = words[i].lastIndexOf("_")
        if(startIndex !== 0){
          beforeBlank = words[i].substring(0,startIndex);
        }
        if(words[i][endOfStringIndex] !== "_"){
          afterBlank = words[i].substring(endIndex+1, endOfStringIndex+1)
        }

   

        counter++
        words[i] = `${beforeBlank}<input id="blank${counter}">${afterBlank}`; 
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
                  question.linktype === 'audio' ?
                      <div className="audio-player">
                      <ReactAudioPlayer
                      src={question.link}
                      autoPlay
                      controls
                      />
                    </div> : <iframe title="myvideo" width="420" height="315"
                src={'https://www.youtube.com/embed/'+ question.link} controls>
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

