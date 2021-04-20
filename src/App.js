import React from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Designers from './components/Designers';

import JoelsPage from './pages/Joel';
import IgorsPage from './pages/Igor';
import MaxsPage from './pages/Max';
import MatildasPage from './pages/Matilda';


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


      <Route exact path="/Joel" component={JoelsPage} />
      <Route exact path="/Igor" component={IgorsPage} />
      <Route exact path="/Max" component={MaxsPage} />
      <Route exact path="/Matilda" component={MatildasPage} />
    </Switch> 

    <Footer/>
    </div>

  </Router>

  );
}

export default App;
