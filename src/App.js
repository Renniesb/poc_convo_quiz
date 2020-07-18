import React, {createRef} from 'react';
import ResponseText from './Response/ResponseText';
import StartQuiz from './StartQuiz/StartQuiz'
import EndQuiz from './EndQuiz/EndQuiz'
import { Route,Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props)
    this.formRef = createRef();
  
    this.state = {
     questions: [],
     questionNum:1,
     currentBlanks: [],
     submitDisabled: true, 
     submitted: false,
     nextDisabled: true,
     isIncorrect: "",
     correct: 0,
     incorrect:0
     }
    }
  getBlanks = () => {
    let inputs = Array.from(this.formRef.current.children);
    let blanks = []
    for(let i=1;i<=inputs.length;i++){
      blanks.push("blank"+i);
    }
    this.setState({currentBlanks: blanks});
  }
  handleOnChange = (e) => {
        
       let userValue = e.target.value
       console.log(e.target.id);

        this.setState({[e.target.id]:userValue},() => {
          let showSubmit = this.state.currentBlanks.every((blank) => {
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
      this.state.currentBlanks.forEach((blank) => {
         userAnswer += this.state[blank].trim().toLowerCase()
         this.setState({[blank]:""})
         
      })
      

      if(userAnswer===question.answers){
        this.setState({isIncorrect: false, correct: this.state.correct + 1})

      }
      else{
        this.setState({isIncorrect: true, incorrect: this.state.incorrect + 1})
      }
      this.setState({submitted: true, nextDisabled:false});
  }
  handleNextQuestion = (history, totalQuestions)=>{
    let inputs = Array.from(this.formRef.current.children);
    for ( let i = 0; i < inputs.length; i++) {
      this.formRef.current[i].value = "";
    }
    console.log("total questions",totalQuestions);
    if(this.state.questionNum === totalQuestions){
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
  componentDidMount(){
    fetch(`http://localhost:8000/api/questions`)
      .then(response => response.json())
      .then(data =>{ 
        for(let i =0; i<data.length;i++){
          data[i].id = i+1;
        }
        this.setState({ questions: data })});
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
              <ResponseText getBlanks={this.getBlanks} submitted={this.state.submitted} isSubmitDisabled={this.state.submitDisabled} isNextDisabled={this.state.nextDisabled} submitAnswers={(question)=>{this.handleSubmit(question)}} change={this.handleOnChange} match={match} history={history} nextQuestion={this.handleNextQuestion} isIncorrect={this.state.isIncorrect} correct={this.state.correct} incorrect={this.state.incorrect} questions={this.state.questions} formRef={this.formRef}/>
          )} 
          />
          <Route path="/EndQuiz" render={({history}) => (
            <EndQuiz correct={this.state.correct} incorrect={this.state.incorrect} questionTotal={this.state.questions.length} history={history} OnNewQuiz={this.handleNewQuiz}/>
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
