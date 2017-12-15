import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';
import chat from './reducers/chat';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

socket.on('connected-client', () => console.log('connected'));

const store = createStore(chat, composeWithDevTools(
  applyMiddleware(
    ReduxPromise
  )
));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById('root'));