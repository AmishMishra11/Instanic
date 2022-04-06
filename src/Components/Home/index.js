import React, { useEffect } from "react";
import { useNote } from "../../Contexts/NoteContext";
import { useFilter } from "../../Contexts/FilterContext";
import Card from "../Card";
import "./styles.css";
import { loadNewNotes } from "../../Call-Apis/loadNewNotes";

import { searchFunction } from "../../utilities/searchFunction";

import { sortingFunction } from "../../utilities/sortingFunction";

import { labelFilterFunction } from "../../utilities/labelFilterFunction";

function Home() {
  const { stateFilter, dispatchFilter } = useFilter();

  const { search, sorting, filterLables } = stateFilter;

  const { stateNote, dispatchNote } = useNote();
  const { newNote } = stateNote;

  useEffect(() => {
    loadNewNotes(dispatchNote);
  }, []);

  const pinnedNotes = newNote.filter((item) => item.isPinned);

  const newData0 = newNote.filter((item) => !item.isPinned);
  const newData1 = searchFunction(newData0, search);
  const newData2 = sortingFunction(newData1, sorting);
  const newData3 = labelFilterFunction(newData2, filterLables);

  return (
    <div>
      <div className="home">
        <button
          className="newnote"
          onClick={() =>
            dispatchNote({
              type: "DISPLAY_NOTE_EDITOR",
              payload: { show: true },
            })
          }
        >
          Create New Note
        </button>

        <button
          className="clear-filters"
          onClick={() => {
            dispatchFilter({ type: "CLEAR" });
          }}
        >
          Clear Filters
        </button>
      </div>

      <h3 className="home-title">Home</h3>
      <div className="labels-container">
        <h4>Pinned Notes</h4>

        {pinnedNotes.length !== 0 ? (
          <ul className="label-list">
            {pinnedNotes.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </ul>
        ) : (
          <div className="nothing">Nothing Here</div>
        )}

        <h4>Other Notes</h4>

        {newData3.length !== 0 ? (
          <ul className="note-list">
            {newData3.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </ul>
        ) : (
          <div className="nothing">Nothing Here</div>
        )}
      </div>
    </div>
  );
}

export default Home;
