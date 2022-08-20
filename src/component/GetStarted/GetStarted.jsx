import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div className="getintouch__container">
      <div className="getstarted__child">
        <h2>
          Our framework is a systematic approach to help startups build faster
          without any technology-inclined obstacle.
        </h2>
      </div>
      <div className="getstarted__child--right">
        <h2>Interested?</h2>
        <p>
          If you'd like us to help with your startup idea, or partner on a
          project, get in touch with a member of the team.
        </p>
        <button className="btn-intouch">Get in touch 👋</button>
      </div>
    </div>
  );
};

export default GetStarted;
