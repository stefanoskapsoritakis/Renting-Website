import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          {/* Logo Here */}
          <img src="" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make this <br />
            the best place to live
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Infomation</span>
          <span className="secondaryText">Crete , Kavousi 1, Greece</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Service</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
