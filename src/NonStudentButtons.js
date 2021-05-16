import React,{useState} from 'react'
import {useAuth0}   from '@auth0/auth0-react'
import {PayPalButton} from "react-paypal-button-v2"
import {useHistory} from 'react-router-dom'





const NonStudentButtons = ()=>{
    const [paypalSDKReady, setPaypalSDKReady] = useState(false);
    const { user , getAccessTokenSilently} = useAuth0();
    let beginner = "P-16565993Y1138362UMB5WY4A",
        intermediate="P-06H37107S33634647MB5WZ4Y",
        advanced="P-9YA52118L81437406MB5W23I",
        allLevels="P-6KA37019G6605400AMB5W4BI";
    let cID = "Afnz9iDHmgQYfTxWsDxYLf9l88eZ8NlAjXH6aPYCgpXUC7S00D9UTP3Jq47Mpo0LwLdsASJ5I3TpiFRa";
    let amt = 10;
    let amtAll = 20;

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
        <h2>Beginner Quizzes: ${amt}</h2>
      <PayPalButton
          intent="subscription"
          amount="10.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: beginner
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
      <h2>Intermediate Quizzes: ${amt}</h2>
      <PayPalButton
          intent="subscription"
          amount="10.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: intermediate
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
      <h2>Advanced Quizzes: ${amt}</h2>
      <PayPalButton
          intent="subscription"
          amount="10.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: advanced
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
      <h2>All Quizzes: ${amtAll}</h2>
      <PayPalButton
          intent="subscription"
          amount="20.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: allLevels
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

export default NonStudentButtons;