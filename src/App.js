import React from 'react';
import ResponseText from './ResponseText';
import { Route } from 'react-router-dom';


class App extends React.Component {
  state = {inputs:[] }
  handleOnChange = e => {
     this.setState({[e.target.name]:e.target.value})
     console.log("target value")
  }
  handleSubmit(question){
      let userAnswer = ""
      question.blanks.forEach((blank) => {
         userAnswer += this.state[blank].trim().toLowerCase()
      })
      console.log(userAnswer);

      if(userAnswer===question.answers){
        console.log("correct");
      }
      else{
        console.log("incorrect")
      }
  }
  handleNextQuestion(history){
    history.push('/question/2')
  }
  render() { 
    return ( 
    <div className="App">
      <Route
            path='/question/:questionId'
            render={({ 
              match,history 
          }) => (
              <ResponseText submitAnswers={(question)=>{this.handleSubmit(question)}} change={this.handleOnChange} match={match} history={history} nextQuestion={this.handleNextQuestion} />
          )} 
          />
    </div>
   );
  }
}
 
export default App;
