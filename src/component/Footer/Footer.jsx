import React from "react";
import { Link } from "react-router-dom";
import newlogo from "../../assets/icons/new-logo.png";
import { FaFacebookSquare, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__children">
        <div className="footer__child-start">
          <img src={newlogo} alt="Logo" />
          <address>
            Suite 12, Ruby Block All Seasons Plaza 24, Lateef Jakande Road
            Agidingbi, Ikeja Lagos, Nigeria
          </address>
          <div className="footer__social-icons">
            <a
              href="https://facebook.com/officialjhimmy"
              className="social-media__links"
            >
              <FaFacebookSquare className="footer--icon" />
            </a>
            <a
              href="https://linkedin.com/officialjhimmy"
              className="social-media__links"
            >
              <FaLinkedinIn className="footer--icon" />
            </a>
            <a
              href="https://instagram.com/officialjhimmy"
              className="social-media__links"
            >
              <FaInstagram className="footer--icon" />
            </a>
            <a href="mailto:omassociates.consultants@gmail.com">
              <BiMailSend className="footer--icon" />
            </a>
          </div>
        </div>
        <div className="footer__child">
          <h3>Services</h3>
          <Link to="/audit">
            <span>Audit & Assurance</span> <BsArrowUpRight />
          </Link>
          <Link to="/tax">
            <span>Tax Auditory</span> <BsArrowUpRight />
          </Link>
          <Link to="/consulting">
            <span>Consulting</span> <BsArrowUpRight />
          </Link>
          <Link to="/cfo">
            <span>CFO Services</span> <BsArrowUpRight />
          </Link>
        </div>
        <div className="footer__child">
          <h3>Industries</h3>
          <Link to="/industries">
            <span>Agriculture</span> <BsArrowUpRight />
          </Link>
          <Link to="/industries">
            <span>Consumer Goods</span> <BsArrowUpRight />
          </Link>
          <Link to="/industries">
            <span>Multi-Level Marketing</span> <BsArrowUpRight />
          </Link>
          <Link to="/industries">
            <span>Gaming Sector</span> <BsArrowUpRight />
          </Link>
          <Link to="/services">
            <span>Services</span> <BsArrowUpRight />
          </Link>
        </div>
        <div className="footer__child">
          <h3>WHT APP</h3>
          <Link to="/whtapp">
            <span>OMA WHTAPP</span> <BsArrowUpRight />
          </Link>
          {/* <Link to="/">
            <span>Privacy Policy</span> <BsArrowUpRight />
          </Link>
          <Link to="/">
            <span>Disclosures</span> <BsArrowUpRight />
          </Link> */}
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <h3>Copyright &#169;2022. </h3>
          <p>
            O.M. ASSOCIATES was founded in June 2005 by a group of professionals
            with decades of experience and expertise in a variety of fields. Our
            experiences and knowledge gained in various managerial jobs across
            sectors have been extremely valuable in providing high-quality
            service. Based on best practices, ethics, and a passion for meeting
            and exceeding clients' expectations, we have built and maintained an
            unrivaled reputation for excellent consulting services in numerous
            fields of business and human endeavor. We're also known for our
            competence in financial/accounting reporting, filing required
            returns (NSE, SEC, CAC), internal/external audit and investigations,
            risk management, systems (installation, review, and maintenance),
            and process design, review, and transformation. Our approach to work
            is to provide long-term results for our clients while also
            developing long-term connections with them.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
