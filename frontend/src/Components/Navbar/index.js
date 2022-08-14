import React from "react";
import { Bars, Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLogged");
  const userType = localStorage.getItem("usertype");
  return (
    <>
      {userType === "customer" ? (
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
            {isLoggedIn ? null : (
              <NavLink to="/register" activeStyle>
                <span className="registerNavTxt">Register/Login</span>
              </NavLink>
            )}
          </NavMenu>
        </Nav>
      ) : (
        <Nav>
          <NavLink to="/">
            <img
              src="https://www.designhill.com/tools/logo-maker"
              className="logoNavBar"
            />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to="/adminDash" activeStyle>
              <span className="homeNavTxt">Dashboard</span>
            </NavLink>
            <NavLink to="/accommadation" activeStyle>
              <span className="accommadationNavTxt">Room Details</span>
            </NavLink>

            <NavLink to="/accommadation" activeStyle>
              <span className="accommadationNavTxt">LogOut</span>
            </NavLink>
          </NavMenu>
        </Nav>
      )}
    </>
  );
};

export default Navbar;
