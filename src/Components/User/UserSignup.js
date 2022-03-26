import React from "react";
import "./styles.css";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { useAuth } from "../../Contexts/AuthContext";

import { addNewUser } from "../../Call-Apis/addNewUser";

function UserSignup() {
  const EMAIL_REGEX = new RegExp(
    "^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$"
  );

  const Navigate = useNavigate();

  const { dispatchAuth } = useAuth();

  const [tempUserDetail, setTempUserDetail] = useState({
    tempFirstName: "",
    tempLastName: "",
    tempEmail: "",
    tempPassword: "",
  });

  const { tempFirstName, tempLastName, tempEmail, tempPassword } =
    tempUserDetail;

  const handleChange = (e) => {
    setTempUserDetail({
      ...tempUserDetail,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="userAuth-main-container">
      <main className="userAuth-container">
        <h1>signup</h1>

        <div className="firstName">
          <label htmlFor="firstName-id">
            <h3>FirstName </h3>
          </label>
          <input
            className="input-field"
            type="text"
            id="firstName-id"
            placeholder="FirstName"
            name="tempFirstName"
            onChange={handleChange}
          />
        </div>
        <div className="lastName">
          <label htmlFor="lastName-id">
            <h3>LastName </h3>
          </label>
          <input
            className="input-field"
            type="text"
            id="lastName-id"
            placeholder="LastName"
            name="tempLastName"
            onChange={handleChange}
          />
        </div>

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
            onChange={handleChange}
          />
        </div>

        <div className="login-extra">
          <label>
            <input type="checkbox" />I accept all Terma & Conditions
          </label>
        </div>

        <button
          className="signup-btn"
          onClick={() =>
            tempFirstName && tempLastName && tempEmail && tempPassword
              ? !EMAIL_REGEX.test(tempEmail)
                ? alert("Please Enter Valid Email")
                : addNewUser(
                    tempFirstName,
                    tempLastName,
                    tempEmail,
                    tempPassword,
                    dispatchAuth,
                    Navigate
                  )
              : alert("Please fill all the fields")
          }
        >
          Signup
        </button>
        <button className="signup-login-btn" onClick={() => Navigate("/login")}>
          Already have an account?
        </button>
      </main>
    </div>
  );
}

export default UserSignup;
