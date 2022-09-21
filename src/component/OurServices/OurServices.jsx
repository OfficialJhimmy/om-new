import React from "react";
import "./OurServices.css";
import normal from "../../assets/images/normal.png";
import budget from "../../assets/icons/budget.png";
import research from "../../assets/icons/research.png";
import team from "../../assets/icons/team.png";
import creative from "../../assets/icons/creative.png";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <section className="ourservices__home">
      <div className="ourservices__grid--left">
        <div className="ourservices__item">
          <Link to="/audit">
            <img src={research} alt="our-services" />
            <h2 className="ourservices__heading">Audit & Assurance</h2>
            <p>
              We provide audit services targeted at enhancing your financial
              reporting system, better understanding of your business and making
              informed decisions through access to diversity of skillsets,
              experience and knowledge providing better insights for your
              business.
            </p>
          </Link>
        </div>
        <div className="ourservices__item">
          <Link to="/tax">
            <img src={budget} alt="our-services" />
            <h2 className="ourservices__heading">Tax Auditory</h2>
            <p>
              Quality individual and business tax assessment preparation and
              proactive tax planning services guarantee tax compliance for our
              clients without hindering their core businesses. We also help to
              restructure transactions for maximum tax advantage.
            </p>
          </Link>
        </div>
        <div className="ourservices__item">
          <Link to="/consulting">
            <img src={team} alt="our-services" />
            <h2 className="ourservices__heading">Consulting</h2>
            <p>
              O.M. Associates has capability to solve complex business issues
              and provide solutions to the challenges in your internal
              processes, new business strategy and implementation, financing to
              reflect your envisioned future.
            </p>
          </Link>
        </div>
        <div className="ourservices__item">
          <Link to='/cfo'>
            <img src={creative} alt="our-services" />
            <h2 className="ourservices__heading">CFO Services</h2>
            <p>
              "The Outsourced CFO". We have a team of professional CFOs with
              years of valuable experiences across the industries. OMA CFO
              Service is setup to provide the MSMEs with a best-in-class
              strategic finance function.
            </p>
          </Link>
        </div>
      </div>
      <div className="ourservices__grid--right">
        <h2>Our Services.</h2>
        <img src={normal} alt="Woman Steps" />
      </div>
    </section>
  );
};

export default OurServices;
