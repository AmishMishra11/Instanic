import React from "react";
import "./styles.css";
import { useFilter } from "../../Contexts/FilterContext";
import { useState } from "react";
function Filters({ setFilteron }) {
  const { dispatchFilter } = useFilter();

  const [sortInput, setSortInput] = useState("");
  const [filterbyLabel, setFilterbyLabel] = useState("");

  return (
    <div className="filter-container">
      <header className="filter-header">
        <h3>Sort and Filter Notes</h3>
        <button className="remove-filters" onClick={() => setFilteron(false)}>
          <i className="fa-solid fa-2x fa-xmark"></i>
        </button>
      </header>

      <div className="sortby">
        <p>Sort By</p>
        <select
          className="sortby-input"
          onClick={(e) => setSortInput(e.target.value)}
        >
          <option value="new">Newest First</option>
          <option value="old">Oldest First</option>
        </select>
      </div>

      <div className="filterby">
        <p>Filter By</p>
        <select
          className="filterby-input"
          onClick={(e) => setFilterbyLabel(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="apply-filter-button">
        <button
          className="apply-filters"
          onClick={() => {
            dispatchFilter({ type: "SORTING", payload: sortInput });
            dispatchFilter({ type: "LABELS", payload: filterbyLabel });
            setFilteron(false);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Filters;
