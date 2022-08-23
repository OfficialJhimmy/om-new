import React from "react";
import ReusableBanner from "../../component/Banner/ReusableBanner";
import bannerservices from "../../assets/images/banner-consumer.jpg";
import Navbar from "../../component/Navigation/Navbar";
import OurIndustries from "../../component/Our-Industries/OurIndustries";
import GetStarted from "../../component/GetStarted/GetStarted";
import Footer from "../../component/Footer/Footer";
const Industries = () => {
  return (
    <>
      <Navbar />
      <ReusableBanner
        src={bannerservices}
        title="Our Industries"
        paragraph="When your people get up every day wanting to come to work, success happens, we help you to ensure everyone is in the right jobs, with the right tool"
      />
      <OurIndustries />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Industries;
