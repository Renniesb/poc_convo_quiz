import React , {useState, useEffect} from 'react';
import Quiz from './../Quiz/Quiz';
import styles from './AllQuizzes.module.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import slideImages from './../slideImages';
import LoginButton from './../LoginButton';
import LogoutButton from './../LogoutButton';
import SignupButton from './../SignupButton';
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';

const AllQuizzes = ({quizzes, level, changeLevel}) =>  {
        let history = useHistory();


        const {  user, getAccessTokenSilently } = useAuth0();

        const [planInfo, setPlanInfo] = useState(null);
    
    useEffect(() => {
      
    const getUserMetadata = async () => {
      const domain = "biapp.auth0.com";
  
      try {

        if(user.sub){
            const accessToken = await getAccessTokenSilently({
                audience: `https://${domain}/api/v2/`,
                scope: "read:current_user",
              });
        
              const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
        
              fetch(userDetailsByIdUrl, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }).then(data=>data.json()).then(result=>{
      
                  if(!result.user_metadata.paypal_id){
                      history.push('/signup')
                  }
                  getPaypalPlanId(result.user_metadata.paypal_id);
              })
        }
        
  

        

        
      } catch (e) {
        console.log(e.message);
      }
    };
    const getPaypalPlanId = async (paypal_id) => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic QVp0T25IWDJVc3pJTEJaUmJwM3haS1I4V3pTemh0aHMzODNSQXpmWU5MMHVuWFFyWmJYXzFDREpMeWZ0SXV3R29iR3lLZFI1R1RXSm9Kak86RUNjcGtEcnk5QXBDRFRpWWxhcndhSEtDNzd0Uk9zT0J4ME1JbHhRQ2pCUGp5Rl9xSURaeHY5b0lHMXhMVTVXOXdfQTNXaEIxdnEzaVpJMjI=");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
 
        let urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "client_credentials");
 
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };
        let myPlanHeaders = new Headers();
        
            return fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", requestOptions)
        .then(response => response.json())
        .then((result)=>{
            myPlanHeaders.append("Authorization", `Bearer ${result.access_token}`);
            let planRequestOptions = {
                method: 'GET',
                headers: myPlanHeaders,
                redirect: 'follow'
            };
            return fetch(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${paypal_id}`, planRequestOptions)
            .then(data => data.json())
            .then(planData => {
                const {plan_id, status} = planData
                setPlanInfo({id:plan_id,status: status})
            })
            .catch(error => console.log('error', error));
        })
        
        

    }
  
    getUserMetadata();
    
    
  }, [user]);

        const filteredQuizzes =  quizzes.filter((quiz)=>{
            if(level === "All Levels"){

                return quiz
            }
            return quiz.level === level
        })

        return (
            <div className={styles.gamebackground}>
                { planInfo?.id ? planInfo.id : "loading"}
                <div className={styles.hero}>
                    <img alt="statue-of-liberty-hero-img" src="https://user-images.githubusercontent.com/7147957/88594242-de027f00-d02e-11ea-9e89-625a083b38e8.jpg"/>
                </div>
                <div style={{backgroundColor: "black", padding: "15px", display: "flex", justifyContent: "center"}}>
                
                <Slide className={styles.slideshow}>                   

                    {slideImages.map((image,ind) => {
                       return( <div key={`slide${ind}`} className="each-slide">
                        <div>
                            <img alt={`slide ${ind}`} className={styles.slideshow} src={image}></img>
                        </div>
                    </div>)
                    })}
                </Slide>
                
                </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                <LoginButton />
                <LogoutButton />
                <SignupButton />
                    {/* <Link style={{marginRight: "5px"}} className="myButton"  to="/EditQuizzes">Admin</Link> */}
                </div>
                

                

                <div style={{display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div className={styles.infoPanel}>
                            <h2 className={styles.infoText}>Quiz Instructions</h2>
                            <ol>
                                <li className={styles.infoItem}>Choose a listening comprehension quiz</li>
                                <li className={styles.infoItem}>Fill in the blanks after listening to each question</li>
                                <li className={styles.infoItem}>Press submit</li>
                                <li className={styles.infoItem}>You will recieve feedback about your answer</li>
                                <li className={styles.infoItem}>Press Next to go to the next question</li>
                                <li className={styles.infoItem}>At the end of each quiz you will recieve a score</li>
                            </ol>
                    </div>
                    <form>
                        <label htmlFor="level">Choose your language level:</label>
                        <select name="level" id="level" onChange={e => {changeLevel(e)}} value={level}>
                            <option value="All Levels">All Levels</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </form>
                    
                    <h1 className={styles.whitetext}>Choose a Quiz Below</h1>
                    {                    
                    filteredQuizzes.map((quiz,i) => {
                    return <Quiz key={`key${i}`} quiz={quiz}/>
                    })}
                </div>
            </div>
            
        );
    
}

export default AllQuizzes;
