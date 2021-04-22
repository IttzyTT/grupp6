import React from 'react'
import {Link} from "react-router-dom";
import MatildasAvatar from '../img/Matilda-Avatar.jpg';

export default function MatildasPage() {
  return (
    <div className="main-container">
    <div className="inner-container">
      <div className="left-container">
        <h1 className="Matilda-designTitle">Matilda</h1>
        <h1 className="Matilda-Title">Stridsman</h1>
        <img className="MatildasPic" src={MatildasAvatar} alt="" />

      </div>
      <div className="mid-container-Matilda">
        <p>Scrum Master <br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis similique mollitia obcaecati veniam dolores
          <br></br>hic placeat maiores ipsa eveniet architecto eius, accusantium consectetur fugit exercitationem quaerat a animi perferendis?
          hic placeat maiores ipsa eveniet architecto eius, accusantium consectetur fugit exercitationem quaerat a animi perferendis?
          hic placeat maiores ipsa eveniet architecto eius, accusantium consectetur fugit exercitationem quaerat a animi perferendis?</p>

      </div>
      <div className="right-container">
        <Link to="/">hem</Link>
        <Link to="/">om oss</Link>
        <Link to="/Designers">designers</Link>
        <Link to="/">portfoilio</Link>
      </div>
    </div>
  </div>
  )
}