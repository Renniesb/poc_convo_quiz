import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { PayPalButton } from "react-paypal-button-v2";

const SignUp = () => {
  const { user } = useAuth0();

  console.log(user);

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

  return (
    <PayPalButton
        options={{vault: true}}
        intent="subscription"
        amount="8.00"
        currency="USD"
        createSubscription={(data, actions) => {
            return actions.subscription.create({
                plan_id: 'P-3UG35541FL986113FMB5ZVRY'
            });
        }}
        onApprove={(data, actions) => {
            // Capture the funds from the transaction
            return actions.subscription.get().then(function(details) {
                // Show a success message to your buyer
                alert("Subscription completed");
                console.log('details',details);
                console.log('data', data);

                let subscriptionID = data.subscriptionID

                // OPTIONAL: Call your server to save the subscription
                return fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", requestOptions)
                        .then(response => response.json())
                        .then((result)=>{
                            console.log(result["access_token"])
                            myPlanHeaders.append("Authorization", `Bearer ${result.access_token}`);
                            let planRequestOptions = {
                                method: 'GET',
                                headers: myPlanHeaders,
                                redirect: 'follow'
                            };
                            return fetch(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}`, planRequestOptions)
                            .then(data => data.json())
                            .then(planData => console.log('plan result',planData))
                            .catch(error => console.log('error', error));
                        })
                        
              
            });
        }}
        options={{
            clientId: "AZtOnHX2UszILBZRbp3xZKR8WzSzhths383RAzfYNL0unXQrZbX_1CDJLyftIuwGobGyKdR5GTWJoJjO",
            vault: true
        }}
    />
  )
};

export default SignUp;