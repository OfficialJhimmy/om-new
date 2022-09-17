import React from "react";
import Slider from "react-slick";
// import client1 from "../../assets/images/Group (1).png";
// import client2 from "../../assets/images/Group (2).png";
// import client3 from "../../assets/images/Group (3).png";
// import client4 from "../../assets/images/Group (4).png";
// import client5 from "../../assets/images/Group (5).png";
// import client6 from "../../assets/images/Group (6).png";

import lirs from '../../assets/images/lirs.webp'
import ogirs from '../../assets/images/ogirs.webp'
import oyirs from '../../assets/images/oyirs.webp'
import odirs from '../../assets/images/odirs.webp'
import osirs from '../../assets/images/osirs.webp'
import kwirs from '../../assets/images/kwirs.webp'
import kgirs from '../../assets/images/kgirs.webp'
import crrs from '../../assets/images/crirs.webp'
import birs from '../../assets/images/birs.webp'
import ktirs from '../../assets/images/ktirs.webp'
import edirs from '../../assets/images/edirs.webp'
import haggai from '../../assets/images/haggai.webp'
import kc from '../../assets/images/kc.webp'
import premier from '../../assets/images/premier.webp'
import forever from '../../assets/images/forever.webp'
import neolife from '../../assets/images/neolife.webp'
import ibbl from '../../assets/images/ibbl.webp'
import rvirs from '../../assets/images/rvirs.webp'
import "./Clients.css";

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
          <img src={lirs} alt="Client Logo" />
        </div>
        <div>
          <img src={ogirs} alt="Client Logo" />
        </div>
        <div>
          <img src={oyirs} alt="Client Logo" />
        </div>
        <div>
          <img src={odirs} alt="Client Logo" />
        </div>
        <div>
          <img src={osirs} alt="Client Logo" />
        </div>
        <div>
          <img src={kwirs} alt="Client Logo" />
        </div>
        <div>
          <img src={kgirs} alt="Client Logo" />
        </div>
        <div>
          <img src={rvirs} alt="Client Logo" />
        </div>
        <div>
          <img src={crrs} alt="Client Logo" />
        </div>
        <div>
          <img src={birs} alt="Client Logo" />
        </div>
        <div>
          <img src={ktirs} alt="Client Logo" />
        </div>
        <div>
          <img src={edirs} alt="Client Logo" />
        </div>
        <div>
          <img src={haggai} alt="Client Logo" />
        </div>
        <div>
          <img src={kc} alt="Client Logo" />
        </div>
        <div>
          <img src={premier} alt="Client Logo" />
        </div>
        <div>
          <img src={forever} alt="Client Logo" />
        </div>
        <div>
          <img src={neolife} alt="Client Logo" />
        </div>
        <div>
          <img src={ibbl} alt="Client Logo" />
        </div>
      </Slider>
    </div>
  );
};

export default Clients;
