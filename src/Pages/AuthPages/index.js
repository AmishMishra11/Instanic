import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NewNote from "../../Components/AddNote";
import Aside from "../../Components/Aside";
import Filters from "../../Components/Filters";
import Nav from "../../Components/Nav";
import Search from "../../Components/Search";
import { useNote } from "../../Contexts/NoteContext";

import "./styles.css";
function AuthPage() {
  const [isFilteron, setFilteron] = useState(false);

  const { stateNote } = useNote();

  const { displayNoteEditor } = stateNote;

  return (
    <div
      className={`authpage-container ${isFilteron && "overlay"} ${
        displayNoteEditor && "overlay"
      }`}
    >
      <Nav />
      <div className="container-main">
        <Aside />
        <div className="main-card-container">
          <Search setFilteron={setFilteron} />

          {isFilteron && <Filters setFilteron={setFilteron} />}

          {displayNoteEditor && <NewNote />}

          {/* new component based on what is selected "default is home" */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
