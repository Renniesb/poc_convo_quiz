import React from 'react';
import ResponseText from './Response/ResponseText';
import { Route } from 'react-router-dom';


class App extends React.Component {
  state = {questionNum:1 }
  constructor(props){
    super(props)
  }
  handleOnChange = e => {
     this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = (question)=> {
      let userAnswer = ""


      question.blanks.forEach((blank) => {
        // var text = "   ";
        // text.trim().length == 0;
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
  handleNextQuestion = (history)=>{
    
    this.setState({questionNum:this.state.questionNum + 1},()=>{
      history.push(`/question/${this.state.questionNum}` );
    });
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
