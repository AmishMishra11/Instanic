import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../../Components/Aside";
import Filters from "../../Components/Filters";
import Nav from "../../Components/Nav";
import Search from "../../Components/Search";

import "./styles.css";
function AuthPage() {
  const [isFilteron, setFilteron] = useState(false);
  return (
    <div className={`authpage-container  ${isFilteron && "overlay"}`}>
      <Nav />
      <div className="container-main">
        <Aside />
        <div className="main-card-container">
          <Search setFilteron={setFilteron} />

          {isFilteron && <Filters setFilteron={setFilteron} />}

          {/* new component based on what is selected "default is home" */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
