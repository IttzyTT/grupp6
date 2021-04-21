import React from 'react'
import {Link} from "react-router-dom";
import JoelsAvatar from '../img/Joel-Avatar.jpg';

export default function JoelsPage() {
  return (
    <div className="main-container">
    <div className="inner-container">
      <div className="left-container">
        <h1 className="Joel-designTitle">Joel</h1>
        <h1 className="Joel-Title">Morales</h1>
        <img className="JoelsPic" src={JoelsAvatar} alt="" />

      </div>
      <div className="mid-container-Joel">
        <p>Joel - Tester <br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis similique mollitia obcaecati veniam dolores
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