import React from 'react'
import {Link} from "react-router-dom";

export default function MatildasPage() {
    return (
        <div className="designOutsideContainer">
        <h1 className="designTitle">designers</h1>
        <div className="designContainer">
        <h1>Matildas sida</h1>
        <div className="profile-grid">

<div className="TextInfo">
  <Link to="/">hem</Link>
  <Link to="/">om oss</Link>
  <Link to="/Designers">designers</Link>
  <Link to="/">portfolio </Link>
  </div>
</div> </div>
</div>
    )
}