import React from "react";
import mrom from '../../assets/images/mr-om.webp';
import modupe from '../../assets/images/modupe-.webp';
import lekan from '../../assets/images/Lekan-Lasisi-Profile-Picture.webp'
import remi from '../../assets/images/Remi-Bello-Profile-Picture.webp'
import './Team.css'

const Team = () => {
  return (
    <div className="meet__team">
        <h2 className="heading-meet">The Team.</h2>
        <div className="meet__team--container">
      <div className="meet__team--item">
        <img src={mrom} alt="team member" className="correct-img"/>
        <h2 className="heading-team">Mr. Olufemi Oguntade</h2>
        <p>Managing Partner</p>
      </div>
      <div className="meet__team--item">
        <img src={modupe} alt="team member" className="correct-img"/>
        <h2 className="heading-team">Mrs. Modupe Florence Oguntade</h2>
        <p>Partner</p>
      </div>
      <div className="meet__team--item">
        <img src={remi} alt="team member" className="resize-image"/>
        <h2 className="heading-team">Alhaji Ismaila Aderemi Bello</h2>
        <p>Partner</p>
      </div>
      <div className="meet__team--item">
        <img src={lekan} alt="team member" className="resize-image"/>
        <h2 className="heading-team">Mr. Lateef Olalekan Lasisi</h2>
        <p>Partner</p>
      </div>
      </div>
    </div>
  );
};

export default Team;
