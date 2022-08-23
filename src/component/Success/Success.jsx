import React from "react";
import "./Success.css";
import ButtonOthers from "../Button/ButtonOthers";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";

const Success = () => {
  return (
    <>
      <Navbar />
      <div className="success__container">
        <div className="success__img">
          <h2>🎉</h2>
        </div>
        <div className="success__content">
          <h2>Thank You! Your message was well received</h2>
          <p className="success__firstpara">
            One of our customer service agent will reach out to you shortly!
          </p>
          <p className="success__secondpara">
            Thank you for choosing O.M Associates - "Leading the Way in
            Financial Services"
          </p>
          <ButtonOthers title="Home" url="/" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
