import React from "react";
import "./ReusableBanner.css";
const ReusableBanner = ({src, title, paragraph}) => {
  return (
    <div>
      <>
        <div className="banner__hero">
          <img src={src} alt="" className="banner__video" />

          <div className="banner__content">
            <h1>
             {title}
            </h1>
            <p>
             {paragraph}
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default ReusableBanner;
