import React from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Designers from './components/Designers';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
  <Router>
  
    <div className="App">
    <Header/>
    


    <Switch>
      <Route path="/" exact component={Home}  />
      <Route exact path="/Header" component={Header} /> 
      <Route exact path="/Footer" component={Footer} />
      <Route exact path="/Designers" component={Designers} />
    </Switch> 

    <Footer/>
    </div>

  </Router>

  );
}

export default App;
