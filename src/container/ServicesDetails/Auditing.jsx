import React from "react";
import ReusableBanner from "../../component/Banner/ReusableBanner";
import bannerauditing from "../../assets/images/banner-random.jpg";
import video1 from "../../assets/videos/video-1.webm";
import video1sub from "../../assets/videos/video-1-sub.mp4";
import image1 from "../../assets/images/image-1.webp";
import about1 from "../../assets/images/about-3.webp";
import "./index.css";
import GetStarted from "../../component/GetStarted/GetStarted";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";
import Subscribe from "../../component/Subscribe/Subscribe";

const Auditing = () => {
  return (
    <>
      <Navbar />
      <ReusableBanner
        src={bannerauditing}
        title="Audit & Assurance"
        paragraph="It is more than just Auditng & Assurance"
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
            <h2>It is more than just Auditng & Assurance</h2>
            <p>
              We provide audit services aimed at improving your financial
              reporting system, gaining a better understanding of your
              organization, and making informed decisions by using a diverse
              collection of talents, experience, and knowledge to provide better
              business insights. With a dedicated workforce, we are constantly
              adjusting our procedures to ensure quality and excellence in
              everything we do.
            </p>
          </div>
        </div>
        <div className="reusable__grid--bottom">
          <div className="reusable__grid--bottom-content">
            <h2>Our work speak for itself</h2>
            <p>
              In today's world of rising complexity and change, having comfort
              and confidence in available data on trust has grown increasingly
              crucial. In terms of economic development, trust is crucial. Our
              Assurance capabilities at O.M. Associates are constantly
              improving. Beyond examining historical events and business
              performance to generate reports, our strategy is proactive. We
              deliver value and information that boost confidence and open
              doors. We deal with complicated accounting and internal control
              concerns.
            </p>
          </div>
          <div className="reusable__grid--bottom-asset">
            <img src={image1} alt="Audit" />
            <img src={about1} alt="Our office" className="u-margin-top" />
          </div>
        </div>
      </div>
      <GetStarted />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Auditing;
