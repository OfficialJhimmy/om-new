import React from "react";
import Banner from "../../component/Banner/Banner";
import BlogHome from "../../component/Blog/BlogHome";
import Clients from "../../component/Clients/Clients";
// import AboutHome from "../../component/About-Home/AboutHome";
import OurServices from "../../component/OurServices/OurServices";
import Team from "../../component/Team/Team";
import OurIndustries from "../../component/Our-Industries/OurIndustries";
import Financial from "../../component/Financial/Financial";
import GetStarted from "../../component/GetStarted/GetStarted";
import Footer from "../../component/Footer/Footer";
import Accordion from "../../component/Accordion/Accordion";
import Navbar from "../../component/Navigation/Navbar";
import Subscribe from "../../component/Subscribe/Subscribe";
import OurStory from "../../component/About-Home/OurStory";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Clients />
      <BlogHome />
      <OurStory />
      <OurServices />
      <Team />
      <OurIndustries />
      <Financial />
      <GetStarted />
      <Accordion />
      <Subscribe/>
      <Footer />
    </>
  );
};

export default Home;
