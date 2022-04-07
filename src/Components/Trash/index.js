import React from "react";
import Card from "../Card";
import { useNote } from "../../Contexts/NoteContext";
import "./styles.css";

function Trash() {
  const { stateNote } = useNote();
  const { trashNotes } = stateNote;
  return (
    <div className="trash-container">
      <h3>Trash</h3>
      {trashNotes.length !== 0 ? (
        <ul className="note-list">
          {trashNotes.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </ul>
      ) : (
        <div className="nothing">Nothing Here</div>
      )}
    </div>
  );
}

export default Trash;
