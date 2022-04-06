import React from "react";
import "./styles.css";
import User from "../../assets/user.svg";

function Profile() {
  const tempFirst = localStorage.getItem("first");
  const tempLast = localStorage.getItem("last");
  const tempEmail = localStorage.getItem("email");

  return (
    <div className="profile-page">
      <div className="user-img">
        <img className="account-image" src={User} alt="home " />
      </div>
      <div className="uesr-info">
        <h1>Profile</h1>

        <h4>First Name: {tempFirst}</h4>
        <h4>Last Name: {tempLast}</h4>
        <h4>Email: {tempEmail}</h4>
      </div>
    </div>
  );
}

export default Profile;
