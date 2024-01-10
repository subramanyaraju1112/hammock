import React from "react";
import "./style.css";
import Woman from "../../assets/images/png/woman.png";
import Sikkim from "../../assets/images/png/sikkim.png";
import Odisha from "../../assets/images/png/odisha.png";

const Holidays = () => {
  const pictures = [
    {
      id: 1,
      img: Sikkim,
      text: "Darjeeling and Sikkim Tour Package",
    },
    {
      id: 2,
      img: Odisha,
      text: "Odisha Tour Package - Scenic",
    },
  ];
  return (
    <section className="holidays-section">
      <div className="woman-image flex">
        <img src={Woman} />
      </div>
      <div className="container mx-auto py-[70px] flex flex-col gap-10">
        <div>
          <span className="holidays-text">
            Holidays{" "}
            <span className="holidays-headline"> like never before</span>
          </span>
        </div>
        <div className="holidays-wrapper flex gap-10">
          {pictures.map((picture) => (
            <div className="holidays-image">
              <img src={picture.img} />
              <div className="holidays-content">
                <span className="package-text">{picture.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Holidays;
