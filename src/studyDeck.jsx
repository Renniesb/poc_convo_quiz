import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Card, Container, Row, Col, Alert} from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import BgTitle from './BgTitle';
import env from './config.js';
import { Link } from 'react-router-dom';


 class StudyDeck extends Component {
    componentDidMount() {
        // make fetch requests
       
        let quizid = this.props.location.location.state.quiz.id;

        const fetchReq1 = fetch(`${env.FlashCards}decks/${quizid}/cards/`)
        .then(response => response.json())
   
        
        const fetchReq2 = fetch(`${env.FlashCards}decks/${quizid}/`)
        .then(response => response.json())


        const allData = Promise.all([fetchReq1, fetchReq2]);

        allData.then((data) => {
          this.setState({ deck: data[1][0],cards: data[0] })

        });

        
    }

   state = {
     deck: {},
     cards: [],
     cardIndex: 0,
     isFlipped: false,
     cardNumber: 1,
     cardRight: true
   }

    handleCardChange = e => {

      let name = e.target.name;

      e.preventDefault()

      if( name === "flip"){
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

      if(name === "forward"){

        this.setState(prevState => {


          return {cardIndex: prevState.cardIndex + 1, isFlipped: false, cardNumber: prevState.cardNumber + 1, cardRight: true}

        })

      }

      if (name === "goBack"){
        this.setState(prevState => {

          return {cardIndex: prevState.cardIndex - 1, isFlipped: false, cardNumber: prevState.cardNumber - 1, cardRight: false}

        })
      }

    }
    isDeckEmpty=()=>{
      if(this.state.cards.length){
        return false
      } 
      else{
        return true
      }
    }
    cardContents=(side)=>{

      let imageLink = "imagelink";
      let contents = this.state.cards.length > 0 && this.state.cards[this.state.cardIndex]?.[side];

      if(this.isDeckEmpty()){
        return <Alert variant="warning">You have no cards in this deck, Add cards to view</Alert>
      } else if(contents.includes(imageLink)) {
        let link = contents.replace(imageLink,'').trim()
        return <img alt="flashcard content" className="quizimg" src={link} />
      } else {
        return contents
      }
      

    }
    render(){

      return (
      <Container>
          <Row>
            <Col md={{span:6, offset: 3}}>
              <div className="text-center">
                <h3 style={{display: 'inline-block', textAlign: 'center', marginTop: 25, marginBottom: 20, marginRight: '1em'}}>Studying: {this.state.deck.deckname}</h3>
                <Link className="myButton" to={{
                  pathname:'/StartQuiz',
                  state:{ 
                      quiz: this.props.location.location.state.quiz
                  } 
                  }}>Start Quiz</Link>
              </div>
              
              <div key={this.state.cardNumber} className={this.state.cardRight ? 'swing-in-right-bck' : 'swing-in-left-bck'}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                  <Card key="front">
                    <BgTitle className="card-header" as="h4" >Term:</BgTitle>
                    <Card.Body>
                      <Card.Title as="h4" style={{minHeight: 150}} className="h-100 align-items-center justify-content-center d-flex">
                      {this.cardContents("front")}
                      </Card.Title>
                      <div className="text-right">
                        <Button variant="secondary" name="flip" onClick={(e)=>{this.handleCardChange(e)}}>Flip Card</Button>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card key="back">
                    <BgTitle className="card-header" as="h4">Definition:</BgTitle>
                    <Card.Body>
                      <Card.Title as="h4" style={{minHeight: 150}} className="h-100 align-items-center justify-content-center d-flex">
                      {this.cardContents("back")}
                      </Card.Title>
                      <div className="text-right">
                        <Button variant="secondary" name="flip" onClick={(e)=>{this.handleCardChange(e)}}>Flip Card</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </ReactCardFlip>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={{span:6, offset: 3}} >
            <div className="text-center">
              <Button style={{marginTop: 10, marginRight: 15}} variant="outline-dark" className="center-block" name="goBack" disabled={this.state.cardIndex === 0} onClick={(e)=>{this.handleCardChange(e)}}>{"<"}</Button>
              {this.state.cardNumber}/{this.state.cards.length }
              <Button style={{marginTop: 10, marginLeft: 15}} variant="outline-dark" disabled={this.state.cardIndex === this.state.cards.length-1}
              name="forward"
              onClick={(e)=>{this.handleCardChange(e)}}>{">"}</Button>
            </div>
            </Col>
          </Row>
        </Container>
      )
    }
  }

export default StudyDeck;
