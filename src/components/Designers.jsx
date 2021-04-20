import React from 'react'
import {Link} from "react-router-dom";
import JoelAvatar from '../img/Joel-Avatar.jpg'
import MatildasAvatar from '../img/Matilda-Avatar.jpg'
import MaxsAvatar from '../img/Max-Avatar.png'
import IgorsAvatar from '../img/Igor-Avatar.png'


export default function Designers() {
    return (
        <div className="designOutsideContainer">
        <h1 className="designTitle">designers</h1>
        <div className="designContainer">
        {/* div className="main-container-designer">
      
          <Link to="/">hem</Link>
          <Link to="/">om oss</Link>
          <Link to="/Designers">designers</Link>
          <Link to="/">portfolio </Link>
       
    </div>  */}
     <div className="profile-grid">

          <div className="TextInfo">
          <Link to="/">hem</Link>
          <Link to="/">om oss</Link>
          <Link to="/Designers">designers</Link>
          <Link to="/">portfolio </Link>
          </div>

       
          <div class="pMatilda"><img className= "MatildasPic" src={MatildasAvatar} alt="Matilda"/><div className="TextMatilda">
             <Link to="/Matilda">Matilda Stridsman</Link> <h4>Titel: Scrum Master</h4>  
             <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Cum incidunt ut corrupti optio ea culpa</p></div></div>

          <div class="pMax"><img className= "MaxsPic" src={MaxsAvatar} alt="Max"/> <div className="TextMax">
          <Link to="/Max">Max Zetterlund</Link><h4>Titel: Github Master</h4>   
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Cum incidunt ut corrupti optio ea culpa</p></div></div>

          <div class="pIgor"><img className= "IgorsPic" src={IgorsAvatar} alt="Igor"/> <div className="TextIgor">
          <Link to="/Igor">Igor Ljevak</Link><h4>Titel: Pro Designer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Cum incidunt ut corrupti optio ea culpa</p></div></div>

          <div class="pJoel"><img className= "JoelsPic" src={JoelAvatar} alt="Joel"/> <div className="TextJoel">
          <Link to="/Joel">Joel Morales </Link><h4>Titel: Pro tester</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Cum incidunt ut corrupti optio ea culpa</p></div></div>
        
  

         
    </div>
    </div>
    </div> 
    )
}
