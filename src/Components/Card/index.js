import React from "react";

import { useNote } from "../../Contexts/NoteContext";
import "./styles.css";
function Card({ item }) {
  const { noteTitle, noteData, createdAt } = item;

  const date = createdAt ? createdAt.toString().substr(0, 10) : "";

  const { dispatchNote } = useNote();

  return (
    <div className="card-container">
      <header>
        <h3>{noteTitle}</h3>
        <div className="header-icons">
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() =>
              dispatchNote({
                type: "EDIT",
                payload: { show: true, noteInfo: item },
              })
            }
          ></i>
          <i className="fas fa-thumbtack"></i>
        </div>
      </header>
      <main>{noteData}</main>
      <div className="card-footer">
        <p>Created on {date}</p>
        <div className="card-icons">
          <i className="fas fa-light fa-palette"></i>
          <i className="fas fa-light fa-tag"></i>
          <i className="fas fa-light fa-box-archive"></i>
          <i className="fas fa-light fa-trash"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
