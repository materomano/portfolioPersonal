import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LangProvider } from './components/LangContext.jsx';
import './Estilo/style.css';

ReactDOM.render(
  <LangProvider>
    <App />
  </LangProvider>,
  document.getElementById('root')
);


