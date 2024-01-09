import React from "react";
import "./style.css";
import Coorg from "../../assets/images/png/coorg.png";
import Goa from "../../assets/images/png/goa.png";
import Madurai from "../../assets/images/png/madurai.png";

const Experience = () => {
  const pictures = [
    {
      id: 1,
      img: Coorg,
      text: "Embark on the Kodavu Heritage Trail in Coorg",
    },
    {
      id: 2,
      img: Goa,
      text: "Where Luxury meets Tranquillity in Goa",
    },
    {
      id: 3,
      img: Madurai,
      text: "Hammock Trails - Once upon a Madurai",
    },
  ];

  return (
    <section className="experience-section">
      <div className="container mx-auto py-[70px] flex flex-col gap-10">
        <div>
          <span className="experience-headline">Experience something new</span>
        </div>
        <div className="experience-wrapper flex justify-between">
          {pictures.map((picture) => (
            <div className="experience-image" key={picture.id}>
              <img src={picture.img} />
              <div className="experience-content">
                <span className="experience-text">{picture.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Experience;
