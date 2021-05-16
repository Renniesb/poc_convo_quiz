import React,{useState} from 'react'
import {useAuth0}   from '@auth0/auth0-react'
import {PayPalButton} from "react-paypal-button-v2"
import {useHistory} from 'react-router-dom'



const StudentButtons = ()=>{
    const [paypalSDKReady, setPaypalSDKReady] = useState(false);
    const { user , getAccessTokenSilently} = useAuth0();

    let cID = "Afnz9iDHmgQYfTxWsDxYLf9l88eZ8NlAjXH6aPYCgpXUC7S00D9UTP3Jq47Mpo0LwLdsASJ5I3TpiFRa";

    let POCbeginner="P-06H33289B21818347MB5W5PI",
        POCintermediate="P-6F670249G0692881SMB5W6KI",
        POCadvanced="P-6F847277FE783133HMB5W7CA",
        POCallLevels="P-75756649GA995821LMB5W7QY";
    
    let amt = 8;
    let amtAll = 16;
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
        <h1 style={{marginBottom:"60px"}}><u>Choose a Quiz</u></h1>
        <h2>Student Beginner Quizzes: ${amt}</h2>
      <PayPalButton
          intent="subscription"
          amount="8.00"
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
          amount="8.00"
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
          amount="8.00"
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
          amount="16.00"
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