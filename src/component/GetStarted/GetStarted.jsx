import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./GetStarted.css";
// import video1 from "../../assets/videos/consultant-web.webm";
// import video1sub from "../../assets/videos/consultant.mp4";
import customer from "../../assets/images/new-4.webp";
import { useNavigate } from "react-router-dom";
const GetStarted = () => {
  let navigate = useNavigate();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dtnnv0y",
        "template_9tkw4ao",
        form.current,
        "l0j3ZXjPi7rfUjLGJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="connected__container">
        <h2>
          Write to us, Our customer services are always available 24/7 to attend
          to your needs.
        </h2>
        <div className="connected__container--parent">
          <div className="connected__container--asset">
            {/* <video autoPlay loop muted>
              <source src={video1} type="video/webm" />
              <source src={video1sub} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <img src={customer} alt="Customer support" />
          </div>
          <div className="connected__container--content">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input__box">
                <span>Name</span>
                <input
                  type="text"
                  name="fullName"
                  id=""
                  placeholder="Your Name..."
                  required
                />
              </div>
              <div className="input__box">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Your mailing address..."
                  required
                />
              </div>
              <div className="input__box">
                <span>Phone Number</span>
                <input
                  type="number"
                  name="phone"
                  id=""
                  placeholder="Phone Number..."
                />
              </div>
              <div className="input__box">
                <span>Type a Message</span>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="input__box-button">
                <input
                  type="submit"
                  value="Send 👋"
                  className="btn-input__box"
                />
                {/* <button className="btn-input__box">Send 👋</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
