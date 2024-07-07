import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="nav_items">Portfolio</div>
        <div className="right">
          <NavLink to="home" className="nav_items">Home</NavLink>
          <NavLink to="Qualification" className="nav_items">Qualification</NavLink>
          <NavLink to="skill" className="nav_items">Skills</NavLink>
          <NavLink to="project" className="nav_items">Projects</NavLink>
          <NavLink to="contact" className="nav_items">Contact</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
