import React from "react";
import Button from "../../component/Button/Button";
import "./BlogDetails.css";
import next from "../../assets/icons/next.png";
import blogimage from "../../assets/images/blog-random-big.webp";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";
const Insight4 = () => {
  return (
    <>
      <Navbar />
      <div className="insight-single__container">
        <div className="insight-single__top">
          <img src={blogimage} alt="Blog" />
        </div>
        <div className="insight-single__middle">
          <h3>Women</h3>
          <h2>
            Women in the workplace stay with “gender equality leaders,” survey
            finds
          </h2>
          <p>
            Women in the workplace may feel slightly better about their jobs
            than they did last year, but that doesn’t necessarily mean that they
            intend to stay with their employers, Deloitte’s 2022 Women @ Work
            report suggests.\n More than half of the 5,000 women surveyed across
            10 countries said they plan to leave their current employers within
            two years. Additionally, 10% were currently looking for a new job
            with another organization—four percentage points more than in 2021.
            This increase occurred even though respondents were also more likely
            to report higher levels of job satisfaction, slightly better
            work/life balance, and higher feelings of loyalty to their employer,
            compared to those surveyed last year. Looking beyond what may seem
            like contradictory results, a critical takeaway for employers is
            clear: Organizations that foster a respectful and inclusive culture
            see higher levels of employee motivation, productivity, and
            retention. \n Deloitte’s research identified a group of “gender
            equality leaders,” organizations that, according to the women
            surveyed, have created genuinely inclusive cultures that support
            their careers, promote work/life balance, and foster inclusion. We
            also identified a group of “lagging” organizations. The women who
            work for these businesses indicate that their employers have a less
            inclusive, low-trust culture that doesn’t adequately support their
            career progression or work/life balance.
          </p>
          <div className="insight__span">
            <span>Women</span>
            <span>Gender Equality</span>
            <span>Leadership</span>
          </div>
        </div>
        <div className="insight-single__bottom">
          <Button title="Next" icon={next} url="/insights/5" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Insight4;
