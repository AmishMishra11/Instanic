import React from "react";

import "./styles.css";
import Account from "../../assets/account.svg";
import UserSignup from "../../Components/User/UserSignup";

function Sighup() {
  return (
    <main className="account-main">
      <div className="account-container">
        <div className="account-image-container  ">
          <img className="account-image" src={Account} alt="home " />
        </div>

        <UserSignup />
      </div>
    </main>
  );
}

export default Sighup;
