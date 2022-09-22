import React from "react";
import ReusableBanner from "../../component/Banner/ReusableBanner";
import bannerinsight from "../../assets/images/insight-banner.jpg";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";
import Subscribe from "../../component/Subscribe/Subscribe";
import EventPage from "../../component/EventPage/EventPage";

const Events = () => {
  return (
    <>
      <Navbar />
      <ReusableBanner
        src={bannerinsight}
        title="Our Events"
        paragraph="Ideas and Insights to inspire you on your journey. Find out what matters most to us, today and in the future."
      />
      <EventPage />
      <Subscribe/>
      <Footer />
    </>
  );
};

export default Events;
