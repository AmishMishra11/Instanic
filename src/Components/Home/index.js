import React, { useEffect } from "react";
import { useNote } from "../../Contexts/NoteContext";
import Card from "../Card";
import "./styles.css";

import { loadNewNotes } from "../../Call-Apis/loadNewNotes";

function Home() {
  const { stateNote, dispatchNote } = useNote();

  const { newNote } = stateNote;

  useEffect(() => {
    loadNewNotes(dispatchNote);
  }, []);

  return (
    <div>
      Home
      <ul className="note-list">
        {newNote.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
