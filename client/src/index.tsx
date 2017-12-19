import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

socket.on('connected-client', () => console.log('connected'));

ReactDOM.render(
  <App />, document.getElementById('root'));