import React from "react";
import "./Banner.css";
import BannerVideo from "../../assets/videos/banner-video.mp4";
import BannerVideoWeb from '../../assets/videos/home-banner-webm.webm'
import Button from "../Button/Button";
import Idea from '../../assets/icons/light-bulb.png'

const Banner = () => {
  return (
    <>
      <div className="banner__hero">
        <video autoPlay loop muted className="banner__video">
          <source src={BannerVideo} type="video/mp4" />
          <source src={BannerVideoWeb} type="video/webm" />
          Your browser does not support the Video tag.
        </video>
        {/* Add Navbar*/}

        <div className="banner__content">
          <h1>
            Leading the Way in <br />
            Financial Services.
          </h1>
          <p>
            We are a team of professionals with years of valuable experiences who are capable of solving complex business issues and provide solutions to financial challenges .
          </p>
          
          <Button title='Our Insights' icon={Idea} url='/insights' />
        </div>
      </div>
    </>
  );
};

export default Banner;
