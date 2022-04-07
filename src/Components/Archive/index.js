import React from "react";
import { useEffect } from "react";
import { loadArchive } from "../../Call-Apis/loadArchive";
import { useNote } from "../../Contexts/NoteContext";
import Card from "../Card";
import "./styles.css";
function Archive() {
  const { stateNote, dispatchNote } = useNote();
  const { archiveNotes } = stateNote;

  useEffect(() => {
    loadArchive(dispatchNote);
  }, []);

  return (
    <div className="archive-container">
      <h3> Archive</h3>

      {archiveNotes.length !== 0 ? (
        <ul className="note-list">
          {archiveNotes.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </ul>
      ) : (
        <div className="nothing">Nothing Here</div>
      )}
    </div>
  );
}

export default Archive;
