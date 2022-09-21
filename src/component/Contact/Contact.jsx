import React from "react";
import pin from '../../assets/icons/placeholder.png'
import phone from '../../assets/icons/telephone.png'
import mail from '../../assets/icons/email.png'
import './Contact.css'
const Contact = () => {
  return (
    <section className="contact__container">
      <h2>Get in Touch.</h2>
      <p className="para-contact">Reach out to us with a 24/7 Customer Support</p>
      <div className="contact__parent">
        <div className="contact__content">
          <img src={pin} alt="address icon" />
          <address>
            Suite 12, Ruby Block All Seasons Plaza 24, Lateef Jakande Road
            Agidingbi, Ikeja Lagos, Nigeria
          </address>
        </div>
        <div className="contact__content">
          <img src={phone} alt="Phone icon" />
          <a href="tel:++2348173290200">+234 817 329 0200 / +234 805 787 5517</a>
        </div>
        <div className="contact__content">
          <img src={mail} alt="Email Icon" />
          <a href="mailto:omassociates.consultants@gmail.com">
            omassociates.consultants@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
