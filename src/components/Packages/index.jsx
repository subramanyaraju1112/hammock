import React from "react";
import "./style.css";
import Reward from "../../assets/images/png/reward-employees.png";
import Deals from "../../assets/images/png/deals.png";
import International from "../../assets/images/png/international-holidays.png";
import Customize from "../../assets/images/png/customize-holidays.png";
import Outdoor from "../../assets/images/png/outdoor.png";

const Packages = () => {
  const pictures = [
    {
      id: 1,
      img: Reward,
      text: "Reward your Employees",
    },
    {
      id: 2,
      img: Deals,
      text: "Deals",
    },
    {
      id: 3,
      img: International,
      text: "International Holidays",
    },
    {
      id: 4,
      img: Customize,
      text: "Customize My Holidays",
    },
    {
      id: 5,
      img: Outdoor,
      text: "Fun outdoor Activities",
    },
  ];
  return (
    <section className="packages-section">
      <div className="container mx-auto py-[90px]">
        <div className="packages-content flex flex-wrap justify-between">
          {pictures.map((picture) => (
            <div className="flex flex-col items-center gap-3" key={picture.id}>
              <img src={picture.img} />
              <span className="text-center">{picture.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
