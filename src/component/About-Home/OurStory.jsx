import React from "react";
import "./AboutHome.css";
import about1 from "../../assets/images/about-2.webp";
import about2 from "../../assets/images/about-1.webp";
import about3 from "../../assets/images/about-3.webp";
import splash from "../../assets/images/Highlight_05 (1).png";

const OurStory = () => {
  return (
    <section className="about__home--container">
      <div className="about__home--left">
        <div className="about__img-top">
          <img src={about1} alt="about-om" className="image-top" />
        </div>
        <div className="about__img-middle">
          <img src={about3} alt="about-om" />
        </div>
        <div className="about__img-bottom">
          <img src={about2} alt="about-om" />
        </div>
      </div>
      <div className="about__home--right">
        <img src={splash} alt="about-om" className="splash-img" />
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
          process design, review, and transformation. Our approach to work is to
          provide long-term results for our clients while also developing
          long-term connections with them. Every one of our clients is a unique
          part of our success narrative, and we handle our deliverables as if
          they were our own. Our incentives are linked with their goals, so we
          benefit just as much as our clients.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
