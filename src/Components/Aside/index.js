import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import { useNote } from "../../Contexts/NoteContext";

function Aside() {
  const [showMobile, setShowMobile] = useState(false);

  const { dispatchNote } = useNote();

  return (
    <aside className="aside-container">
      <div
        className="aside-mobile"
        onClick={() => setShowMobile((showMobile) => !showMobile)}
      >
        <h2>Options</h2>
        <i className="fa-solid fa-arrows-up-down"></i>
      </div>

      <div className={`options  ${showMobile ? "show" : "hide"} `}>
        <ul className="aside-ul">
          <li>
            <NavLink to="/authpage/home">
              <i className="fas fa-regular fa-house"></i>
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/authpage/lables">
              <i className="fas fa-light fa-tag"></i>
              <span>Lables</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/authpage/archive">
              <i className="fas fa-light fa-box-archive"></i>
              <span>Archive</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/authpage/trash">
              <i className="fas fa-light fa-trash"></i>
              <span>Trash</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/authpage/profile">
              <i className="fas fa-light fa-user"></i>
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
        <button
          className="newnote"
          onClick={() =>
            dispatchNote({
              type: "DISPLAY_NOTE_EDITOR",
              payload: { show: true },
            })
          }
        >
          Create New Note
        </button>
      </div>
    </aside>
  );
}

export default Aside;
