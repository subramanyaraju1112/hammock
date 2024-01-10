import React from "react";
import "./style.css";
import Goa from "../../assets/images/png/goa-orchid.png";
import Chikkamagaluru from "../../assets/images/png/chikkamagaluru.png";
import Munnar from "../../assets/images/png/munnar.png";

const Corporate = () => {
  const pictures = [
    {
      id: 1,
      img: Goa,
      text: "Goa Tour Package-Royal Orchid Beach Resort",
    },
    {
      id: 2,
      img: Chikkamagaluru,
      text: "Chikkamagaluru Tour Package",
    },
    {
      id: 3,
      img: Munnar,
      text: "Munnar Tour Package - Nature's",
    },
  ];
  return (
    <section>
      <div className="container mx-auto py-[70px] flex flex-col gap-10">
        <div>
          <span className="corporate-text">
            Offers for Corporate{" "}
            <span className="employees-text">employees</span>
          </span>
        </div>
        <div className="corporate-wrapper flex justify-between">
          {pictures.map((picture) => (
            <div className="offers-image" key={picture.id}>
              <img src={picture.img} />
              <div className="offers-content">
                <span className="offers-text">{picture.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Corporate;
