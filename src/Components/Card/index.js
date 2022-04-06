import React from "react";
import { useState } from "react";
import { addArchive } from "../../Call-Apis/addArchive";
import { addNewNote } from "../../Call-Apis/addNewNote";
import { editNote } from "../../Call-Apis/editNote";
import { removeArchive } from "../../Call-Apis/removeArchive";
import { removeNote } from "../../Call-Apis/removeNote";
import { restoreArchive } from "../../Call-Apis/restoreArchive";

import { useNote } from "../../Contexts/NoteContext";
import "./styles.css";
function Card({ item }) {
  const { noteTitle, noteData, createdAt, _id, labels, color, isPinned } = item;

  var numberDate = new Date(createdAt);

  const date = createdAt ? numberDate.toString().slice(0, 10) : "";

  const { dispatchNote, stateNote } = useNote();

  const { archiveNotes, trashNotes } = stateNote;

  const [tempColor, setTempColor] = useState(color);
  const [tempLabel, setTempLabel] = useState(labels);
  const [tempPin, setTempPin] = useState(isPinned);

  const isArchive = archiveNotes.some((item) => item._id === _id);
  const isTrash = trashNotes.some((item) => item._id === _id);

  const deleteNoteFunction = () => {
    const newItem = trashNotes.filter((item) => item._id !== _id);

    dispatchNote({
      type: "DELETE_NOTE",
      payload: newItem,
    });
  };

  return (
    <div className={`card-container ${tempColor ? "" : "active"}`}>
      <header>
        <h3>{noteTitle}</h3>
        <div className="header-icons">
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() =>
              dispatchNote({
                type: "EDIT",
                payload: { show: true, noteInfo: item },
              })
            }
          ></i>
          <i
            className={`fas fa-thumbtack ${isPinned ? "active-pin" : ""}`}
            onClick={() => {
              let tempvar3 = !tempPin;
              setTempPin((prevPin) => !prevPin);
              const tempItem = { ...item, isPinned: tempvar3 };
              editNote(_id, tempItem, dispatchNote);
            }}
          ></i>
        </div>
      </header>
      <main>{noteData}</main>

      <div className="extra">
        <div>Priority:{labels}</div>
      </div>

      <div className="card-footer">
        <p>Created on {date}</p>
        <div className="card-icons">
          <i
            className="fas fa-light fa-palette"
            onClick={() => {
              let tempvar = !tempColor;
              setTempColor((prevColor) => !prevColor);
              const tempItem = { ...item, color: tempvar };
              editNote(_id, tempItem, dispatchNote);
            }}
          ></i>
          <i
            className="fas fa-light fa-tag"
            onClick={() => {
              let tempvar2 = tempLabel === "High" ? "Low" : "High";
              setTempLabel((prevLabel) =>
                prevLabel === "High" ? "Low" : "High"
              );
              const tempItem = { ...item, labels: tempvar2 };
              editNote(_id, tempItem, dispatchNote);
            }}
          ></i>
          <i
            className="fas fa-light fa-box-archive"
            onClick={() =>
              isArchive
                ? restoreArchive(_id, dispatchNote)
                : addArchive(_id, item, dispatchNote)
            }
          ></i>

          {isTrash ? (
            <div className="already-trash">
              <i
                className="fa-solid fa-trash-arrow-up"
                onClick={() => {
                  deleteNoteFunction();
                  addNewNote(item, dispatchNote);
                }}
              ></i>

              <i
                className="fas fa-light fa-trash"
                onClick={() => {
                  deleteNoteFunction();
                }}
              ></i>
            </div>
          ) : isArchive ? (
            <i
              className="fas fa-light fa-trash"
              onClick={() => {
                removeArchive(_id, dispatchNote);
                removeNote(_id, item, dispatchNote);
              }}
            ></i>
          ) : (
            <i
              className="fas fa-light fa-trash"
              onClick={() => removeNote(_id, item, dispatchNote)}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
