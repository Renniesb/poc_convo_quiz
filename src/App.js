import React, {createRef} from 'react';
import ResponseText from './Response/ResponseText';
import StartQuiz from './StartQuiz/StartQuiz'
import EndQuiz from './EndQuiz/EndQuiz'
import { Route,Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AllQuizzes from './AllQuizzes/AllQuizzes';
import EditQuizzes from './Edit/EditQuizzes/EditQuizzes';
import AddQuiz from './Edit/AddQuiz/AddQuiz';
import EditQuiz from './Edit/EditQuiz/EditQuiz';
import AddQuestion from './Edit/AddQuestion/AddQuestion';
import EditQuestion from './Edit/EditQuestion/EditQuestion';



class App extends React.Component {
  constructor(props){
    super(props)
    this.formRef = createRef();
  
    this.state = {
     questions: [],
     quizInfo: [],
     quizzes: [],
     currentBlanks: [],
     submitDisabled: true, 
     submitted: false,
     nextDisabled: true,
     isIncorrect: "",
     correct: 0,
     incorrect:0
     }
    }
  setQuizzes = () => {
    fetch(`http://localhost:8000/api/quiz`)
      .then(response => response.json())
      .then(data =>{ 
        this.setState({ quizzes: data })}
      )
  }
  setQuizInfo = (quiz) => {
    this.setState({quizInfo: quiz})
  }
  setQuestions = (quizNum) => {
    fetch(`http://localhost:8000/api/quiz/${quizNum}/questions`)
            .then(response => response.json())
            .then(data =>{ 
                for(let i =0; i<data.length;i++){
                data[i].id = i+1;
                }
                this.setState({questions: data})
            });
                
  }
  setBlanks = () => {
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

       this.setBlanks();

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
      
      console.log("user answer", userAnswer)
      console.log("answer",question.answers)
      if(userAnswer===question.answers){
        this.setState({isIncorrect: false, correct: this.state.correct + 1})

      }
      else{
        this.setState({isIncorrect: true, incorrect: this.state.incorrect + 1})
      }
      this.setState({submitted: true, nextDisabled:false});
  }
  handleNextQuestion = (history, question, totalQuestions)=>{
    let inputs = Array.from(this.formRef.current.children);
    for ( let i = 0; i < inputs.length; i++) {
      this.formRef.current[i].value = "";
    }
    console.log("total questions",totalQuestions);
    if(question.id === totalQuestions){
      history.push(`/EndQuiz` );
    }
    else {
      this.setState({submitDisabled: true, nextDisabled:true,submitted:false,isIncorrect: null},()=>{
        history.push(`/question/${question.id +1}` );
      });
    }  
    
  }
  handleNewQuiz = () => {
    this.setState({
      submitDisabled: true, 
      submitted: false,
      nextDisabled: true,
      isIncorrect: "",
      correct: 0,
      incorrect:0})
  }
  componentDidMount(){
    this.setQuizzes()
  }
  render() { 
    return ( 
    <div className="App">
      <div style={{display: "flex", justifyContent: "space-between"}}>
      <Link className="myButton" to="/">See all Quizzes</Link>
      <Link className="myButton"  to="/EditQuizzes">Edit Quizzes</Link>
      </div>
        <Switch>
          <Route
            path='/question/:questionId'
            render={({ 
              match,history,location 
          }) => (
              <ResponseText quizInfo={this.state.quizInfo} setBlanks={this.setBlanks} submitted={this.state.submitted} isSubmitDisabled={this.state.submitDisabled} isNextDisabled={this.state.nextDisabled} submitAnswers={(question)=>{this.handleSubmit(question)}} change={this.handleOnChange} location={location} match={match} history={history} nextQuestion={this.handleNextQuestion} isIncorrect={this.state.isIncorrect} correct={this.state.correct} incorrect={this.state.incorrect} questions={this.state.questions} formRef={this.formRef}/>
          )} 
          />
          <Route path="/EndQuiz" render={({history,location}) => (
            <EndQuiz quizInfo={this.state.quizInfo} correct={this.state.correct} incorrect={this.state.incorrect} questionTotal={this.state.questions.length} location={location} history={history} OnNewQuiz={this.handleNewQuiz}/>
          )} />
          <Route path="/StartQuiz" render={routeProps=><StartQuiz {...routeProps} setQuizInfo={this.setQuizInfo} quizInfo={this.state.quizInfo} setQuestions={this.setQuestions} />} />
          
          <Route path="/EditQuizzes">
            <EditQuizzes setQuizzes={this.setQuizzes} quizzes={this.state.quizzes}/>
          </Route>
          <Route path="/AddQuiz">
            <AddQuiz />
          </Route>

          <Route path="/EditQuiz" render={routeProps=><EditQuiz {...routeProps} setQuizInfo={this.setQuizInfo} quizInfo={this.state.quizInfo} setQuestions={this.setQuestions} questions={this.state.questions} />} />

          <Route path="/AddQuestion">
            <AddQuestion />
          </Route>  
          <Route path="/EditQuestion">
            <EditQuestion />
          </Route>
          <Route path="/">
            <AllQuizzes onNewQuiz={this.handleNewQuiz} quizzes={this.state.quizzes} />
          </Route>
        </Switch>
    </div>
   );
  }
}
 
export default App;
