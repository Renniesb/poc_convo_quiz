import React, {createRef} from 'react';
import ResponseText from './Response/ResponseText';
import StartQuiz from './StartQuiz/StartQuiz'
import EndQuiz from './EndQuiz/EndQuiz'
import { Route,Switch } from 'react-router-dom';
import AllQuizzes from './AllQuizzes/AllQuizzes';
import EditQuizzes from './Edit/EditQuizzes/EditQuizzes';
import AddQuiz from './Edit/AddQuiz/AddQuiz';
import EditQuiz from './Edit/EditQuiz/EditQuiz';
import AddQuestion from './Edit/AddQuestion/AddQuestion';
import AddMultipleChoiceQuestion from './Edit/AddMultipleChoiceQuestion/AddMultipleChoiceQuestion';
import EditQuestion from './Edit/EditQuestion/EditQuestion';
import SelectQuestionType from './Edit/SelectQuestionType/SelectQuestionType';
import env from './config.js'




class App extends React.Component {
  constructor(props){
    super(props)
    this.formRef = createRef();
  
    this.state = {
     topictext: "",
     responsetext: "",
     level:"All Levels",
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
     incorrect:0,
     locked: false,
     addedLevel: "Intermediate"
    }
  }
  handleEditQuiz = () => {
    const data = {
      quizname: this.state.quizName,
      quizdescription:this.state.quizDescription,
      locked:this.state.locked,
      level: this.state.addedLevel
    }
    fetch(`${env.ENDPOINT}quiz/${this.state.quizInfo.id}`, {
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
                 quiz.locked = data.locked
                 quiz.level = data.level      
          }
          return quiz
       })
      

