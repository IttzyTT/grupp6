import React from 'react';
import AvatarIgor from '../img/Igor-Avatar.png';
import { Link } from 'react-router-dom';

export default function IgorsPage() {
  return (
    <div className="main-containerIgor">
      <div className="inner-containerIgor">
        <div className="left-containerIgor">
          <h1 className="studiotitleIgor">Igor</h1>
          <h1 className="gruppTitleIgor">Ljevak</h1>
          <img className="frontPictureIgor" src={AvatarIgor} alt="" />
        </div>
        <div className="mid-containerIgor">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dicta nisi similique odio totam ad qui quod quis ratione provident quos,
            velit eos maiores rem nam! Accusantium enim natus ipsam modi sint, quae error magnam iusto, ducimus quisquam suscipit possimus id
            exercitationem unde nobis quibusdam neque reiciendis repudiandae aspernatur voluptatem ullam earum minus aliquid? Eveniet similique, non
            cupiditate reiciendis quo, mollitia corporis repellendus quibusdam quam nesciunt officia eos itaque rerum optio, quos quaerat! Magni, non
            labore! At iusto possimus iste iure accusantium fugit nihil animi quo delectus et, quibusdam itaque praesentium culpa facilis voluptate.
            Iste fugiat doloremque excepturi qui corrupti!
          </p>
        </div>
        <div className="right-containerIgor">
          <Link to="/">hem</Link>
          <Link to="/">om oss</Link>
          <Link to="/Designers">designers</Link>
          <Link to="/">portfoilio</Link>
        </div>
      </div>
    </div>
  );
}
