import React,{useState} from 'react'
import {useAuth0}   from '@auth0/auth0-react'
import {PayPalButton} from "react-paypal-button-v2"
import {useHistory} from 'react-router-dom'



const StudentButtons = ()=>{
    const [paypalSDKReady, setPaypalSDKReady] = useState(false);
    const { user , getAccessTokenSilently} = useAuth0();

    let cID = "AdE0DkfoKEQEZTfAsrVIVrHoE3TqzhSlDjO_xvXz1VtIUuxl-v5Flbiu9svB22vNisva1JoGVq3telxP";

    let POCbeginner="P-4CN878497G476905SMCQ4E7A",
        POCintermediate="P-6G388154PF961390XMCQ4G6Q",
        POCadvanced="P-6T238973L8435340YMCQ4IHI",
        POCallLevels="P-42G604889F7457649MCQ4JWQ";
    
    let amt = 4;
    let amtAll = 8;
    let history = useHistory();
  
    
  
      const toHome = () =>{
  
          history.push("/")
  
      }
    const center = {
        display:"flex",
        flexDirection: "column", 
        alignItems: "stretch",
        textAlign: "center"
    }
  
    return (
        <>
        <div style={center}>
        <h1 style={{marginBottom:"60px"}}><u>Choose a Plan</u></h1>
        <h2>Student Beginner Quizzes: ${amt}</h2>
      <PayPalButton
          intent="subscription"
          amount="4.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: POCbeginner
              });
          }}
         onApprove={(data, actions)=> {
              // Capture the funds from the transaction
              return actions.subscription.get().then(async function(details) {
                  // Show a success message to your buyer
                  alert("Subscription completed");
                  console.log('details',details);
                  console.log('data', data);
                  const domain = "biapp.auth0.com";
                  const accessToken = await getAccessTokenSilently({
                      audience: `https://${domain}/api/v2/`,
                      scope: "read:current_user",
                  });
                  
  
                  // OPTIONAL: Call your server to save the subscription
                  return fetch(`https://${domain}/api/v2/users/${user.sub}`, {
                          method: "PATCH",
                          headers: {authorization: `Bearer ${accessToken}`, 'content-type': 'application/json'},
                          body: JSON.stringify({
                          user_metadata: {paypal_id: details.id}
                          })
                  })
                  .then(data=>data.json())
                  .then(result=>console.log('user metadata',result))
                  .then(()=>toHome())
                  .catch(error=>console.log('error',error));
              });
          }}
          options={{
              clientId: cID,
              vault: true
          }}
          onButtonReady={() => setPaypalSDKReady(true)}
      />
      {paypalSDKReady ? (
    <>
      <h2>Student Intermediate Quizzes: ${amt}</h2>
      <PayPalButton
          intent="subscription"
          amount="4.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: POCintermediate
              });
          }}
         onApprove={(data, actions)=> {
              // Capture the funds from the transaction
              return actions.subscription.get().then(async function(details) {
                  // Show a success message to your buyer
                  alert("Subscription completed");
                  console.log('details',details);
                  console.log('data', data);
                  const domain = "biapp.auth0.com";
                  const accessToken = await getAccessTokenSilently({
                      audience: `https://${domain}/api/v2/`,
                      scope: "read:current_user",
                  });
                  
  
                  // OPTIONAL: Call your server to save the subscription
                  return fetch(`https://${domain}/api/v2/users/${user.sub}`, {
                          method: "PATCH",
                          headers: {authorization: `Bearer ${accessToken}`, 'content-type': 'application/json'},
                          body: JSON.stringify({
                          user_metadata: {paypal_id: details.id}
                          })
                  })
                  .then(data=>data.json())
                  .then(result=>console.log('user metadata',result))
                  .then(()=>toHome())
                  .catch(error=>console.log('error',error));
              });
          }}
          options={{
              clientId: cID,
              vault: true
          }}
      />
      <h2>Student Advanced Quizzes: ${amt}</h2>
      <PayPalButton
          intent="subscription"
          amount="4.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: POCadvanced
              });
          }}
         onApprove={(data, actions)=> {
              // Capture the funds from the transaction
              return actions.subscription.get().then(async function(details) {
                  // Show a success message to your buyer
                  alert("Subscription completed");
                  console.log('details',details);
                  console.log('data', data);
                  const domain = "biapp.auth0.com";
                  const accessToken = await getAccessTokenSilently({
                      audience: `https://${domain}/api/v2/`,
                      scope: "read:current_user",
                  });
                  
  
                  // OPTIONAL: Call your server to save the subscription
                  return fetch(`https://${domain}/api/v2/users/${user.sub}`, {
                          method: "PATCH",
                          headers: {authorization: `Bearer ${accessToken}`, 'content-type': 'application/json'},
                          body: JSON.stringify({
                          user_metadata: {paypal_id: details.id}
                          })
                  })
                  .then(data=>data.json())
                  .then(result=>console.log('user metadata',result))
                  .then(()=>toHome())
                  .catch(error=>console.log('error',error));
              });
          }}
          options={{
              clientId: cID,
              vault: true
          }}
      />
      <h2>Student All Quizzes: ${amtAll}</h2>
      <PayPalButton
          intent="subscription"
          amount="8.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: POCallLevels
              });
          }}
         onApprove={(data, actions)=> {
              // Capture the funds from the transaction
              return actions.subscription.get().then(async function(details) {
                  // Show a success message to your buyer
                  alert("Subscription completed");
                  console.log('details',details);
                  console.log('data', data);
                  const domain = "biapp.auth0.com";
                  const accessToken = await getAccessTokenSilently({
                      audience: `https://${domain}/api/v2/`,
                      scope: "read:current_user",
                  });
                  
  
                  // OPTIONAL: Call your server to save the subscription
                  return fetch(`https://${domain}/api/v2/users/${user.sub}`, {
                          method: "PATCH",
                          headers: {authorization: `Bearer ${accessToken}`, 'content-type': 'application/json'},
                          body: JSON.stringify({
                          user_metadata: {paypal_id: details.id}
                          })
                  })
                  .then(data=>data.json())
                  .then(result=>console.log('user metadata',result))
                  .then(()=>toHome())
                  .catch(error=>console.log('error',error));
              });
          }}
          options={{
              clientId: cID,
              vault: true
          }}
      />
    </>) : null}
    </div>
      </>
      
      
    )
};

export default StudentButtons;