       this.setState({quizzes: newQuizzes })
     }
    }
    )
    .then(data=> console.log('data', data))  
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
  handleEditQuestion = (id) => {
    //create response text that accounts for punctuation at the end
    let responseText = this.state.responsetext;
    let words = responseText.split(' ');
    let answers=""

    let correcttext = words.map((word)=>{
      const startIndex = word.indexOf("_")    
      const endIndex = word.lastIndexOf("_")
    if(startIndex > -1 && startIndex !== endIndex){
        let wordstr = [...word];

        wordstr[startIndex] = '<u>'
        wordstr[endIndex] = '</u>'
        

        return wordstr.join('').replace(/_/g, ' ');
        
        
    }
    return word
    }).join(' ')

    let correcthtml = `<span class="incorrect">Incorrect</span><div class="correct-answer">Correct Answer: ${correcttext}</div>`

    for(let i=0; i<words.length;i++){
    
          const startIndex = words[i].indexOf("_")    
          const endIndex = words[i].lastIndexOf("_")
          let answer = ""


          if(startIndex > -1 && startIndex !== endIndex){
            answer = words[i].substring(startIndex+1, endIndex)
              answers = answers + answer.replace(/_/g, ' ').toLowerCase()
              
          }
    
    }
    const data = { 
        questiontext: this.state.topictext,
        responsetext: this.state.responsetext,
        correcttext: correcthtml,
        answers: answers,
        link: this.state.linktext,
        linktype: this.state.linktype
      }
  
      fetch(`${env.ENDPOINT}questions/${this.state.questionId}`, {
        method: 'PATCH', 
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data),
      })
      .then(response => {
        if(response.status === 204){
          const questions = this.state.questions
          const newQuestions = questions.map((question) => {
            if(question.id === id){
              question.questiontext = data.questiontext
              question.responsetext = data.responsetext
              question.correcttext = data.correcttext
              question.link = data.link
              question.linktype = data.linktype
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
  onToggle = newValue => {
    this.setState({ locked: newValue });
  }
  
  addNewQuestion = () => {

        //make sure blank logic accounts for punctuation, create response text
        let responseText = this.state.responsetext;
        let words = responseText.split(' ');
        let answers=""

        let correcttext = words.map((word)=>{
          const startIndex = word.indexOf("_")    
          const endIndex = word.lastIndexOf("_")
        if(startIndex > -1 && startIndex !== endIndex){
            let wordstr = [...word];
    
            wordstr[startIndex] = '<u>'
            wordstr[endIndex] = '</u>'
            
    
            return wordstr.join('').replace(/_/g, ' ');
            
            
        }
        return word
        }).join(' ')

        let correcthtml = `<span class="incorrect">Incorrect</span><div class="correct-answer">Correct Answer: ${correcttext}</div>`

        for(let i=0; i<words.length;i++){

          const startIndex = words[i].indexOf("_")
          let answer = ""
          const endIndex = words[i].lastIndexOf("_")


            if(startIndex > -1 && startIndex !== endIndex){              
              answer = words[i].substring(startIndex+1, endIndex)
                answers = answers + answer.replace(/_/g, ' ').toLowerCase()
                
            }
        
        }
        const data = { 
            questiontext: this.state.topictext,
            responsetext: this.state.responsetext,
            correcttext: correcthtml,
            answers: answers,
            quiznum: this.state.quizInfo.id,
            link: this.state.linktext,
            linktype: this.state.linktype
        };
      

      fetch(`${env.ENDPOINT}questions`, {
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
    
  }
  handleNewQuestionText = event => {
    console.log(event.target.id);
    this.setState({[event.target.id]: event.target.value})
    
    if(event.target.id === "linktype" || event.target.id === "topictext" || event.target.id === "responsetext" || event.target.id === "linktext" ){
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
    fetch(`${env.ENDPOINT}/quiz`)
      .then(response => response.json())
      .then(data =>{ 
        this.setState({ quizzes: data })}
      )
  }
  setQuizInfo = (quiz) => {
    this.setState({quizInfo: quiz, quizDescription: quiz.quizdescription, quizName: quiz.quizname, locked:  quiz.locked, addedLevel: quiz.level})
  }
  setQuestionInfo = (id) => {
    
    fetch(`${env.ENDPOINT}questions/${id}`)
      .then(response => response.json())
      .then(data =>{ 
       
        this.setState({topictext: data.questiontext, responsetext: data.responsetext, linktype: data.linktype, linktext: data.link, questionId: data.id })
      });
    
  }
  setQuestions = (quizNum, editingMode = false) => {
    //get questions from a specific quiz
    if(editingMode){
      fetch(`${env.ENDPOINT}quiz/${quizNum}/questions`)
      .then(response => response.json())
      .then(data =>{ 
          this.setState({questions: data})
      });
    } else {
      fetch(`${env.ENDPOINT}quiz/${quizNum}/questions`)
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

    const blanks = inputs.filter((input)=>{
      return input.id
    }).map((blank)=>{
      return blank.id
    })

    
    this.setState({currentBlanks: blanks});
  }
  handleOnChange = (e) => {
        
       let userValue = e.target.value

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
  changeLevel = (e) => {
    this.setState({level: e.target.value})
  }
  delete = (event,id) => {
  
    if(event.target.id === "deleteQuiz"){
      fetch(`${env.ENDPOINT}quiz/${id}`, {
        method: 'DELETE', 
      })
      .then(response => {
        if(response.status===204){
          const quizzes = this.state.quizzes
          const filteredquizzes = quizzes.filter(quiz => {
            return quiz.id !== id
          })
          this.setState({quizzes: filteredquizzes})
        }

      } )
      
      this.setQuizzes()
    }else if(event.target.id === "deleteQuestion") {
      fetch(`${env.ENDPOINT}questions/${id}`, {
        method: 'DELETE', 
      })
      .then(response => {
        if(response.status===204){
          const questions = this.state.questions
          const filteredquestions = questions.filter(question => {
            return question.id !== id
          })
          this.setState({questions: filteredquestions}) 
        }
      })
    }
  }
  addNewQuiz = () => {
    const data = {
      quizname: this.state.newQuizName,
      quizdescription: this.state.newQuizDescription,
      locked: this.state.locked,
      level: this.state.addedLevel

    }
    fetch(`${env.ENDPOINT}quiz`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
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
    //code to remove data from the blanks and detect if we should move to the end screen
    inputs.map((input)=>{
      return input.value = "";
    })
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
            <AddQuiz addedLevel={this.state.addedLevel} locked={this.state.locked} onChange={this.onToggle} historyquizDescription={this.state.quizDescription} quizName = {this.state.quizName} history={history} location={location} onNewQuestionText={this.handleNewQuestionText} handleAddNewQuiz={this.handleAddNewQuizInfo} addNewQuiz={this.addNewQuiz} newQuiz={this.state.newQuiz}  submitDisabled={this.state.submitDisabled}/>
          )}/>
            

          <Route path="/EditQuiz" render={routeProps=><EditQuiz {...routeProps} setQuizInfo={this.setQuizInfo} quizDescription={this.state.quizDescription} quizName = {this.state.quizName}
          addedLevel={this.state.addedLevel} locked={this.state.locked} quizInfo={this.state.quizInfo} onChange={this.onToggle} setQuestions={this.setQuestions} questions={this.state.questions} onNewQuestionText={this.handleNewQuestionText} onEditQuiz={this.handleEditQuiz} newQuiz={this.state.newQuiz} onDelete={this.delete} />} />
          
          <Route path="/AddQuestion" render={routeProps=><AddQuestion {...routeProps} addNewQuestion={this.addNewQuestion} onNewQuestion={this.handleNewQuestion} onInfoSubmit={this.handleInfoSubmit} submitDisabled={this.state.submitDisabled} quizInfo={this.state.quizInfo} onNewQuestionText={this.handleNewQuestionText} linktype={this.state.linktype} responsetext={this.state.responsetext}topictext={this.state.topictext} linktext={this.state.linktext} />}  />
          <Route path="/AddMultipleChoiceQuestion" render={routeProps=><AddMultipleChoiceQuestion {...routeProps} addMultipleChoiceQuestion={this.addMultipleChoiceQuestion} onNewQuestion={this.handleNewQuestion} onInfoSubmit={this.handleInfoSubmit} submitDisabled={this.state.submitDisabled} quizInfo={this.state.quizInfo} onNewQuestionText={this.handleNewQuestionText} linktype={this.state.linktype} responsetext={this.state.responsetext} topictext={this.state.topictext} linktext={this.state.linktext} />     }  />

          <Route path="/SelectQuestionType" render={routeProps=><SelectQuestionType {...routeProps} />}  />
          <Route path="/EditQuestion" render={routeProps=> <EditQuestion {...routeProps} topictext={this.state.topictext} quizInfo={this.state.quizInfo}
     responsetext={this.state.responsetext} linktype={this.state.linktype} linktext={this.state.linktext} onNewQuestionText={this.handleNewQuestionText} setQuestionInfo={this.setQuestionInfo} questionId={this.state.questionId} onEditQuestion={this.handleEditQuestion} submitDisabled={this.state.submitDisabled} />}>
            
          </Route>
          <Route path="/">
            <AllQuizzes quizzes={this.state.quizzes} changeLevel={this.changeLevel} level={this.state.level}/>
          </Route>
        </Switch>
    </div>
   );
  }
}
 
export default App;
