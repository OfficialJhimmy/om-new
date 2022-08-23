import React from "react";
import Button from "../../component/Button/Button";
import "./BlogDetails.css";
import next from "../../assets/icons/next.png";
import blogimage from "../../assets/images/blog-1 big.webp";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";

const Insight3 = () => {
  return (
    <>
      <Navbar />
      <div className="insight-single__container">
        <div className="insight-single__top">
          <img src={blogimage} alt="" />
        </div>
        <div className="insight-single__middle">
          <h3>Economy</h3>
          <h2>Weekly Global Economic Update</h2>
          <p>
            The biggest risk to Europe’s economy stems from uncertainty about
            the flow of natural gas. A major disruption of gas in the coming
            winter could push Europe into recession. Last month, Gazprom, the
            state-run Russian gas company, reduced the flow of gas in the Nord
            Stream 1 pipeline by more than is usually the case for summer
            maintenance. It said this was done to repair a turbine made in
            Germany, which sent the equipment to Canada for repair work. Based
            on existing sanctions, there was uncertainty as to whether the
            turbine would be returned by Canada. However, the Canadian
            government noted that Germany would suffer “very significant
            hardship” if the pipeline is not repaired and, therefore, decided to
            return the turbine. This means that the flow of gas ought to rebound
            quickly. Ukrainian president Zelensky criticized the Canadian
            decision, saying that it will help Russia.\n Meanwhile, Germany’s
            government has said it does not accept the Gazprom explanation for
            the curtailment of gas flows and fears that more trouble is brewing.
            A German government spokeswoman said, “We don’t see technical
            reasons. Our information is that this turbine is a replacement
            turbine that was earmarked for use in September but, again, we are
            doing everything to take away possible pretexts for the Russia
            side.” Gazprom has said that the recent disruption of supplies is
            beyond its control. There is a debate as to what Russia might do
            next, and why. If Russia halts or significantly reduces deliveries
            of gas to Germany during the winter months, the ostensible reason
            would be to undermine German determination to maintain sanctions, as
            well as to undermine German unity with other EU members. However,
            doing so might damage Russia’s reputation for being a reliable
            business partner and would likely cause an acceleration in German
            efforts to reduce dependence on Russia. Thus, the counterargument is
            that Russia has reduced deliveries as a warning but does not intend
            to fully upset its relationship with Germany. The well-known
            strategist Ian Bremmer says that, if Russia didn’t care about its
            future relations with Germany, it would not create implausible
            excuses for cutting gas deliveries. Time will tell. In any event,
            the European Commission says it does not expect gas flows to resume
            as scheduled and will plan accordingly.
          </p>
          <div className="insight__span">
            <span>Accounting</span>
            <span>Consumer</span>
            <span>Economy</span>
          </div>
        </div>
        <div className="insight-single__bottom">
          <Button title="Next" icon={next} url="/insights/4" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Insight3;
