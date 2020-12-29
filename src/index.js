// Importing Core React Module
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Project Directory File
import './index.css';
import App from './App';

// Rendering the App using ReactDom and passing it to root in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);