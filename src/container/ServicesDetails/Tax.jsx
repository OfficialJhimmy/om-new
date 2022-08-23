import React from "react";
import ReusableBanner from "../../component/Banner/ReusableBanner";
import bannerauditing from "../../assets/images/banner-tax.jpg";
import video1 from "../../assets/videos/video-2-web.webm";
import video1sub from "../../assets/videos/video-new-2.mp4";
import image1 from "../../assets/images/image-10.jpg";
import about1 from "../../assets/images/image-4.webp";
import "./index.css";
import GetStarted from "../../component/GetStarted/GetStarted";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";

const Tax = () => {
  return (
    <>
      <Navbar />
      <ReusableBanner
        src={bannerauditing}
        title="Tax Advisory"
        paragraph="Let us simplify your Tax concerns"
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
            <h2>Let us simplify your Tax concerns</h2>
            <p>
              Because of the complexity of systems and laws, having a solution
              to your tax-related concerns is critical, and we are here to align
              our experience with your demands to provide you with exceptional
              ease of work.
            </p>
          </div>
        </div>
        <div className="reusable__grid--bottom">
          <div className="reusable__grid--bottom-content">
            <h2>Our work speak for itself</h2>
            <p>
              Tax compliance for our clients is ensured by high-quality
              individual and business tax assessment preparation and proactive
              tax planning services. We can assist in reorganizing transactions
              to maximize tax benefits. Our tax services cover the following
              areas:
              <li>Company Income Tax</li>
              <li>Withholding Tax Management</li>
              <li>Indirect Taxes (Value Added Tax and custom taxes)</li>
              <li>Tax strategy and implementation</li>
              <li>Compliance and tax audit support</li>
              <li>Tax Structuring</li>
              <li>Petroleum Profit Tax</li>
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

export default Tax;
