import React,{useState} from 'react'
import {useAuth0}   from '@auth0/auth0-react'
import {PayPalButton} from "react-paypal-button-v2"
import {useHistory} from 'react-router-dom'





const NonStudentButtons = ()=>{
    const [paypalSDKReady, setPaypalSDKReady] = useState(false);
    const { user , isAuthenticated, getAccessTokenSilently} = useAuth0();

    let history = useHistory();
  
  
  
      const toHome = () =>{
  
          history.push("/")
  
      }
  
    return (
        <>
        <h1>Beginner Quizzes</h1>
      <PayPalButton
          intent="subscription"
          amount="10.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: 'P-3UG35541FL986113FMB5ZVRY'
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
              clientId: "AZtOnHX2UszILBZRbp3xZKR8WzSzhths383RAzfYNL0unXQrZbX_1CDJLyftIuwGobGyKdR5GTWJoJjO",
              vault: true
          }}
          onButtonReady={() => setPaypalSDKReady(true)}
      />
      {paypalSDKReady ? (
    <>
      <h1>Intermediate Quizzes</h1>
      <PayPalButton
          intent="subscription"
          amount="10.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: 'P-0PV8622658083934GMCDYXEY'
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
              clientId: "AZtOnHX2UszILBZRbp3xZKR8WzSzhths383RAzfYNL0unXQrZbX_1CDJLyftIuwGobGyKdR5GTWJoJjO",
              vault: true
          }}
      />
      <h1>Advanced Quizzes</h1>
      <PayPalButton
          intent="subscription"
          amount="10.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: 'P-3EH722805N167060UMCDYYAY'
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
              clientId: "AZtOnHX2UszILBZRbp3xZKR8WzSzhths383RAzfYNL0unXQrZbX_1CDJLyftIuwGobGyKdR5GTWJoJjO",
              vault: true
          }}
      />
      <h1>All Quizzes</h1>
      <PayPalButton
          intent="subscription"
          amount="10.00"
          currency="USD"
          createSubscription={(data, actions) => {
              return actions.subscription.create({
                  plan_id: 'P-2AF92715UL720341RMCDYZ2Y'
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
              clientId: "AZtOnHX2UszILBZRbp3xZKR8WzSzhths383RAzfYNL0unXQrZbX_1CDJLyftIuwGobGyKdR5GTWJoJjO",
              vault: true
          }}
      />
    </>) : null}
      </>
      
      
    )
};

export default NonStudentButtons;