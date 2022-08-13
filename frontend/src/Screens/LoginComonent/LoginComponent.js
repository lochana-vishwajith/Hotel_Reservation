import React, { useEffect, useState } from "react";

import TextBox from "devextreme-react/text-box";
import "./Login.css";
import { Toast } from "devextreme-react/toast";
import LogoImage from "../../Assets/Images/oie_8ndMsF0hLOiZ.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import loingBackGroud from "../../Assets/Images/loginBac.png";

const LoginComponent = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastmessage, settoastmessage] = useState("");
  const [toastType, settoastType] = useState("");

  const navigate = useNavigate();

  const logInUser = async (e) => {
    e.preventDefault();

    if (userName === "" || password === "") {
      setToastVisible(true);
      settoastmessage("Please fill all the fields");
      settoastType("error");
    } else {
      const details = {
        email: userName,
        password,
      };
      await axios
        .post(`http://localhost:5000/userDetails/login`, details)
        .then((result) => {
          console.log(result);
          localStorage.setItem("userDetails", JSON.stringify(result.data.user));
          localStorage.setItem("usertype", result.data.user.type);
          localStorage.setItem("isLogged", true);
          setToastVisible(true);
          settoastmessage("Login Successfull");
          settoastType("success");
          if (result.data.user.type === "customer") {
            navigate("/");
          } else {
            navigate("/adminDash");
          }
        })
        .catch((err) => {
          console.log(err);
          setToastVisible(true);
          settoastmessage("Login Failed");
          settoastType("error");
        });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-7" id="logImageCol">
          <span className="welcomeTxt">OLIVE GARDEN RESTURANT</span>
          <br />
          <img src={LogoImage} className="logo" />
          <br />
          <center>
            <span className="loginReqTxt">
              Don't have an account? <Link to={"/register"}>Register</Link>
            </span>
          </center>
        </div>
        <div className="col-sm-5" id="logFormCol">
          <div className="card" id="loginCard">
            <label className="regFormTxt">UserName / Email</label>
            <TextBox
              showClearButton={true}
              placeholder="John Smith"
              onValueChange={(val) => setUserName(val)}
            />
            <br />
            <span className="regFormTxt">Password</span>
            <TextBox
              showClearButton={true}
              placeholder="*********"
              onValueChange={(val) => setPassword(val)}
            />

            <br />

            <center>
              <Toast
                visible={toastVisible}
                message={toastmessage}
                type={toastType}
                onHiding={() => setToastVisible(false)}
                displayTime={1500}
              />
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={(e) => logInUser(e)}
              >
                Login
              </button>
              <br />
              <br />
              <span className="forgotPw">
                <Link to="/forgotPw">Forgot Password? </Link>
              </span>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
