import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Aside() {
  return (
    <aside className="aside-container">
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
    </aside>
  );
}

export default Aside;
