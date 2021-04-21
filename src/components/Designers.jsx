import React from 'react';
import { Link } from 'react-router-dom';
import JoelAvatar from '../img/Joel-Avatar.jpg';
import MatildasAvatar from '../img/Matilda-Avatar.jpg';
import MaxsAvatar from '../img/Max-Avatar.png';
import IgorsAvatar from '../img/Igor-Avatar.png';

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

          <div className="pMatilda">
            <img className="MatildasPic" src={MatildasAvatar} alt="Matilda" />
            <div className="TextMatilda">
              <Link className="designerName" to="/Matilda">
                Matilda Stridsman
              </Link>{' '}
              <h4 className="designerTitle">Titel: Scrum Master</h4>
            </div>
          </div>

          <div className="pMax">
            <img className="MaxsPic" src={MaxsAvatar} alt="Max" />{' '}
            <div className="TextMax">
              <Link className="designerName" to="/Max">
                Max Zetterlund
              </Link>
              <h4 className="designerTitle">Titel: Github Master</h4>
            </div>
          </div>

          <div className="pIgor">
            <img className="IgorsPic" src={IgorsAvatar} alt="Igor" />{' '}
            <div className="TextIgor">
              <Link className="designerName" to="/Igor">
                Igor Ljevak
              </Link>
              <h4 className="designerTitle">Titel: Pro Designer</h4>
            </div>
          </div>

          <div className="pJoel">
            <img className="JoelsPic" src={JoelAvatar} alt="Joel" />{' '}
            <div className="TextJoel">
              <Link className="designerName" to="/Joel">
                Joel Morales{' '}
              </Link>
              <h4 className="designerTitle">Titel: Pro tester</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
