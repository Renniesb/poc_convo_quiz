import React , {useState, useEffect} from 'react';
import Quiz from './../Quiz/Quiz';
import styles from './AllQuizzes.module.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import slideImages from './../slideImages';
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';

const AllQuizzes = ({quizzes, level, changeLevel}) =>  {
        let history = useHistory();


        const {  user, getAccessTokenSilently,loginWithRedirect,logout } = useAuth0();

        const [planInfo, setPlanInfo] = useState(null);

        let beginner = "P-5R249716RG461752AMCQ4LDY",
        POCbeginner="P-4CN878497G476905SMCQ4E7A",
        intermediate="P-09B05317JB645351RMCQ4LZY",
        POCintermediate="P-6G388154PF961390XMCQ4G6Q",
        advanced="P-7PH74335AV8507305MCQ4MHA",
        POCadvanced="P-6T238973L8435340YMCQ4IHI",
        allLevels="P-82811235566500232MCQ4M6A",
        POCallLevels="P-42G604889F7457649MCQ4JWQ";
    
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
      
                  if(!result.user_metadata?.paypal_id && user.sub !== "auth0|60a04609966070006aa00eb4"){
                      history.push('/signup')
                  }
                  getPaypalPlanId(result.user_metadata?.paypal_id);
              })

        }
        
            

        

        
      } catch (e) {
        console.log(e.message);
      }
    };
    const getPaypalPlanId = async (paypal_id) => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic QWRFMERrZm9LRVFFWlRmQXNyVklWckhvRTNUcXpoU2xEak9feHZYejFWdElVdXhsLXY1RmxiaXU5c3ZCMjJ2TmlzdmExSm9HVnEzdGVseFA6RUdxZ1RRb1VScVcxVHFMQ0g1bEplbEdvNE9TRTJ6bVhPZDZaWk9XYkpiMzZLQm1IOWIwRzBhM25uNWlIb2IyVi1tbF9yREFZVUhvUnhaYjc=");
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
            return fetch("https://api-m.paypal.com/v1/oauth2/token", requestOptions)
        .then(response => response.json())
        .then((result)=>{
            myPlanHeaders.append("Authorization", `Bearer ${result.access_token}`);
            let planRequestOptions = {
                method: 'GET',
                headers: myPlanHeaders,
                redirect: 'follow'
            };
            return fetch(`https://api-m.paypal.com/v1/billing/subscriptions/${paypal_id}`, planRequestOptions)
            .then(data => data.json())
            .then(planData => {
                const {plan_id, status} = planData
                setPlanInfo({id:plan_id,status: status})

                if(plan_id===beginner|| plan_id===POCbeginner){
                    changeLevel({target:{value:"Beginner"}})
                }
                if(plan_id===intermediate|| plan_id===POCintermediate){
                    changeLevel({target:{value:"Intermediate"}})
                }
                if(plan_id===advanced|| plan_id===POCadvanced){
                    changeLevel({target:{value:"Advanced"}})
                }
                if(plan_id===allLevels|| plan_id===POCallLevels|| user.sub === "auth0|60a04609966070006aa00eb4"){
                    changeLevel({target:{value:"All Levels"}})
                }
            })
            .catch(error => console.log('error', error));
        })
        
        

    }
  
    getUserMetadata();
    
    
  }, [user]);

        const filterBar = ()=>{
            return (<form>
                        <label htmlFor="level">Choose your language level:</label>
                        <select name="level" id="level" onChange={e => {changeLevel(e)}} value={level}>
                            <option value="All Levels">All Levels</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </form>)
        }

        const filteredQuizzes =  quizzes.filter((quiz)=>{
            if(level === "All Levels"){

                return quiz
            }
            return quiz.level === level
        })

        return (
            <div className={styles.gamebackground}>
                <nav>
                    {!user && <><a role="button" href="#login" onClick={()=>loginWithRedirect()}>Login</a><a role="button" href="#signup" onClick={()=>loginWithRedirect({screen_hint: "signup",})}>Sign-up</a></>}
                    {user && <a role="button" href="#logout" onClick={()=>logout({ returnTo: window.location.origin })}>Logout</a>}
                    
                    <a href="#quizzes">Quizzes</a>
                </nav>
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

                    {planInfo?.id === beginner && <h2>Beginner Quizzes</h2> }
                    {planInfo?.id === POCbeginner && <h2>Beginner Quizzes</h2> }
                    {planInfo?.id === intermediate && <h2>Intermediate Quizzes</h2> }
                    {planInfo?.id === POCintermediate && <h2>Intermediate Quizzes</h2> }
                    {planInfo?.id === advanced && <h2>Advanced Quizzes</h2> }
                    {planInfo?.id === POCadvanced && <h2>Advanced Quizzes</h2> }
                    {planInfo?.id === allLevels && <h2>All Levels</h2> }
                    {planInfo?.id === POCallLevels && <h2>All Levels</h2> }
                    {!planInfo?.id && filterBar()}
                    {planInfo?.id === allLevels && filterBar()}
                    {planInfo?.id === POCallLevels && filterBar() }
                    <h1 id="quizzes" className={styles.whitetext}>Choose a Quiz Below</h1>
                    {                    
                    filteredQuizzes.map((quiz,i) => {
                    return <Quiz user={user} planInfo={planInfo} key={`key${i}`} quiz={quiz}/>
                    })}
                    
                    {planInfo?.id && <div style={{marginBottom:"30px"}}><h5>To change or cancel your plan</h5><b>email: pocconversational@gmail.com</b></div>}
                </div>
            </div>
            
        );
    
}

export default AllQuizzes;
