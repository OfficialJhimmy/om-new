import React from "react";
import "./Financial.css";
import industriesvideo from "../../assets/videos/lady-chart.mp4";
import { FiRefreshCw } from "react-icons/fi";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdSupport } from "react-icons/md";

const Financial = () => {
  return (
    <div className="financial__container">
      <div className="financial__content">
        <h2>
          We are Here to Ease <br />
          Your Financial Obstacles
        </h2>
        <p>
          The choice is in your hands: Where do you go to get an advice abiut
          your financial obstacles!!
        </p>
        <div className="financial-reasons">
          <div className="reasons--child">
            <div className="reasons--child__left">
              <FiRefreshCw className="reasons--icon" />
            </div>
            <div className="reasons--child__right">
              <h2>Advices and Guides</h2>
              <p>
                With our fast and innovative approach to finances, we make the
                experience enjoyable and professional
              </p>
            </div>
          </div>
          <div className="reasons--child">
            <div className="reasons--child__left">
              <BsSpeedometer2 className="reasons--icon" />
            </div>
            <div className="reasons--child__right">
              <h2>On Time Services</h2>
              <p>
                With our fast and innovative approach to finances, we make the
                experience enjoyable and professional
              </p>
            </div>
          </div>
          <div className="reasons--child">
            <div className="reasons--child__left">
              <MdSupport className="reasons--icon" />
            </div>
            <div className="reasons--child__right">
              <h2>Best Support</h2>
              <p>
                We bring the right people business solutions to challenge
                established thinking and drive transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="financial__content-video">
        <video autoPlay loop muted height="600">
          <source src={industriesvideo} type="video/mp4" />
          Your browser does not support the Video tag.
        </video>
      </div>
    </div>
  );
};

export default Financial;
