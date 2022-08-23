import React from "react";
import Button from "../../component/Button/Button";
import "./BlogDetails.css";
import next from "../../assets/icons/next.png";
import Footer from "../../component/Footer/Footer";
import blogimage from "../../assets/images/blog-new.webp";
import Navbar from "../../component/Navigation/Navbar";

const Insight1 = () => {
  return (
    <>
      <Navbar />
      <div className="insight-single__container">
        <div className="insight-single__top">
          <img src={blogimage} alt="" />
        </div>
        <div className="insight-single__middle">
          <h3>Industries</h3>
          <h2>
            How industries evolve: Interactions, not institutions, drive
            disruptive change
          </h2>
          <p>
            "We’ve all seen it happen. Our industry is humming along with
            business as usual, staying more or less stable for perhaps years at
            a time. Then something erupts onto the scene—a new technology,1 a
            public health crisis, a major geopolitical shift, even a dramatic
            change in fashion preferences3—that turns the industry upside down,
            leaving a swath of failed organizations in its wake. If we’re lucky,
            we avoid being disrupted, and we may even thrive in the new state of
            affairs. But what about the organizations that didn’t survive? Why
            didn’t they see the change coming? And if they did, why weren’t they
            able to adapt? Disruption—unanticipated step changes in how an
            industry does business—is one of the main, certainly the most
            dramatic, forms of industry evolution. What’s less evident, though,
            is the underlying mechanism responsible for much of this evolution.
            Whether it’s Blockbuster falling to Netflix or Oracle’s successful
            transition to cloud,4 we tend to ascribe an organization’s failure
            or success in dealing with disruption to attributes of the
            organization itself. They’re too slow or too big or, conversely,
            unusually agile and prepared. But rarely do we dig deeper to ask:
            What are the Blockbusters of the world too slow at and too big for?
            What did Oracle do with all that agility? \n When we examine the way
            industries evolve, time and time again, we find that it’s the
            relationships among organizations—their networks and
            interactions—that speed disruption along or stand in its way.
            Streaming video disrupted Blockbuster because distributing physical
            products requires different institutional relationships from
            distributing virtual products, and the role Blockbuster played in
            the physical supply chain simply did not exist in the virtual one.
            Transitioning to streaming would have required Blockbuster to unpick
            the property and franchising relationships that had hitherto defined
            its operations while simultaneously building new relationships for
            virtual distribution. It’s a prime example of a company where
            institutional relationships that had once been a competitive
            advantage became an insurmountable burden.
          </p>
          <div className="insight__span">
            <span>Accounting</span>
            <span>Consumer</span>
            <span>Economy</span>
          </div>
        </div>
        <div className="insight-single__bottom">
          <Button title="Next" icon={next} url="/insights/2" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Insight1;
