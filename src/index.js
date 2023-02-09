import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Header from './components/Header';
import Body from './components/Body';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body/>
  </React.StrictMode>
);