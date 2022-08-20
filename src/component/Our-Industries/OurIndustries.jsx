import React from "react";
import "./OurIndustries.css";
import seedling from "../../assets/icons/seedling.png";
import consumer from "../../assets/icons/consumer.png";
import socialmedia from "../../assets/icons/social-media.png";
import billards from "../../assets/icons/billiards.png";
import hours from "../../assets/icons/24-hours.png";

const OurIndustries = () => {
  return (
    <section className="industries__container">
      <h2>Our Industries.</h2>
      <p>
        Every successful business strategy is fortified by an in-depth
        understanding of industry dynamics and the competitive landscape in
        which it sits. We spread our tent around the following industries:
      </p>
      <div className="industries__content">
        <div className="parent__industries--child">
          <img src={seedling} alt="industries content" />
          <h3>Agriculture</h3>
        </div>
        <div className="parent__industries--child">
          <img src={consumer} alt="industries content" />
          <h3>Consumer Goods</h3>
        </div>
        <div className="parent__industries--child">
          <img src={socialmedia} alt="industries content" />
          <h3>Multi-Level Marketing</h3>
        </div>
        <div className="parent__industries--child">
          <img src={billards} alt="industries content" />
          <h3>Gaming Sector</h3>
        </div>
        <div className="parent__industries--child">
          <img src={hours} alt="industries content" />
          <h3>Services</h3>
        </div>
      </div>
    </section>
  );
};

export default OurIndustries;
