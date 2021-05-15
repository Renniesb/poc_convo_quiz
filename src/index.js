import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="biapp.auth0.com"
        clientId="qkqEeCUCtEBmZkGtupS9mD5xBJTGmhSw"
        redirectUri={window.location.origin}
        audience="https://biapp.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>      
  </React.StrictMode>,
  document.getElementById('root')
);

