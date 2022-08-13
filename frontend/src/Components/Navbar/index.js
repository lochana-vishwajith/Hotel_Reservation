import React from "react";
import { Bars, Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src="https://www.designhill.com/tools/logo-maker"
            className="logoNavBar"
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            <span className="homeNavTxt">Home</span>
          </NavLink>
          <NavLink to="/accommadation" activeStyle>
            <span className="accommadationNavTxt">Accommadation</span>
          </NavLink>
          <NavLink to="/foodBeverages" activeStyle>
            <span className="foodandBNavTxt">Food & Beverages</span>
          </NavLink>
          <NavLink to="/gallery" activeStyle>
            <span className="galleryBNavTxt">Gallery</span>
          </NavLink>
          <NavLink to="/thingsToDo" activeStyle>
            <span className="thingsToDoNavTxt">Things-To-Do</span>
          </NavLink>
          <NavLink to="/register" activeStyle>
            <span className="registerNavTxt">Register/Login</span>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
