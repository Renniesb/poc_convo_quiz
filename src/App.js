import React from 'react';
import ResponseText from './Response/ResponseText';
import { Route } from 'react-router-dom';


class App extends React.Component {
  state = {questionNum:1, submitDisabled: true, submitted: false, nextDisabled: true }
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
           this.setState({submitDisabled: false})
         }
         else{
           this.setState({submitDisabled: true})
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
      this.setState({submitted: true, nextDisabled:false});
  }
  handleNextQuestion = (history)=>{
    
    this.setState({questionNum:this.state.questionNum + 1, submitDisabled: true, nextDisabled:true,submitted:false},()=>{
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
              <ResponseText submitted={this.state.submitted} isSubmitDisabled={this.state.submitDisabled} isNextDisabled={this.state.nextDisabled} submitAnswers={(question)=>{this.handleSubmit(question)}} change={this.handleOnChange} match={match} history={history} nextQuestion={this.handleNextQuestion} />
          )} 
          />
    </div>
   );
  }
}
 
export default App;
