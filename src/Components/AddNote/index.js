import React from "react";
import { useNote } from "../../Contexts/NoteContext";
import "./styles.css";
import { useState } from "react";
import { addNewNote } from "../../Call-Apis/addNewNote";
import { editNote } from "../../Call-Apis/editNote";

function AddNote() {
  const { stateNote, dispatchNote } = useNote();

  const { currentEditItem } = stateNote;

  const [title, setTitle] = useState(
    currentEditItem?.noteTitle ? currentEditItem?.noteTitle : ""
  );
  const [body, setBody] = useState(
    currentEditItem?.noteData ? currentEditItem?.noteData : ""
  );

  const AddNewNoteFunction = () => {
    Object.keys(currentEditItem).length !== 0
      ? editNote(
          currentEditItem._id,
          {
            noteTitle: title,
            noteData: body,
            isPinned: false,
            color: "",
            lables: [],
            isTrash: false,
            createdAt: new Date(),
          },
          dispatchNote
        )
      : addNewNote(
          {
            noteTitle: title,
            noteData: body,
            isPinned: false,
            color: "",
            lables: [],
            isTrash: false,
            createdAt: new Date(),
          },
          dispatchNote
        );

    setTitle("");
    setBody("");

    dispatchNote({ type: "DISPLAY_NOTE_EDITOR", payload: { show: false } });
  };

  return (
    <div className="newnote-container">
      <header className="newnote-header">
        <h3>Add New Note</h3>
        <button>
          <i
            className="fa-solid fa-2x fa-xmark"
            onClick={() =>
              dispatchNote({
                type: "DISPLAY_NOTE_EDITOR",
                payload: { show: false },
              })
            }
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
