import React from 'react'
import {Link} from "react-router-dom";
import MaxsAvatar from '../img/Max-Avatar.png'


export default function MaxsPage() {
    return (
      <div className="main-container">
      <div className="inner-container">
        <div className="left-container">
          <h1 className="Max-designTitle">Max</h1>
          <h1 className="Max-Title">Zetterlund</h1>
          <img className="MaxsPage" src={MaxsAvatar} alt="art giraff" />

        </div>
        <div className="mid-container-max">
          <p>Max - Github <br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis similique mollitia obcaecati veniam dolores
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