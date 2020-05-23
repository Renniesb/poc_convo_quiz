import React from 'react';
import ResponseText from './Response/ResponseText';
import { Route } from 'react-router-dom';


class App extends React.Component {
  state = {questionNum:1, disabled: true }
  constructor(props){
    super(props)
  }
  handleOnChange = (e, blanks) => {
        
       let userValue = e.target.value
       console.log(userValue);

        this.setState({[e.target.name]:userValue},() => {
          let showSubmit = blanks.every((blank) => {
                 return this.state[blank] && this.state[blank].trim().length !== 0;
               })
         if(showSubmit){
           this.setState({disabled: false})
         }
         else{
           this.setState({disabled: true})
         }
        })
       
      
     
  }
  handleSubmit = (question)=> {
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
  handleNextQuestion = (history)=>{
    
    this.setState({questionNum:this.state.questionNum + 1, disabled: true},()=>{
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
              <ResponseText isDisabled={this.state.disabled} submitAnswers={(question)=>{this.handleSubmit(question)}} change={this.handleOnChange} match={match} history={history} nextQuestion={this.handleNextQuestion} />
          )} 
          />
    </div>
   );
  }
}
 
export default App;
