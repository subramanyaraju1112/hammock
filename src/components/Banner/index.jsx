import React from "react";
import "./style.css";
import BannerImg from "../../assets/images/png/banner.png";
import HammockLogo from "../../assets/images/png/hammock-logo.png";

const Banner = () => {
  return (
    <section className="banner-section">
      <img src={BannerImg} />
      <div className="hammock-title">
        <img src={HammockLogo} width={90} height={90} />
      </div>
      <div className="hammock-section flex justify-center items-center">
        <span className="hammock-tagline">Plan Exclusive Holidays</span>
      </div>
    </section>
  );
};

export default Banner;
