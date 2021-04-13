import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="biapp.auth0.com"
        clientId="GPVTvi8AqrtUxeFrSs4aTwHguNyuLEf6"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>      
  </React.StrictMode>,
  document.getElementById('root')
);

