import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import helper from './reducers'


const store = createStore(helper);
console.log('STORE',store);
console.log('STATE',store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

