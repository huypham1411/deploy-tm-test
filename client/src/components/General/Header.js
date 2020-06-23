import React, { useState } from "react";
import Button from "../General/Button";
import Form from "../General/Form";
import Image from "../../assets/Logo.svg";
import "../../styles/components/General/Header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { usrLogout } from "../../action/user-login";
const Header = () => {
  const [appear, setAppear] = useState(false);
  const onLog = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const auth = localStorage.getItem("auth-token"); //google, facebook auto bat form
  return (
    (
      <div className="header">
        <div className="iconImg">
          <Link to = "/">
            <img src={Image} alt="Logo" />
          </Link> 
        </div>
        {!onLog.username || !auth ? (
          <div className="btnLocation">
            <div id="btn1">
              <Button
                name="Login"
                className="header-btn"
                onClick={() => {
                  setAppear(!appear);
                }}
              />
            </div>
            <div id="btn2">
              <Link to="SignUp">
                <Button name="Sign up" className="header-btn" color="#FD5E53" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="btnLocation">
            <div className="usr-name">
            <p>
              Hi,{" "}
              <Link to={{ pathname: "/User", state: { id: onLog.id } }}>{onLog.username}</Link>
            </p>
            </div>
            <Link to="/">
              <Button
                name="Log out"
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  dispatch(usrLogout());
                }}
              />
            </Link>
          </div>
        )}
        {!onLog.username && appear && <Form />}
      </div>
    )
  );
};
export default Header;
