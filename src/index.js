import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Authpack } from '@authpack/sdk'
import { AuthpackProvider } from '@authpack/react'
export const authpack = new Authpack({
  key: 'wga-client-key-094573d41342e2d35a0552327'
})


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthpackProvider value={authpack}>
        <App />
      </AuthpackProvider>
    </BrowserRouter>      
  </React.StrictMode>,
  document.getElementById('root')
);

