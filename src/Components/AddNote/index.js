import React from "react";
import { useNote } from "../../Contexts/NoteContext";

import { v4 as uuid } from "uuid";

import "./styles.css";
import { useState } from "react";
import { addNewNote } from "../../Call-Apis/addNewNote";

function AddNote({ setNewNoteon }) {
  const { newNote, setNewNote } = useNote();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const AddNewNoteFunction = () => {
    addNewNote(
      {
        id: uuid(),
        noteTitle: title,
        noteData: body,
        isPinned: false,
        color: "",
        lables: [],
        isArchive: false,
        isTrash: false,
        createdAt: new Date(),
      },
      setNewNote
    );

    setTitle("");
    setBody("");
    setNewNoteon(false);

    // console.log(newNote);
  };

  return (
    <div className="newnote-container">
      <header className="newnote-header">
        <h3>Add New Note</h3>
        <button>
          <i
            className="fa-solid fa-2x fa-xmark"
            onClick={() => setNewNoteon(false)}
          ></i>
        </button>
      </header>

      <div className="newnote-title">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="newnote-body">
        <textarea
          placeholder="Note Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <div className="newnote-submit">
        <button onClick={AddNewNoteFunction}>Add Note</button>
      </div>
    </div>
  );
}

export default AddNote;
