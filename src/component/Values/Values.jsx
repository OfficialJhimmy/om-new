import React from "react";
import "./Values.css";
import vision from "../../assets/icons/vision.png";
import mission from "../../assets/icons/target.png";
import honesty from '../../assets/icons/ethics.webp'
import excellence from '../../assets/icons/excellence.webp'
import innovation from '../../assets/icons/bulb.webp'
import team from '../../assets/icons/united.webp'

function Values() {
  return (
    <section className="values__container">
      <h2>Our Values.</h2>
      <div className="values__core--parent">
        <div className="values__core--child">
          <img src={honesty} alt="core-values" />
          <h2>Integrity</h2>
        </div>
        <div className="values__core--child">
        <img src={excellence} alt="core-values" />
          <h2>Excellence</h2>
        </div>
        <div className="values__core--child">
        <img src={innovation} alt="core-values" />
          <h2>Innovation</h2>
        </div>
        <div className="values__core--child">
        <img src={team} alt="core-values" />
          <h2>Team</h2>
        </div>
      </div>
      <div className="values__parent">
        <div className="values__child-left">
          <div className="values__child-heading">
            <h3>Our Mission </h3>
            <img src={mission} alt="icon" />
          </div>
          <p>
            "To provide a top-notch professional services to our clients and surpass the expectations of all our stakeholders"
          </p>
        </div>
        <div className="values__child-right">
          <div className="values__child-heading">
            <h3>Our Vision </h3>
            <img src={vision} alt="icon" />
          </div>
          <p>
            "To be a world-class solution provider of professional services in accounting, audit and taxation"
          </p>
        </div>
      </div>
    </section>
  );
}

export default Values;
