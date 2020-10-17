import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import PageLoader from './components/PageLoader';

function App() {
  return (
    <div className="App">
      <PageLoader/>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
