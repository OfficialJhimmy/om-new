import React from "react";
import Button from "../../component/Button/Button";
import next from "../../assets/icons/right-arrow.png";
import "./Error404.css";
import Navbar from "../../component/Navigation/Navbar";
import Footer from "../../component/Footer/Footer";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className="error404__container">
        <h2>404</h2>
        <p>Sorry, Page not found, please try other pages.</p>
        <Button title="Home" icon={next} url="/insights/2" />
      </div>
      <Footer />
    </>
  );
};

export default Error404;
