import React from "react";
import "./Career.css";
import ReusableBanner from "../../component/Banner/ReusableBanner";
import Navbar from "../../component/Navigation/Navbar";
import bannerservices from "../../assets/images/banner-industries.jpg";
import Team from "../../component/Team/Team";
import Footer from "../../component/Footer/Footer";
import image1 from "../../assets/images/image-1.webp";
import about1 from "../../assets/images/about-3.webp";

const Career = () => {
  return (
    <>
      <Navbar />
      <ReusableBanner
        src={bannerservices}
        title="Careers"
        paragraph="We create opportunities for you to be well connected
        with your peers globally"
      />
      <section>
        <div className="career__container">
          <div className="career__content">
            <h2>O.M.Associates Career Development</h2>
            <p>
              We create opportunities for you to be well connected
              with your peers globally, thereby fostering a shared sense of
              belonging . Opportunities will be available to grow your career
              from starters as trainees to professional qualification. You will
              be well guided by experienced professionals in making choices in
              career opportunities for meaningful impacts in your world and with
              prosperous a future.
            </p>
          </div>
          <div className="content--bottom--asset">
            <img src={image1} alt="Audit" />
            <img src={about1} alt="Our office" className="u-margin-top" />
          </div>
        </div>
      </section>
      <Team />
      <Footer />
    </>
  );
};

export default Career;
