import React from 'react';
import ReactDOM from 'react-dom';
import { CounterProvider } from './counterContext';
import App from './App';

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById('root')
);