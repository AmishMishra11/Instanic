import React from "react";
import "./styles.css";
function Filters({ setFilteron }) {
  return (
    <div className="filter-container">
      <header className="filter-header">
        <h3>Sort and Filter Notes</h3>
        <button className="remove-filters" onClick={() => setFilteron(false)}>
          <i class="fa-solid fa-2x fa-xmark"></i>
        </button>
      </header>

      <div className="sortby">
        <p>Sort By</p>
        <select className="sortby-input">
          <option value="new">Newest First</option>
          <option value="old">Oldest First</option>
        </select>
      </div>

      <div className="filterby">
        <p>Filter By</p>
        <select className="filterby-input">
          <option value="lables">Lables</option>
          <option value="archives">Archives</option>
          <option value="trash">Trash</option>
        </select>
      </div>

      <div className="filter-lables">
        <p>Lables </p>
        <div className="filter-lables-container">
          <label>
            <input type="checkbox" />
            Lable 1
          </label>
          <label>
            <input type="checkbox" />
            Lable 2
          </label>
          <label>
            <input type="checkbox" />
            Lable 3
          </label>
        </div>
      </div>

      <div className="apply-filter-button">
        <button className="apply-filters">Done</button>
      </div>
    </div>
  );
}

export default Filters;
