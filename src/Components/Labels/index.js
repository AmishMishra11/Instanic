import React from "react";
import { useNote } from "../../Contexts/NoteContext";
import Card from "../Card";

import "./styles.css";

function Labels() {
  const {
    stateNote: { newNote },
  } = useNote();

  const highNotes = newNote.filter((item) => item.labels === "High");
  const lowNotes = newNote.filter((item) => item.labels === "Low");
  return (
    <div>
      <h3>Labels</h3>

      <div className="labels-container">
        <h4>High Priority</h4>

        {highNotes.length !== 0 ? (
          <ul className="label-list">
            {highNotes.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </ul>
        ) : (
          <div>Nothing Here</div>
        )}

        <h4>Low Priority</h4>

        {lowNotes.length !== 0 ? (
          <ul className="label-list">
            {lowNotes.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </ul>
        ) : (
          <div>Nothing Here</div>
        )}
      </div>
    </div>
  );
}

export default Labels;
