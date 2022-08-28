import React from "react";
import "./Subscribe.css";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  let navigate = useNavigate();
  const submithandler = () => {
    navigate("/success");
  };
  return (
    <section className="subscribe-container">
      <h2 className="subscribe-heading">
        Interested in getting ur weekly newletter? Why not Subscribe to our
        Newsletter?
      </h2>
      <form action="" >
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your mailing address..."
          required
          className="subscribe-email"
        />
        <input type="button" value="Subscribe" className="input__sub-btn" onClick={() => submithandler()}/>
      </form>
    </section>
  );
};

export default Subscribe;
