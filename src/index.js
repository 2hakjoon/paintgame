import React from 'react';
import ReactDOM from 'react-dom';
import socketio from 'socket.io-client';
import App from './Components/App';

const socket = socketio.connect('http://localhost:4000');

(() => {
  socket.emit('init', { name: 'bella' });
  socket.on('welcome', (msg) => {
    console.log(msg);
  });
  
})();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
