import React from 'react';
import ResponseText from './Response/ResponseText';
import StartQuiz from './StartQuiz/StartQuiz'
import EndQuiz from './EndQuiz/EndQuiz'
import { Route,Switch } from 'react-router-dom';
import questions from './questions.js';


class App extends React.Component {
  state = {
     questionNum:1,
     submitDisabled: true, 
     submitted: false,
     nextDisabled: true,
     isIncorrect: "",
     correct: 0,
     incorrect:0
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
        this.setState({isIncorrect: false, correct: this.state.correct + 1})

      }
      else{
        this.setState({isIncorrect: true, incorrect: this.state.incorrect + 1})
      }
      this.setState({submitted: true, nextDisabled:false});
  }
  handleNextQuestion = (history, totalQuestions)=>{
    if(this.state.questionNum == totalQuestions){
      history.push(`/EndQuiz` );
    }
    else {
      this.setState({questionNum:this.state.questionNum + 1, submitDisabled: true, nextDisabled:true,submitted:false,isIncorrect: null},()=>{
        history.push(`/question/${this.state.questionNum}` );
      });
    }  
  }
  handleNewQuiz = (history) => {
    this.setState({
      questionNum:1,
      submitDisabled: true, 
      submitted: false,
      nextDisabled: true,
      isIncorrect: "",
      correct: 0,
      incorrect:0})
      
    history.push('/');
  }

  render() { 
    return ( 
    <div className="App">
        <Switch>
          <Route
            path='/question/:questionId'
            render={({ 
              match,history 
          }) => (
              <ResponseText submitted={this.state.submitted} isSubmitDisabled={this.state.submitDisabled} isNextDisabled={this.state.nextDisabled} submitAnswers={(question)=>{this.handleSubmit(question)}} change={this.handleOnChange} match={match} history={history} nextQuestion={this.handleNextQuestion} isIncorrect={this.state.isIncorrect} correct={this.state.correct} incorrect={this.state.incorrect} questions={questions}/>
          )} 
          />
          <Route path="/EndQuiz" render={({history}) => (
            <EndQuiz correct={this.state.correct} incorrect={this.state.incorrect} questionTotal={questions.length} history={history} OnNewQuiz={this.handleNewQuiz}/>
          )} />
            
          <Route path="/">
            <StartQuiz />
          </Route>
        </Switch>
    </div>
   );
  }
}
 
export default App;
