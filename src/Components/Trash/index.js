import React from "react";
import Card from "../Card";
import { useNote } from "../../Contexts/NoteContext";
import "./styles.css";

function Trash() {
  const { stateNote } = useNote();
  const { trashNotes } = stateNote;
  return (
    <div className="trash-container">
      Trash
      <ul className="note-list">
        {trashNotes.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Trash;
