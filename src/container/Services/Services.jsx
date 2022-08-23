import React from "react";
import ReusableBanner from "../../component/Banner/ReusableBanner";
import bannerservices from "../../assets/images/banner-industries.jpg";
import OurServices from "../../component/OurServices/OurServices";
import Financial from "../../component/Financial/Financial";
import Accordion from "../../component/Accordion/Accordion";
import Footer from "../../component/Footer/Footer";
import GetStarted from "../../component/GetStarted/GetStarted";
import Navbar from "../../component/Navigation/Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      <ReusableBanner
        src={bannerservices}
        title="This is what We are all about!"
        paragraph="When your people get up every day wanting to come to work, success happens, we help you to ensure everyone is in the right jobs, with the right tool"
      />
      <OurServices />
      <Financial />
      <GetStarted />
      <Accordion />
      <Footer />
    </>
  );
};

export default Services;
