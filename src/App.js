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
     topictext: "",
     responsetext: "",
     linktype: "audio",
     linktext: "",
     correcthtml: "",
     answers: "",
     questions: [],
     questionId: 0, 
     quizInfo: [],
     quizName: "",
     quizDescription: "",
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
  handleEditQuiz = () => {
    const data = {
      quizname: this.state.quizName,
      quizdescription:this.state.quizDescription,
    }
    fetch(`http://localhost:8000/api/quiz/${this.state.quizInfo.id}`, {
      method: 'PATCH', 
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
  handleEditQuestion = (id) => {
    this.answerText(id)
    
  }
  postInfo = () => {
    const data = { 
      questiontext: this.state.topictext,
      responsetext: this.state.responsetext,
      correcttext: this.state.correcthtml,
      answers: this.state.answers,
      quiznum: this.state.quizInfo.id
    };

    const linktext = this.state.linktext;
    if(this.state.linktype == "audio"){
      data.audio = linktext;
    } else {
      data.video = linktext;
    }

    fetch(`http://localhost:8000/api/questions`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  patchInfo = (id) => {
    const data = { 
      questiontext: this.state.topictext,
      responsetext: this.state.responsetext,
      correcttext: this.state.correcthtml,
      answers: this.state.answers,
    }

    if(this.state.linktype === "audio"){
      data.audio = this.state.linktext
    }else {
      data.video = this.state.linktext
    }
    console.log('edit question', data)
    fetch(`http://localhost:8000/api/questions/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  answerText = (id) => {
    let responseText = this.state.responsetext;
    let words = responseText.split(' ');
    let answers=""

    let correcttext = words.map((word)=>{
      if(word[0] == "_"){
    
        return `<u>${word.replace(/_/g, '')}</u>`
        
      }
      return word
    }).join(' ')

    
    
    let correcthtml = `<span class="incorrect">Incorrect</span><div class="correct-answer">Correct Answer: ${correcttext}</div>`

    for(let i=0; i<words.length;i++){
      
      if(words[i][0] == "_"){
        answers = answers + words[i].replace(/_/g, '').toLowerCase()
        
      }
      
    }
    this.setState({correcthtml: correcthtml, answers: answers},() => {
      this.patchInfo(id)
    })
  }
  handleInfoSubmit = (event) => {
    this.answerText()   
    
    this.setState({submitDisabled: true});
    this.setState({topictext: "", responsetext: "", linktext: ""})
    
  }
  handleNewQuestionText = event => {
    
    this.setState({[event.target.id]: event.target.value})
    
    if(event.target.id == "topictext" || event.target.id == "responsetext" || event.target.id == "linktext" ){
      this.setState({ [event.target.id]: event.target.value },() => {
        const allFields = ["topictext","responsetext","linktext"]
        let showSubmit = allFields.every((field) => {
               return this.state[field].trim().length !== 0;
             })
            if(showSubmit){
              this.setState({submitDisabled: false})
            }
            else{
              this.setState({submitDisabled: true})
            }
      })    
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
    this.setState({quizInfo: quiz, quizDescription: quiz.quizdescription, quizName: quiz.quizname})
  }
  setQuestionInfo = (question) => {

    let linktype = ""
    let link = ""
    if(question.audio===null){
      linktype = "video"
    } else {
      linktype = "audio"
    }
    if(linktype === "audio"){
      link = question.audio
    }else{
      link = question.video
    }
    this.setState({topictext: question.questiontext, responsetext: question.responsetext, linktype: linktype, linktext: link, questionId: question.id })
  }
  setQuestions = (quizNum, editingMode = false) => {

    if(editingMode){
      fetch(`http://localhost:8000/api/quiz/${quizNum}/questions`)
      .then(response => response.json())
      .then(data =>{ 
          this.setState({questions: data})
      });
    } else {
      fetch(`http://localhost:8000/api/quiz/${quizNum}/questions`)
      .then(response => response.json())
      .then(data =>{ 
          for(let i =0; i<data.length;i++){
          data[i].id = i+1;
          }
          this.setState({questions: data})
      });
    }
    
                
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
  delete = (event,id,quizid) => {
  
    if(event.target.id == "deleteQuiz"){
      fetch(`http://localhost:8000/api/quiz/${id}`, {
        method: 'DELETE', 
      })
      this.setQuizzes()
    }else if(event.target.id == "deleteQuestion") {
      fetch(`http://localhost:8000/api/questions/${id}`, {
        method: 'DELETE', 
      })
      this.setQuestions(quizid, true)
    }
  }
  addNewQuiz = () => {
    const data = {
      quizname: this.state.quizName,
      quizdescription: this.state.quizDescription
    }
    fetch(`http://localhost:8000/api/quiz`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.text())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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
  handleAddNewQuiz = () => {
    this.setState({
      quizName: "",
      quizDescription: ""
    })
  }
  handleNewQuestion = () => {
    this.setState({
      submitDisabled: true,
      topictext: "",
      responsetext: "",
      linktext: ""

    })
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
            <EditQuizzes setQuizzes={this.setQuizzes} quizzes={this.state.quizzes} onDelete={this.delete}/>
          </Route>
          <Route path="/AddQuiz">
            <AddQuiz quizDescription={this.state.quizDescription} quizName = {this.state.quizName} onNewQuestionText={this.handleNewQuestionText} handleAddNewQuiz={this.handleAddNewQuiz} addNewQuiz={this.addNewQuiz}  />
          </Route>

          <Route path="/EditQuiz" render={routeProps=><EditQuiz {...routeProps} setQuizInfo={this.setQuizInfo} quizDescription={this.state.quizDescription} quizName = {this.state.quizName} quizInfo={this.state.quizInfo} setQuestions={this.setQuestions} questions={this.state.questions} onNewQuestionText={this.handleNewQuestionText} onEditQuiz={this.handleEditQuiz} onDelete={this.delete} />} />
          
          <Route path="/AddQuestion" render={routeProps=><AddQuestion {...routeProps} onNewQuestion={this.handleNewQuestion} onInfoSubmit={this.handleInfoSubmit} submitDisabled={this.state.submitDisabled} quizInfo={this.state.quizInfo} onNewQuestionText={this.handleNewQuestionText} linktype={this.state.linktype} responsetext={this.state.responsetext}topictext={this.state.topictext} linktext={this.state.linktext} />}  />
          <Route path="/EditQuestion" render={routeProps=> <EditQuestion {...routeProps} topictext={this.state.topictext} quizInfo={this.state.quizInfo}
     responsetext={this.state.responsetext} linktype={this.state.linktype} linktext={this.state.linktext} onNewQuestionText={this.handleNewQuestionText} setQuestionInfo={this.setQuestionInfo} questionId={this.state.questionId} onEditQuestion={this.handleEditQuestion} />}>
            
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
