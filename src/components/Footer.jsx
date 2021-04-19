import React from 'react';
import social1 from '../social1.png';
import social2 from '../social2.png';
import social3 from '../social3.png';

function Footer() {
  return (
    <footer>
      <div className="leftFoot">
        <h3>Let´s talk</h3>
        <div className="socialIcons">
          <img src={social1} alt="" />
          <img src={social2} alt="" />
          <img src={social3} alt="" />
        </div>
      </div>
      <div className="rightFoot">
        <div className="upper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia dolor adipisci blanditiis iste amet consequatur tempore quidem
            nemo quaerat, dolores, et sapiente magnam? Minima blanditiis inventore ipsum facilis nulla?
          </p>
        </div>
        <div className="lower">
          <div className="contact">kontakt</div>
          <div className="adress">adress</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
