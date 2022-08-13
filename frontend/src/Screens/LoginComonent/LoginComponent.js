import React, { useEffect, useState } from "react";

import TextBox from "devextreme-react/text-box";
import "./Login.css";
import { Toast } from "devextreme-react/toast";
import LogoImage from "../../Assets/Images/oie_8ndMsF0hLOiZ.png";
import { Link } from "react-router-dom";

import loingBackGroud from "../../Assets/Images/loginBac.png";

const LoginComponent = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastmessage, settoastmessage] = useState("");
  const [toastType, settoastType] = useState("");

  const logInUser = () => {
    if (userName === "" || password === "") {
      setToastVisible(true);
      settoastmessage("Please fill all the fields");
      settoastType("error");
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
              onChange={(val) => setUserName(val)}
            />
            <br />
            <span className="regFormTxt">Password</span>
            <TextBox
              showClearButton={true}
              placeholder="*********"
              onChange={(val) => setPassword(val)}
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
                onClick={() => logInUser()}
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
