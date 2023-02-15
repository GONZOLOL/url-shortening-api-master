import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Header from './components/Header';
import DownHeader from './components/DownHeader';
import Content from './components/Content';
import Input from './components/Input';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <DownHeader />
    <Input />
    <Content />
    <Footer />
  </React.StrictMode>
);