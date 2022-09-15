import React from "react";
import mrom from "../../assets/images/mrom-watch.webp";
import diamond from "../../assets/images/diamond.jpg";
import './AboutHome.css'

const OurStory = () => {
  return (
    <section className="about__home--container">
      <div className="about__home--left">
        <img src={mrom} alt="managing partner" className="about-managing" />
        <img src={diamond} alt="diamond" className="about--img" />
      </div>
      <div className="about__home--right">
        <h2 className="heading--about">Our Story</h2>
        <p className="paragraph-about">
          O.M. ASSOCIATES was founded in June 2005 by a group of professionals
          with decades of experience and expertise in a variety of fields. Our
          experiences and knowledge gained in various managerial jobs across
          sectors have been extremely valuable in providing high-quality
          service. Based on best practices, ethics, and a passion for meeting
          and exceeding clients' expectations, we have built and maintained an
          unrivaled reputation for excellent consulting services in numerous
          fields of business and human endeavor. We're also known for our
          competence in financial/accounting reporting, filing required returns
          (NSE, SEC, CAC), internal/external audit and investigations, risk
          management, systems (installation, review, and maintenance), and
          process design, review, and transformation.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
