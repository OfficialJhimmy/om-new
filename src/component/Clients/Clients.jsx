import React from "react";
import Slider from "react-slick";
import client1 from "../../assets/images/Group (1).png";
import client2 from "../../assets/images/Group (2).png";
import client3 from "../../assets/images/Group (3).png";
import client4 from "../../assets/images/Group (4).png";
import client5 from "../../assets/images/Group (5).png";
import client6 from "../../assets/images/Group (6).png";
import "./Clients.css";

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="clients__container">
      <div className="clients__heading">
        <h2>
          Over 27 revenue authorities and companies are growing with us.
        </h2>
      </div>

      <Slider {...settings}>
        <div>
          <img src={client1} alt="Client Logo" />
        </div>
        <div>
          <img src={client2} alt="Client Logo" />
        </div>
        <div>
          <img src={client3} alt="Client Logo" />
        </div>
        <div>
          <img src={client4} alt="Client Logo" />
        </div>
        <div>
          <img src={client5} alt="Client Logo" />
        </div>
        <div>
          <img src={client6} alt="Client Logo" />
        </div>
      </Slider>
    </div>
  );
};

export default Clients;
