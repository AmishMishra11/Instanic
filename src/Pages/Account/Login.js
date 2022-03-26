import React from "react";
import "./styles.css";
import Account from "../../assets/account.svg";
import UserLogin from "../../Components/User/UserLogin";

function Login() {
  return (
    <main className="account-main">
      <div className="account-container">
        <div className="account-image-container  ">
          <img className="account-image" src={Account} alt="home " />
        </div>

        <UserLogin />
      </div>
    </main>
  );
}

export default Login;
