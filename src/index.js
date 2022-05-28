import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);