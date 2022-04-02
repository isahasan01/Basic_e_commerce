// React Module Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// CSS File of Antopolis for every React Project 
import './index.css';

// Component Imports
import App from './App';
import { Provider } from 'react-redux';
import store from './ReduxStore/Store';

// base url for global use
window.baseUrl = "https://asce.antopolis.xyz/api/";

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

