import React from 'react';
import {Link} from "react-router-dom";
import frontPicture from '../giraff.png';
import '../App.css';

function Home() {
  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="left-container">
          <h1 className="studiotitle">studio</h1>
          <h1 className="gruppTitle">grupp6.</h1>
        </div>
        <div className="mid-container">
          <img className="frontPicture" src={frontPicture} alt="art giraff" />
        </div>
        <div className="right-container">
          <Link to="/">hem</Link>
          <Link to="/">om oss</Link>
          <Link to="/Designers">designers</Link>
          <Link to="/">portfoilio</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
