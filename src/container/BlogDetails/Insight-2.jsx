import React from "react";
import Button from "../../component/Button/Button";
import "./BlogDetails.css";
import next from "../../assets/icons/next.png";
import blogimage from "../../assets/images/blog-2 big.webp";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";

const Insight2 = () => {
  return (
    <>
      <Navbar />
      <div className="insight-single__container">
        <div className="insight-single__top">
          <img src={blogimage} alt="" />
        </div>
        <div className="insight-single__middle">
          <h3>Economy</h3>
          <h2>Nigeria Economic Outlook</h2>
          <p>
            Nigeria Economy recovery is losing steam. GDP growth has see-sawed
            after a strong start in early summer last year. Over the autumn and
            winter months, activity was hit by disruptions in energy and labour
            supply, and the imposition of ‘Plan B’ restrictions in response to
            the omicron wave. So far this year, the inflationary effects of the
            war in Ukraine and lockdowns in China have added to existing price
            pressures, hitting consumer confidence and activity. High-frequency
            data indicates a broad-based slowdown. Consumer confidence has
            collapsed as people curtail purchasing, with retail sales volumes
            down by 7% since last April (figure 1). Recent purchasing managers
            indices also point to a gradual deceleration in manufacturing
            activity, with new export orders on the decline. We expect this
            weakness to continue into the second quarter. As the government
            winds up its COVID-19 testing programme, health care activity is
            declining. Inflation, which hit a 30-year high in March, is set to
            rise further, with a revision of the government’s energy price cap
            translating into an average 54% rise in household energy bills in
            April (figure 2). This, alongside tax rises that have just come into
            effect, will further squeeze consumer spending power. In fact, the
            government’s Office for Budget Responsibility reckons this fiscal
            year will see inflation rise to a 40-year high, resulting in the
            sharpest squeeze on household disposable incomes since the 1950s.
          </p>
          <div className="insight__span">
            <span>Nigeria</span>
            <span>Consumer</span>
            <span>Economy</span>
          </div>
        </div>
        <div className="insight-single__bottom">
          <Button title="Next" icon={next} url="/insights/3" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Insight2;
