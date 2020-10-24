import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import PageLoader from './components/PageLoader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalImpact from './components/globalImpact';
import SDGs from './components/sdgs';
import OurWork from './components/ourwork';
import SocialMedia from './components/socialmedia';
import Accelerators from './components/accelerators';

function App() {
  return (
    <div className="App">
      <PageLoader/>
      <Header/>
      <Router>
        <Switch>
          <Route exact path='/impact'>
            <GlobalImpact/>
          </Route>
          <Route exact path='/sdgs'>
            <SDGs/>
          </Route>
          <Route exact path='/ourwork'>
            <OurWork/>
          </Route>
          <Route exact path='/purposeimpact'>
            <GlobalImpact/>
          </Route>
          <Route exact path='/accelerators'>
            <Accelerators/>
          </Route>
          <Route exact path='/socialmedia'>
            <SocialMedia/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
