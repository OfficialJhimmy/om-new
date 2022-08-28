import React from "react";
import ReusableBanner from "../../component/Banner/ReusableBanner";
import bannerinsight from "../../assets/images/insight-banner.jpg";
import BlogInsight from "../../component/Blog/BlogInsight";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";
import Subscribe from "../../component/Subscribe/Subscribe";

const Insights = () => {
  return (
    <>
      <Navbar />
      <ReusableBanner
        src={bannerinsight}
        title="Our Thoughts"
        paragraph="Ideas and Insights to inspire you on your journey. Find out what matters most to us, today and in the future."
      />
      <BlogInsight />
      <Subscribe/>
      <Footer />
    </>
  );
};

export default Insights;
