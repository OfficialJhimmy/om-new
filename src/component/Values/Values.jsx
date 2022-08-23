import React from "react";
import "./Values.css";
import vision from "../../assets/icons/vision.png";
import mission from "../../assets/icons/target.png";

function Values() {
  return (
    <section className="values__container">
      <h2>Our Values.</h2>
      <div className="values__parent">
        <div className="values__child-left">
          <div className="values__child-heading">
            <h3>Our Mission </h3>
            <img src={mission} alt="icon" />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            necessitatibus quis non dolores totam, quod commodi quia, recusandae
            voluptatibus tenetur saepe? Voluptates, nam nemo. Maxime modi
            veritatis aspernatur reiciendis ratione, ipsum mollitia similique
            voluptas illum?
          </p>
        </div>
        <div className="values__child-right">
          <div className="values__child-heading">
            <h3>Our Vision </h3>
            <img src={vision} alt="icon" />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            necessitatibus quis non dolores totam, quod commodi quia, recusandae
            voluptatibus tenetur saepe? Voluptates, nam nemo. Maxime modi
            veritatis aspernatur reiciendis ratione, ipsum mollitia similique
            voluptas illum?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Values;
