import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <section className="nav-section">
      <ul className="container nav-items flex justify-between mx-auto py-4">
        <li className="nav-links">Home</li>
        <li className="nav-links">Holidays</li>
        <li className="nav-links">Corporates</li>
        <li className="nav-links">Experiences</li>
        <li className="nav-links">Weddings</li>
        <li className="nav-links">Family</li>
      </ul>
    </section>
  );
};

export default Navbar;
