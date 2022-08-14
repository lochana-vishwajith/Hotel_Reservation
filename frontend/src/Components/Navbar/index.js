import React from "react";
import { useNavigate } from "react-router";
import { Bars, Nav, NavLink, NavMenu } from "./NavbarElements";
import Logonav from "../../Assets/Images/PngItem_2553023.png";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLogged");
  const userType = localStorage.getItem("usertype");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      {userType === "admin" ? (
        <Nav>
          <NavLink to="/">
            <img src={Logonav} className="logoNavBar" width={60} height={50} />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to="/adminDash" activeStyle>
              <span className="homeNavTxt">Dashboard</span>
            </NavLink>
            <NavLink to="/adminRoom" activeStyle>
              <span className="accommadationNavTxt">Room Details</span>
            </NavLink>

            <NavLink onClick={() => logOut()} to="/register" activeStyle>
              <span className="accommadationNavTxt">LogOut</span>
            </NavLink>
          </NavMenu>
        </Nav>
      ) : (
        <Nav>
          <NavLink to="/">
            <img src={Logonav} className="logoNavBar" width={60} height={50} />
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
            {isLoggedIn ? (
              <NavLink onClick={() => logOut()} to="/register" activeStyle>
                <span className="accommadationNavTxt">LogOut</span>
              </NavLink>
            ) : (
              <NavLink to="/register" activeStyle>
                <span className="registerNavTxt">Register/Login</span>
              </NavLink>
            )}
          </NavMenu>
        </Nav>
      )}
    </>
  );
};

export default Navbar;
