import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "../../Components/Aside";
import Nav from "../../Components/Nav";
import Search from "../../Components/Search";
import "./styles.css";
function AuthPage() {
  return (
    <div className="authpage-container">
      <Nav />
      <div className="container-main">
        <Aside />
        <div className="main-card-container">
          <Search />

          {/* new component based on what is selected "default is home" */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
