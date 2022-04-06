import React from "react";
import { useState } from "react";
import { useFilter } from "../../Contexts/FilterContext";
import "./styles.css";
function Search({ setFilteron }) {
  const [searchText, setSearchText] = useState("");

  const { stateFilter, dispatchFilter } = useFilter();

  return (
    <div className="search-container">
      <button
        onClick={() => {
          dispatchFilter({
            type: "SEARCH",
            payload: searchText,
          });
          setSearchText("");
        }}
      >
        <i className="fas fa-2x fa-light fa-magnifying-glass"></i>
      </button>
      <input
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button className="show-filters" onClick={() => setFilteron(true)}>
        <i className="fas fa-2x fa-light fa-sliders"></i>
      </button>
    </div>
  );
}

export default Search;
