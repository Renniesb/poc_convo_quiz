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
     newQuizName: "",
     newQuizDescription: "",
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
    .then((response) =>
    {
     if( response.status === 204){
       const quizzes = this.state.quizzes
       const newQuizzes = quizzes.map((quiz) => {
          if(quiz.id === this.state.quizInfo.id){
                 quiz.quizname = data.quizname 
                 quiz.quizdescription = data.quizdescription      
          }
          return quiz
       })
      

       this.setState({quizzes: newQuizzes })
     }
    }
    )
    .then(data=> console.log(data))  
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
  handleEditQuestion = (id) => {
    let responseText = this.state.responsetext;
    let words = responseText.split(' ');
    let answers=""

    let correcttext = words.map((word)=>{
      const startIndex = word.indexOf("_")    
      const endIndex = word.lastIndexOf("_")
    if(startIndex > -1 && startIndex != endIndex){
        word[startIndex].replace(/_/g, '')
        word[endIndex].replace(/_/g, '')
        return `<u>${word.replace(/_/g, ' ')}</u>`
        
    }
    return word
    }).join(' ')

    let correcthtml = `<span class="incorrect">Incorrect</span><div class="correct-answer">Correct Answer: ${correcttext}</div>`

    for(let i=0; i<words.length;i++){
    
          const startIndex = words[i].indexOf("_")    
          const endIndex = words[i].lastIndexOf("_")
          let answer = ""


          if(startIndex > -1 && startIndex != endIndex){
            answer = words[i].substring(startIndex+1, endIndex)
              answers = answers + answer.replace(/_/g, ' ').toLowerCase()
              
          }
    
    }
    const data = { 
        questiontext: this.state.topictext,
        responsetext: this.state.responsetext,
        correcttext: correcthtml,
        answers: answers,
      }
  
      if(this.state.linktype === "audio"){
        data.audio = this.state.linktext
        data.video= null
      }else {
        data.video = this.state.linktext
        data.audio = null
      }
      fetch(`http://localhost:8000/api/questions/${this.state.questionId}`, {
        method: 'PATCH', 
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data),
      })
      .then(response => {
        if(response.status == 204){
          const questions = this.state.questions
          const newQuestions = questions.map((question) => {
            if(question.id === id){
              question.questiontext = data.questiontext
              question.responsetext = data.responsetext
              question.correcttext = data.correcttext
              question.audio = data.audio
              question.video= data.video
              question.answers = data.answers

            }
            return question
          })
          this.setState({questions: newQuestions, submitDisabled: true})
        }
      
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
  }
  
  addNewQuestion = () => {

    console.log("component did unmount")
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

          const startIndex = words[i].indexOf("_")
          let answer = ""
          const endIndex = words[i].lastIndexOf("_")

                      
          console.log("end index",endIndex)
          console.log("start index",startIndex)

            if(startIndex > -1 && startIndex != endIndex){              
              answer = words[i].substring(startIndex+1, endIndex)
                answers = answers + answer.toLowerCase()
                
            }
        
        }
        const data = { 
            questiontext: this.state.topictext,
            responsetext: this.state.responsetext,
            correcttext: correcthtml,
            answers: answers,
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
            this.setState({questions: [...this.state.questions, data ] , submitDisabled: true})
          })
          .catch((error) => { 
            console.error('Error:', error);
          });
  }
  
  handleInfoSubmit = () => {
     
    this.setState({submitDisabled: true});
    console.log('submit disabled')
    
  }
  handleNewQuestionText = event => {
    
    this.setState({[event.target.id]: event.target.value})
    
    if(event.target.id == "linktype" || event.target.id == "topictext" || event.target.id == "responsetext" || event.target.id == "linktext" ){
      this.setState({ [event.target.id]: event.target.value },() => {
        const allFields = ["topictext","responsetext","linktext"]
        let showSubmit = allFields.every((field) => {
              if(this.state[field] != null){
                return this.state[field].trim().length !== 0;
              }
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
  setQuestionInfo = (id) => {
    
    fetch(`http://localhost:8000/api/questions/${id}`)
      .then(response => response.json())
      .then(data =>{ 
        let linktype = ""
        let link = ""
        if(data.audio==null){
          linktype = "video"
        } else {
          linktype = "audio"
        }
        if(linktype === "audio"){
          link = data.audio
        }else{
          link = data.video
        }
        this.setState({topictext: data.questiontext, responsetext: data.responsetext, linktype: linktype, linktext: link, questionId: data.id })
      });
    
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
  delete = (event,id) => {
  
    if(event.target.id == "deleteQuiz"){
      fetch(`http://localhost:8000/api/quiz/${id}`, {
        method: 'DELETE', 
      })
      .then(response => {
        if(response.status===204){
          const quizzes = this.state.quizzes
          const filteredquizzes = quizzes.filter(quiz => {
            return quiz.id != id
          })
          console.log(id, filteredquizzes)
          this.setState({quizzes: filteredquizzes})
        }

      } )
      
      this.setQuizzes()
    }else if(event.target.id == "deleteQuestion") {
      fetch(`http://localhost:8000/api/questions/${id}`, {
        method: 'DELETE', 
      })
      .then(response => {
        if(response.status===204){
          const questions = this.state.questions
          const filteredquestions = questions.filter(question => {
            return question.id != id
          })
          console.log(id, filteredquestions)
          this.setState({questions: filteredquestions}) 
        }
      })
    }
  }
  addNewQuiz = () => {
    const data = {
      quizname: this.state.newQuizName,
      quizdescription: this.state.newQuizDescription
    }
    fetch(`http://localhost:8000/api/quiz`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("successful", data.id)
      this.setState({quizInfo: data, quizDescription: data.quizdescription, quizName: data.quizname, newQuizName: "", newQuizDescription: ""},()=>{
        this.setQuestions(this.state.quizInfo.id, true)
      })
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
  handleAddNewQuizInfo = () => {
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
    console.log('current blanks',this.state.currentBlanks);
    
    this.setState({
      submitDisabled: true, 
      submitted: false,
      nextDisabled: true,
      isIncorrect: "",
      correct: 0,
      incorrect:0},()=>{
        this.state.currentBlanks.forEach((blank)=>{
          this.setState({[blank]: ""});
        })
      })
  }
  componentDidMount(){
    this.setQuizzes()
  }
  render() {
    console.log(this.state.quizzes) 
    return ( 
    <div className="App">
      
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
          <Route path="/StartQuiz" render={routeProps=><StartQuiz {...routeProps} setQuizInfo={this.setQuizInfo} quizInfo={this.state.quizInfo} setQuestions={this.setQuestions} OnNewQuiz={this.handleNewQuiz} />} />
          
          <Route path="/EditQuizzes">
            <EditQuizzes setQuizzes={this.setQuizzes} quizzes={this.state.quizzes} onDelete={this.delete}/>
          </Route>
          <Route path="/AddQuiz" render={({history,location}) => (
            <AddQuiz historyquizDescription={this.state.quizDescription} quizName = {this.state.quizName} history={history} location={location} onNewQuestionText={this.handleNewQuestionText} handleAddNewQuiz={this.handleAddNewQuizInfo} addNewQuiz={this.addNewQuiz} newQuiz={this.state.newQuiz}  submitDisabled={this.state.submitDisabled}/>
          )}/>
            

          <Route path="/EditQuiz" render={routeProps=><EditQuiz {...routeProps} setQuizInfo={this.setQuizInfo} quizDescription={this.state.quizDescription} quizName = {this.state.quizName} quizInfo={this.state.quizInfo} setQuestions={this.setQuestions} questions={this.state.questions} onNewQuestionText={this.handleNewQuestionText} onEditQuiz={this.handleEditQuiz} newQuiz={this.state.newQuiz} onDelete={this.delete} />} />
          
          <Route path="/AddQuestion" render={routeProps=><AddQuestion {...routeProps} addNewQuestion={this.addNewQuestion} onNewQuestion={this.handleNewQuestion} onInfoSubmit={this.handleInfoSubmit} submitDisabled={this.state.submitDisabled} quizInfo={this.state.quizInfo} onNewQuestionText={this.handleNewQuestionText} linktype={this.state.linktype} responsetext={this.state.responsetext}topictext={this.state.topictext} linktext={this.state.linktext} />}  />
          <Route path="/EditQuestion" render={routeProps=> <EditQuestion {...routeProps} topictext={this.state.topictext} quizInfo={this.state.quizInfo}
     responsetext={this.state.responsetext} linktype={this.state.linktype} linktext={this.state.linktext} onNewQuestionText={this.handleNewQuestionText} setQuestionInfo={this.setQuestionInfo} questionId={this.state.questionId} onEditQuestion={this.handleEditQuestion} submitDisabled={this.state.submitDisabled} />}>
            
          </Route>
          <Route path="/">
            <AllQuizzes quizzes={this.state.quizzes} />
          </Route>
        </Switch>
    </div>
   );
  }
}
 
export default App;
