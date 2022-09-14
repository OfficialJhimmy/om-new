import React from "react";
import "./OurIndustries.css";
import seedling from "../../assets/icons/seedling.png";
import consumer from "../../assets/icons/consumer.png";
import socialmedia from "../../assets/icons/social-media.png";
import billards from "../../assets/icons/billiards.png";
import hours from "../../assets/icons/24-hours.png";

const OurIndustries = () => {
  return (
    <section className="industries__container">
      <h2>Our Industries.</h2>
      <p>
        Every successful business strategy is fortified by an in-depth
        understanding of industry dynamics and the competitive landscape in
        which it sits. We spread our tent around the following industries:
      </p>
      <div className="industries__content">
        <div className="parent__industries--child">
          <img src={seedling} alt="industries content" />
          <h3>Agriculture</h3>
          <p>
            The importance of record keeping in agriculture cannot be
            overemphasized. Our clients enjoy accurate and timely specialized
            records of valuation, forecasts, and profitability which provide
            valuable information for the assessment of business performances.
          </p>
        </div>
        <div className="parent__industries--child">
          <img src={consumer} alt="industries content" />
          {/* <h3>Consumer Goods</h3> */}
          <h3>Government</h3>
          <p>
            We support our government clients with their revenue drive and
            inclusion agenda so that in turn they can provide public quality
            services and improve the lives of the citizenry. This was achieved
            by deploying technological support to automate tax returns filing
            and remittance processes{" "}
          </p>
        </div>
        <div className="parent__industries--child">
          <img src={socialmedia} alt="industries content" />
          {/* <h3>Multi-Level Marketing</h3> */}
          <h3>Micro, Small, and Medium Enterprises</h3>
          <p>
            Micro, Small, and Medium Enterprises (MSMEs) are small sized
            entities with specific definition contributing significantly to
            output, employment , exports etc to the economy. We are
            strategically positioned to assist these entities in mitigating the
            financial and accounting challenges faced by this sector of the
            economy.
          </p>
        </div>
        <div className="parent__industries--child">
          <img src={billards} alt="industries content" />
          <h3>Gaming Sector</h3>
          <p>
            We also provide services in the gaming sector of the economy. Our
            clients in the gaming sector have benefited from our expertise and
            vast knowledge in this area of speciliazation.
          </p>
        </div>
        <div className="parent__industries--child">
          <img src={hours} alt="industries content" />
          <h3>Financial Services</h3>
          <p>
            Our clients in the financial services have benefited from our
            capabilities, expertise and relationships with the various
            government agencies in the resolution of tax and other financial
            conflicts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurIndustries;
