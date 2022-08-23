import React from "react";
import ReusableBanner from "../../component/Banner/ReusableBanner";
import bannerauditing from "../../assets/images/banner-services.jpg";
import video1 from "../../assets/videos/video-3-web.webm";
import video1sub from "../../assets/videos/video-3-new.mp4";
import image1 from "../../assets/images/image-8.webp";
import about1 from "../../assets/images/image 64.png";
import "./index.css";
import GetStarted from "../../component/GetStarted/GetStarted";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";

const Consulting = () => {
  return (
    <>
    <Navbar/>
      <ReusableBanner
        src={bannerauditing}
        title="Consulting"
        paragraph="We have the Insight to Address Difficult Business Problems and
        Profer a Solution"
      />
      <div className="services__details">
        <div className="reusable__grid--top">
          <div className="reusable__grid--asset">
            <video autoPlay loop muted>
              <source src={video1} type="video/webm" />
              <source src={video1sub} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <img src={image2} alt="Our Office" /> */}
          </div>
          <div className="reusable__grid--content">
            <h2>
              We have the Insight to Address Difficult Business Problems and
              Profer a Solution
            </h2>
            <p>
              With constant global market upheavals, distortions, and
              unpredictability, business owners must guarantee that cutting-edge
              skills and insights meet their strategic and operational needs.
            </p>
          </div>
        </div>
        <div className="reusable__grid--bottom">
          <div className="reusable__grid--bottom-content">
            <h2>Our work speak for itself</h2>
            <p>
              O.M. Associates has the ability to address difficult business
              problems and provide answers to problems in internal processes,
              new business strategy and implementation, and funding to reflect
              your desired future. Through strategic and intelligent insights,
              we can assess, deliver, and implement your business plan,
              resulting in business outcomes and continuing growth. Any
              organization's human capital is a valuable asset. Through industry
              insights, research, and analytics, we can improve efficiency and
              value delivery.
            </p>
          </div>
          <div className="reusable__grid--bottom-asset">
            <img src={image1} alt="Audit" />
            <img src={about1} alt="Our office" className="u-margin-top" />
          </div>
        </div>
      </div>
      <GetStarted />
      <Footer />
    </>
  );
};

export default Consulting;
