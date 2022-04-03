import React from "react";
import "./styles.css";
function Card({ item }) {
  const { noteTitle, noteData, createdAt, id } = item;
  const date = createdAt.toString().substr(0, 10);

  return (
    <div className="card-container">
      <header>
        <h3>{noteTitle}</h3>
        <i className="fas fa-thumbtack"></i>
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
