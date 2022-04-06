import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { addUser } from "../../Call-Apis/addUser";

import { toast } from "react-toastify";

function UserLogin() {
  const EMAIL_REGEX = new RegExp(
    "^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$"
  );

  const Navigate = useNavigate();

  const { dispatchAuth } = useAuth();

  const [tempUserDetail, setTempUserDetail] = useState({
    tempEmail: "",
    tempPassword: "",
  });

  const { tempEmail, tempPassword } = tempUserDetail;

  const handleChange = (e) => {
    setTempUserDetail({
      ...tempUserDetail,
      [e.target.name]: e.target.value,
    });
  };

  const inputAlert = () => {
    toast.warn("Please fill all the fields", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const validEmail = () => {
    toast.warn("Please Enter Valid Email", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="userAuth-main-container">
      <main className="userAuth-container">
        <h1>Login</h1>

        <div className="email">
          <label htmlFor="email-id">
            <h3>Email </h3>
          </label>
          <input
            className="input-field"
            type="text"
            id="email-id"
            placeholder="name@company.com"
            name="tempEmail"
            value={tempEmail}
            onChange={handleChange}
          />
        </div>

        <div className="password">
          <label htmlFor="password-id">
            <h3>Password </h3>
          </label>
          <input
            className="input-field"
            type="password"
            id="password-id"
            placeholder="**********"
            name="tempPassword"
            value={tempPassword}
            onChange={handleChange}
          />
        </div>

        <div className="login-extra">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>

          <div>Forgot Password</div>
        </div>

        <button
          className="login-btn"
          onClick={() =>
            tempEmail && tempPassword
              ? !EMAIL_REGEX.test(tempEmail)
                ? validEmail()
                : addUser(tempEmail, tempPassword, dispatchAuth, Navigate)
              : inputAlert()
          }
        >
          Login
        </button>

        <button
          className="guest-login-btn"
          onClick={() =>
            setTempUserDetail({
              tempEmail: "test@gmail.com",
              tempPassword: "test",
            })
          }
        >
          Guest credentials
        </button>

        <button
          className="login-signup-btn"
          onClick={() => Navigate("/signup")}
        >
          Create New Account
        </button>
      </main>
    </div>
  );
}

export default UserLogin;
