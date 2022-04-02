import React from "react";
import "./styles.css";
function Card() {
  return (
    <div className="card-container">
      <header>
        <h3>Title of Note</h3>
        <i class="fas fa-thumbtack"></i>
      </header>
      <main>
        Main Body Of The Card Main Body Of The Card Main Body Of The Card Main
        Body Of The Card
      </main>
      <div className="card-footer">
        <p>Created on 26/10/2021</p>
        <div className="card-icons">
          <i class="fas fa-light fa-palette"></i>
          <i class="fas fa-light fa-tag"></i>
          <i class="fas fa-light fa-box-archive"></i>
          <i class="fas fa-light fa-trash"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
