import React from "react";
import Card from "../Card";
import "./styles.css";
function Home() {
  const arr = [1, 2, 3];

  return (
    <div>
      Home
      <ul className="note-list">
        {arr.map((item) => (
          <Card />
        ))}
      </ul>
    </div>
  );
}

export default Home;
