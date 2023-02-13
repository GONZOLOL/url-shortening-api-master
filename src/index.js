import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Input from './components/Input';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Input />
    <Content />
    <Footer />
  </React.StrictMode>
);