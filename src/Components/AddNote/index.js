import React from "react";
import { useNote } from "../../Contexts/NoteContext";
import "./styles.css";
import { useState } from "react";
import { addNewNote } from "../../Call-Apis/addNewNote";
import { editNote } from "../../Call-Apis/editNote";

import { toast } from "react-toastify";

function AddNote() {
  const { stateNote, dispatchNote } = useNote();

  const { currentEditItem } = stateNote;

  const [title, setTitle] = useState(
    currentEditItem?.noteTitle ? currentEditItem?.noteTitle : ""
  );
  const [body, setBody] = useState(
    currentEditItem?.noteData ? currentEditItem?.noteData : ""
  );

  const [label, setlabel] = useState("High");

  const noteInputAlert = () => {
    toast.warn("Please fill all the fields", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const AddNewNoteFunction = () => {
    Object.keys(currentEditItem).length !== 0
      ? editNote(
          currentEditItem._id,
          {
            noteTitle: title,
            noteData: body,
            isPinned: false,
            color: true,
            tags: [],
            labels: label,
            isTrash: false,
            createdAt: Date.now(),
          },
          dispatchNote
        )
      : addNewNote(
          {
            noteTitle: title,
            noteData: body,
            isPinned: false,
            color: true,
            tags: [],
            labels: label,
            isTrash: false,
            createdAt: Date.now(),
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
        <div className="newnote-label">
          Priority :
          <select
            className="filterby-input"
            placeholder="Tags"
            onClick={(e) => setlabel(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <button
          className="submit-note"
          onClick={() =>
            title && body ? AddNewNoteFunction() : noteInputAlert()
          }
        >
          Add Note
        </button>
      </div>
    </div>
  );
}

export default AddNote;
