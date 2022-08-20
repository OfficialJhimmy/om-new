import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function ButtonOthers({ title, url }) {
  return (
    <div className="buttonothers__wrapper">
      <Link to={url}>
        <button>{title} </button>
      </Link>
    </div>
  );
}

export default ButtonOthers;
