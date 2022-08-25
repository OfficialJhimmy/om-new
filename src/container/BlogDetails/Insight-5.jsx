import React from "react";
import Button from "../../component/Button/Button";
import "./BlogDetails.css";
import next from "../../assets/icons/right-arrow.png";
import blogimage from "../../assets/images/blog-1 big.webp";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navigation/Navbar";

const Insight5 = () => {
  return (
    <>
      <Navbar />
      <div className="insight-single__container">
        <div className="insight-single__top">
          <img src={blogimage} alt="" />
        </div>
        <div className="insight-single__middle">
          <h3>World</h3>
          <h2>A New Globalization Calculus</h2>
          <p>
            With apologies to Mark Twain, the reports of globalization’s death
            are greatly exaggerated. Despite recent and seemingly seismic
            disruptions—a global pandemic, geopolitical hostilities, and
            whatever comes next—it’s unlikely that most companies will retreat
            from the world. However, the nature of globalization has changed,
            and with it, the nature of leaders’ strategic decision-making. We
            asked Deloitte specialists, researchers and economists, and
            academics at US business schools to assess the future of
            globalization and ponder what leading in this new era might entail.
            They told us that today’s unpredictable world requires a new
            calculus. Rather than making decisions based primarily on cost,
            efficiency, and speed, executives now have to give more
            consideration to risk and resilience. Following years of strategic
            decision-making focused on “just in time” delivery, the aim right
            now is “just in case” preparedness. While world events might have
            prompted some vacillations over the years, the overall trajectory of
            globalization has held relatively steady. “Globalization is a big
            concept that is hard to measure,” says Steven Altman, a professor at
            New York University’s Stern School of Business and director of its
            Center for the Future of Management. “People tend to have
            perceptions of globalization that are pretty far from reality.
          </p>
          <div className="insight__span">
            <span>World</span>
            <span>Globalization</span>
            <span>Economy</span>
          </div>
        </div>
        <div className="insight-single__bottom">
          <Button title="Next" icon={next} url="/insights/6" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Insight5;
