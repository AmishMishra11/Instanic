import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

function Aside() {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <aside className="aside-container">
      <div className="aside-mobile">
        <h2>Options</h2>
        <button
          className="mobile-button"
          onClick={() => setShowMobile((showMobile) => !showMobile)}
        >
          <i class="fa-solid fa-arrows-up-down"></i>
        </button>
      </div>

      <div className={`options  ${showMobile ? "show" : "hide"} `}>
        <ul className="aside-ul">
          <li>
            <NavLink to="/authpage/home">
              <i class="fas fa-regular fa-house"></i>
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/authpage/lables">
              <i class="fas fa-light fa-tag"></i>
              <span>Lables</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/authpage/archive">
              <i class="fas fa-light fa-box-archive"></i>
              <span>Archive</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/authpage/trash">
              <i class="fas fa-light fa-trash"></i>
              <span>Trash</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/authpage/profile">
              <i class="fas fa-light fa-user"></i>
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
        <button className="newnote">Create New Note</button>
      </div>
    </aside>
  );
}

export default Aside;
