import React, { useState } from "react";
import "../../styles/components/SignUp/SignUp.css";
import {Link} from 'react-router-dom';
import bg_signup from "../../assets/tomato-transparent-18.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import {
  faEnvelope,
  faKey,
  faUser,
  faPhone,
  faLocationArrow
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  //code bo sung
  const [address, setAddress] = useState("");
  const [phonenum, setPhonenum] = useState("");
  //
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const signUpFunction = () => {
    if (!check) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: "Please accept the term of Use & Privacy Policy",
      });
      return;
    }
    if (!checkPass()) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: "Password and confirm password not match!",
      })
      return;
    }
    axios
      .post("/SignUp", {
        name,
        email,
        password,
        address,
        phonenum,
      })
      .then((user) => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Sign up success!',
        })
        setName("");
        setEmail("");
        setPassword("");
        setPassword2("");
        setAddress("");
        setPhonenum("");
        setCheck2(true);
        handleClick()
      })
      .catch((err) => {
        const e = err.response.data;
        let s = "";
        for (let i of e) {
          s += i.message;
        }
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: s,
        })
      });
  };


  const history = useHistory();

  const handleClick = () => { 
    history.push("/");
  }

  const checkPass = () => {
    if (password.trim().length === 0 || password2.trim().length === 0)
      return false;
    if (password !== password2) return false;
    return true;
  };
  return (
    <div className="signup_box_container row">
      <div className="signup_box col-lg-6 col-md-12 col-sm-12">
        <div className="container-form">
          <div className="form-header">
            <h1>Sign up</h1>
            <h4>Please fill in this form to create an account </h4>
          </div>
          <div className="input-field">
            <div className="textInput">
              <FontAwesomeIcon icon={faUser} />
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            {/* them code bo sung */}
            <div className="textInput">
            <FontAwesomeIcon icon={faLocationArrow} />
              <input
                id="address"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>
            <div className="textInput">
            <FontAwesomeIcon icon={faPhone} />
              <input
                id="phonenum"
                type="text"
                placeholder="Phone"
                value={phonenum}
                onChange={(e) => setPhonenum(e.target.value)}
              ></input>
            </div>
            <div className="textInput">
            <FontAwesomeIcon icon={faKey} />
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            <div className="textInput">
            <FontAwesomeIcon icon={faKey} />
              <input
                type="password"
                placeholder="Password confirm"
                id="confirm-password"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
              ></input>
            </div>
            <div className="textInput">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="email"
                type="text"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="textInput">
              <input
                type="checkbox"
                checked={check}
                onChange={() => setCheck(!check)}
              />
              <p> Accept the term of Use & Privacy Policy </p>
            </div>
          </div>

          <div className="signup_btn">
            <button className="btn-ok" onClick={signUpFunction}>
                { check && checkPass() && check2 ? <Link to='/'>Sign up</Link> : "Sign up"}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-signup col-lg-6 col-md-12 col-sm-12">
        <img className="bg-image" src={bg_signup} alt="hero-img"></img>
      </div>
    </div>
  );
};

export default SignUp;
