import React from "react";
import ReusableBanner from "../../component/Banner/ReusableBanner";
import bannerauditing from "../../assets/images/banner-industries.jpg";
import video1 from "../../assets/videos/video-2.webm";
import video1sub from "../../assets/videos/video-2-sub.mp4";
import image11 from "../../assets/images/image-11.jpg";
import about1 from "../../assets/images/image-5.webp";
import "./index.css";
import GetStarted from "../../component/GetStarted/GetStarted";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";
import Subscribe from "../../component/Subscribe/Subscribe";

const Cfo = () => {
  return (
    <>
      <Navbar />
      <ReusableBanner
        src={bannerauditing}
        title="CFO SERVICES (The Outsourced CFO)"
        paragraph="This service targets the Micro Small Medium Enterprises and the
        “Finance Function Challenge”"
      />
      <div className="services__details">
        <div className="reusable__grid--top">
          <div className="reusable__grid--asset">
            <video autoPlay loop muted playsInline class>
              <source src={video1} type="video/webm" />
              <source src={video1sub} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <img src={image2} alt="Our Office" /> */}
          </div>
          <div className="reusable__grid--content">
            <h2>CFO Services (The Outsourced CFO)</h2>
            <p>
              Micro, small, and medium-sized businesses (MSMEs) are critical in
              developing economies, and they face the following challenges: Poor
              capacity building/infrastructure, limited access to and cost of
              money Unskilled staff, limited access to finance professionals,
              poor leadership and a lack of effective management techniques,
              poor or non-existent record keeping and financial reporting, and
              inadequate planning owing to a lack of relevant data and
              analytics. We have a team of experienced CFOs with years of
              expertise in various sectors. By aiding customers with business
              planning, providing regular management accounts, identifying and
              reporting on important business drivers, and offering key insights
              on business performance, the OMA CFO Service is designed to
              provide MSMEs with a best-in-class strategic finance function.
            </p>
          </div>
        </div>
        <div className="reusable__grid--bottom">
          <div className="reusable__grid--bottom-content">
            <h2>Finance Function Challenge</h2>
            <p>
              Finance Function Challenge: We work closely with our clients to
              handle their financial functions. Clients are able to focus on
              their core strengths while knowing that all financial aspects are
              being properly managed by us.
            </p>
          </div>
          <div className="reusable__grid--bottom-asset">
            <img src={image11} alt="Audit" />
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

export default Cfo;
