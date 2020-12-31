// Importing Core React Module
import React from 'react';
import ReactDOM from 'react-dom';

// Importing Project Directory File
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import './index.css';
import App from './App';

// Rendering the App using ReactDom and passing it to root in index.html
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);