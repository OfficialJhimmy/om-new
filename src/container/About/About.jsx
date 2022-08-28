import React from "react";
import ReusableBanner from "../../component/Banner/ReusableBanner";
import bannerabout from "../../assets/images/insight-banner.jpg";
import OurStory from "../../component/About-Home/OurStory";
import Values from "../../component/Values/Values";
import Contact from "../../component/Contact/Contact";
import Team from "../../component/Team/Team";
import Accordion from "../../component/Accordion/Accordion";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";
import Subscribe from "../../component/Subscribe/Subscribe";

const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <ReusableBanner
        src={bannerabout}
        title="This is Who we are & What we do!"
        paragraph="Our experiences and knowledge gained in various managerial jobs across sectors have been extremely valuable in providing high-quality service."
      />
      <OurStory />
      <Values />
      <Contact />
      <Team />
      <Accordion />
      <Subscribe />
      <Footer />
    </>
  );
};

export default About;
